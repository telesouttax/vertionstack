"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

// Colors tuned to the brand palette: violet petals (#7C3AED / #A78BFA) fading
// to black where the pattern is near zero, with a white highlight core.
const fragmentShader = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec2 iMouse;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  void main() {
    vec2 uv    = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    vec2 mouse = (iMouse      - 0.5 * iResolution.xy) / iResolution.y;

    float t = iTime * 0.3;

    float r = length(uv) * 1.9;
    float a = atan(uv.y, uv.x);

    float mouseDist = length(uv - mouse);
    float bloom     = smoothstep(0.22, 0.0, mouseDist);

    float petals     = 5.0 + sin(t) * 2.0;
    float petalShape = sin(a * petals + r * 2.0);
    petalShape = pow(abs(petalShape), 0.5);

    float flow    = sin(r * 10.0 - t * 2.0);
    float pattern = mix(petalShape, flow, 0.5) + bloom * 0.3;
    pattern *= 1.0 - smoothstep(0.6, 1.6, r);

    vec3 color1         = vec3(0.486, 0.227, 0.929);
    vec3 color2         = vec3(0.655, 0.545, 0.980);
    vec3 highlightColor = vec3(1.0);

    vec3 finalColor = mix(
      color1,
      color2,
      smoothstep(0.5, 0.8, r + random(vec2(t, t)) * 0.1)
    ) * pattern;

    finalColor += highlightColor * pow(pattern, 12.0) * (1.0 + bloom * 0.5);

    gl_FragColor = vec4(finalColor, clamp(pattern * 0.5, 0.0, 1.0));
  }
`;

export function DigitalPetalsShader({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const startTime = performance.now();

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse: { value: new THREE.Vector2(0, 0) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.iResolution.value.set(width, height);
    };
    window.addEventListener("resize", onResize);
    onResize();
    uniforms.iMouse.value.set(container.clientWidth / 2, container.clientHeight / 2);

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      uniforms.iMouse.value.set(e.clientX - rect.left, rect.height - (e.clientY - rect.top));
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = (performance.now() - startTime) / 1000;
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);

      renderer.setAnimationLoop(null);

      const canvas = renderer.domElement;
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }

      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
