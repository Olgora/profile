import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import styles from "./colorblob.module.css";

const BLOB_SIZE = 400;

export default function AnimatedBackground(): JSX.Element {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  // 👇 делаем width/height реактивными (важно)
  const [size, setSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // цвет зависит от позиции
  const hue = useTransform(mouseX, [0, size.width], [0, 360]);

  const lightness = useTransform(mouseY, [0, size.height], [40, 70]);

  const background = useTransform(mouseX, (x) => {
  const h = (x / window.innerWidth) * 360;

  return `
    radial-gradient(circle, hsl(${h}, 90%, 60%) 0%, transparent 40%),
    radial-gradient(circle, hsl(${h + 60}, 80%, 50%) 0%, transparent 60%),
    radial-gradient(circle, hsl(${h + 120}, 70%, 50%) 0%, transparent 70%)
  `;
});

  useEffect(() => {
    const handleMove = (e: MouseEvent): void => {
      mouseX.set(e.clientX - BLOB_SIZE / 2);
      mouseY.set(e.clientY - BLOB_SIZE / 2);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.blob}
        style={{
          x: springX,
          y: springY,
          background,
        }}
      />
    </div>
  );
}
 