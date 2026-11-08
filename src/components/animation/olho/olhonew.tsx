"use client";

import { useEffect, useRef, useState } from "react";

type Point = [number, number];

const basePoints: Point[] = [
  [-431, 0], [-258, -157], [0, -243], [258, -157],
  [431, 0], [258, 157], [0, 243], [-55, 111],
  [-80, 0], [-55, -111], [0, -243], [55, -111],
  [80, 0], [55, 111], [0, 243], [-258, 157]
];

export default function AnimatedShapeNew() {
  const [points, setPoints] = useState<Point[]>(basePoints);
  const [strokeColor, setStrokeColor] = useState("hsl(0, 80%, 60%)");

  const paramsRef = useRef(
    basePoints.map(() => ({
      offsetX: Math.random() * 100,
      offsetY: Math.random() * 100,
      speedX: 0.8 + Math.random() * 0.8, // увеличена скорость
      speedY: 0.8 + Math.random() * 0.8,
      amplitude: 10 + Math.random() * 5     // увеличена амплитуда
    }))
  );

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const time = performance.now() * 0.001;

      // обновляем точки
      const newPoints = basePoints.map(([x, y], i) => {
        const p = paramsRef.current[i];
        return [
          x + Math.sin(time * p.speedX + p.offsetX) * p.amplitude,
          y + Math.cos(time * p.speedY + p.offsetY) * p.amplitude
        ] as Point;
      });

      setPoints(newPoints);

      // плавная смена цвета
      const hue = (time * 40) % 360; // скорость смены цвета
      setStrokeColor(`hsl(${hue}, 80%, 60%)`);

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
        fill="rgba(255,255,255,0.05)"
        stroke={strokeColor}
        strokeWidth="6"
        filter="url(#glow)"
      />
    </svg>
  );
}