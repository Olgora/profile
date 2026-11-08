"use client";

import { color } from "framer-motion";
import { col } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";

type Point = [number, number];

// Базовые точки
const basePoints: Point[] = [
  [-431, 0], [-258, -157], [0, -243], [258, -157],
  [431, 0], [258, 157], [0, 243], [-55, 111],
  [-80, 0], [-55, -111], [0, -243], [55, -111],
  [80, 0], [55, 111], [0, 243], [-258, 157]
];

// === Perlin функции ===
// fade и lerp из твоего кода
function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(a: number, b: number, t: number) {
  return (1 - t) * a + t * b;
}

// Grad и dot2
class Grad {
  x: number;
  y: number;
  constructor(x: number, y: number) { this.x = x; this.y = y; }
  dot2(x: number, y: number) { return this.x * x + this.y * y; }
}

// Простая генерация perm и gradP (обычно инициализируются один раз)
const perm = new Array(512).fill(0).map((_, i) => i & 255);
const gradP = new Array(512).fill(0).map(() => new Grad(Math.random() * 2 - 1, Math.random() * 2 - 1));

// Perlin2
function perlin2(x: number, y: number) {
  let X = Math.floor(x), Y = Math.floor(y);
  x = x - X; y = y - Y;
  X = X & 255; Y = Y & 255;

  const n00 = gradP[X + perm[Y]].dot2(x, y);
  const n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
  const n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
  const n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);

  const u = fade(x);
  return lerp(
    lerp(n00, n10, u),
    lerp(n01, n11, u),
    fade(y)
  );
}

// === React компонент ===
export default function AnimatedShapePerlin() {
  const [points, setPoints] = useState<Point[]>(basePoints); 

  // Параметры для каждого осциллятора
  const paramsRef = useRef(
    basePoints.map(() => ({
      offsetX: Math.random() * 1000,
      offsetY: Math.random() * 1000,
      speed: 0.2,
      amplitude: 20
    }))
  );

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const time = performance.now() * 0.001;

      const newPoints = basePoints.map(([x, y], i) => {
        const p = paramsRef.current[i];
        const scale=0.5
        // смещение через Perlin noise
        const dx = (perlin2(time * p.speed + x*scale, time * p.speed + y*scale)-0.5) * p.amplitude*4;
        //const dy = perlin2(0, time * p.speed + p.offsetY) * p.amplitude;

        return [x + dx, y + dx] as Point;
      });

      setPoints(newPoints);

       

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <svg
      viewBox="-600 -400 1100 800"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <polygon
        points={points.map((p) => p.join(",")).join(" ")}
        fill="rgba(255,255,255,0.05)"
        stroke="white"
        strokeWidth="20"
        
      />
    </svg>
  );
}