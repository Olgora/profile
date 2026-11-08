import { useEffect, useRef, useState } from "react";

interface Point {
  baseX: number;
  baseY: number;
  angle: number;
  freq: number;
  amplitude: number;
  normalX: number;
  normalY: number;
}

type FrameType = {
  col: number;
  heightr: number;
};
export default function AnimatedFrame({ col, heightr }: FrameType) {
  const [pathData, setPathData] = useState("");
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = heightr;

    const boxWidth = (width * 0.8) / col;
    const boxHeight = height;

    const offsetX = (width - boxWidth) / 2;
    const offsetY = 50;

    const segmentsPerSide = 10; // плотность

    const freqC = 0.0001;

    const pts: Point[] = [];

    // 🔝 TOP
    for (let i = 0; i < segmentsPerSide; i++) {
      const t = i / segmentsPerSide;
      pts.push({
        baseX: offsetX + t * boxWidth,
        baseY: offsetY,
        normalX: 0,
        normalY: -1,
        angle: Math.random() * Math.PI * 2,
        freq: Math.random() * freqC + 0.0006,
        amplitude: Math.random() * 10 + 5,
      });
    }

    // 👉 RIGHT
    for (let i = 0; i < segmentsPerSide; i++) {
      const t = i / segmentsPerSide;
      pts.push({
        baseX: offsetX + boxWidth,
        baseY: offsetY + t * boxHeight,
        normalX: 1,
        normalY: 0,
        angle: Math.random() * Math.PI * 2,
        freq: Math.random() * freqC + 0.0006,
        amplitude: Math.random() * 10 + 5,
      });
    }

    // 🔽 BOTTOM
    for (let i = 0; i < segmentsPerSide; i++) {
      const t = i / segmentsPerSide;
      pts.push({
        baseX: offsetX + boxWidth - t * boxWidth,
        baseY: offsetY + boxHeight,
        normalX: 0,
        normalY: 1,
        angle: Math.random() * Math.PI * 2,
        freq: Math.random() * freqC + 0.0006,
        amplitude: Math.random() * 10 + 5,
      });
    }

    // 👈 LEFT
    for (let i = 0; i < segmentsPerSide; i++) {
      const t = i / segmentsPerSide;
      pts.push({
        baseX: offsetX,
        baseY: offsetY + boxHeight - t * boxHeight,
        normalX: -1,
        normalY: 0,
        angle: Math.random() * Math.PI * 2,
        freq: Math.random() * freqC + 0.0006,
        amplitude: Math.random() * 10 + 5,
      });
    }

    pointsRef.current = pts;

    const animate = () => {
      const coords = pointsRef.current.map((p) => {
        const offset = Math.sin(p.angle) * p.amplitude;

        const x = p.baseX + p.normalX * offset;
        const y = p.baseY + p.normalY * offset;

        p.angle += p.freq;

        return `${x},${y}`;
      });

      const d = `M ${coords.join(" L ")} Z`;
      setPathData(d);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: heightr + 60,
        border: "2px red solid",
        margin: 0,
        padding: 0,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <path d={pathData} fill="black" stroke="white" strokeWidth="4" />
      </svg>

      <div
        style={{
          width: "70%",
          height: "700px",
          margin: "50px auto",

          position: "relative",
          zIndex: 1,
          padding: "40px",
          opacity: "0.5",
        }}
      >
        <p>Здесь может быть любая информация</p>
      </div>
    </div>
  );
}
