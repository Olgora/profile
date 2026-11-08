import { motion } from "framer-motion";
import { useMemo } from "react";
import styles from "./organictext.module.css";

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function OrganicText({
  text = "",
  intensity = 1, // сила “дрожания”
  speed = 0.5, // скорость анимации
  className = "",
  size = "10vw"
}) {
  const letters = useMemo(() => {
    return text.split("").map((char) => ({
      char,
      y: getRandom(1, 3) * intensity,
      rotate: getRandom(1, 4) * intensity,
      scale: getRandom(0.98, 1.02),
      duration: getRandom(1.5, 3) / speed,
      delay: getRandom(0, 0.5),
    }));
  }, [text, intensity, speed]);

  return (
    <div className={styles.name} style={{ display: "flex", fontSize: size, margin:"0", padding:"0", fontWeight:"lighter"}}>
      {letters.map((l, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          animate={{
            y: [0, -l.y, l.y, 0],
            rotate: [0, -l.rotate, l.rotate, 0],
            scale: [1, l.scale, 1],
          }}
          transition={{
            duration: l.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: l.delay,
          }}
          whileHover={{
            scale: 1.15,
            rotate: 0,
            y: -2,
          }}
        >
          {l.char === " " ? "\u00A0" : l.char}
        </motion.span>
      ))}
    </div>
  );
}
