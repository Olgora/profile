import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import styles from "./colorblob.module.css";

type Props = {
  colors?: string[]; // ["#ff00cc", "#3333ff"]
  size?: number;
  followCursor?: boolean;
  blur?: number;
};

export default function AnimatedBackgroundcastomcolor({
  colors = ["#ff00cc", "#3333ff", "#00ffee"],
  size = 600,
  followCursor = true,
  blur = 500,
}: Props): JSX.Element {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const [screen, setScreen] = useState({ w: 1920, h: 1080 });

  useEffect(() => {
    const update = () => {
      setScreen({ w: window.innerWidth, h: window.innerHeight });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!followCursor) return;

    const handleMove = (e: MouseEvent): void => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, followCursor, size]);

  // 🎨 генерация градиента из массива цветов
  const background: MotionValue<string> = useTransform(mouseX, (x) => {
    const t = x / screen.w;

    const gradients = colors
      .map((color, i) => {
        const offset = 30 + i * 20 + t * 20;
        return `${color} ${offset}%`;
      })
      .join(", ");

    return `radial-gradient(circle, ${gradients}, transparent 80%)`;
  });

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <motion.div
          className={styles.blob}
          style={{
            width: size,
            height: size,
            x: springX,
            y: springY,
            background,
            filter: `blur(${blur}px)`,
          }}
        />
      </div>
    </div>
  );
}
