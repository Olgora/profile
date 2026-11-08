import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  angleX: number;
  angleY: number;
  freqX: number;
  freqY: number;
  amplitudeX: number;
  amplitudeY: number;
}

export default function AnimatedPolyline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 180;

    const numPoints = 20;
    const points: Point[] = [];

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: 0 + i * 100,
        y: 50,
        angleX: Math.random() * Math.PI * 2,
        angleY: Math.random() * Math.PI * 5,
        freqX: Math.random() * 0.05 + 0.01,
        freqY: Math.random() * 0.05 + 0.01,
        amplitudeX: Math.random() * 5 + 5,
        amplitudeY: Math.random() * 5 + 10,
      });
    }

    // функция animate видит canvas и ctx через замыкание
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      points.forEach((p, i) => {
        const offsetX = Math.sin(p.angleX) * p.amplitudeX;
        const offsetY = Math.sin(p.angleY) * p.amplitudeY;

        if (i === 0) {
          ctx.moveTo(p.x + offsetX, p.y + offsetY);
        } else {
          ctx.lineTo(p.x + offsetX, p.y + offsetY);
        }

        p.angleX += p.freqX;
        p.angleY += p.freqY;
      });

      ctx.strokeStyle = "white";
      ctx.lineWidth = 18;
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block", width: "100%",height:"40px", margin:"0" }} />;
}
