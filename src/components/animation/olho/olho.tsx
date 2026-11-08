"use client";

import { useEffect, useRef, useState } from "react";

type Point = [number, number];

const basePoints: Point[] = [
  [-431, 0], [-258, -157], [0, -243], [258, -157],
  [431, 0], [258, 157], [0, 243], [-55, 111],
  [-80, 0], [-55, -111], [0, -243], [55, -111],
  [80, 0], [55, 111], [0, 243], [-258, 157]
];

export default function AnimatedShape() {
  const [points, setPoints] = useState<Point[]>(basePoints);

  const paramsRef = useRef(
    basePoints.map(() => ({
      offsetX: Math.random() * 100,
      offsetY: Math.random() * 100,
      speedX: 0.4 + Math.random() * 0.6,
      speedY: 0.4 + Math.random() * 0.6,
      amplitude: 6 + Math.random() * 8
    }))
  );

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const time = performance.now() * 0.001;

      const newPoints = basePoints.map(([x, y], i) => {
        const p = paramsRef.current[i];

        return [
          x + Math.sin(time * p.speedX + p.offsetX) * p.amplitude,
          y + Math.cos(time * p.speedY + p.offsetY) * p.amplitude
        ] as Point;
      });

      setPoints(newPoints);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <svg
      viewBox="-500 -300 1000 600"
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
        fill="rgba(122, 118, 118, 0.05)"
        stroke="black"
        strokeWidth="4"
        filter="url(#glow)"
      />
    </svg>
  );
}