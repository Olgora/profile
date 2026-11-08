import styles from "./app-bordsmall.module.css";
import AnimatedPolyline from "../animation/curve/curve";

export function AppBorderSmall() {
  return (
    <div className={styles.main}>
      <div className={styles.line}>
        <AnimatedPolyline></AnimatedPolyline>
      </div>
    </div>
  );
}
export default AppBorderSmall;
