import styles from "./app-bord.module.css";
import AnimatedShapePerlin from "../animation/olho/olhoperl";
import OrganicText from "../animation/organictext/organictext";
import AnimatedPolyline from "../animation/curve/curve";
type Tprops = {
  name: string;
  tit?: string;
};

export function AppBorder({ name, tit }: Tprops) {
  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <div className={styles.name}>
          <OrganicText text={name} size="6rem"></OrganicText>
        </div>
        <div className={styles.name}>
          <OrganicText text={tit} size="3rem"></OrganicText>
        </div>
        <div className={styles.eye}>
          <AnimatedShapePerlin></AnimatedShapePerlin>
        </div>
      </div>
      <div className={styles.line}>
        <AnimatedPolyline></AnimatedPolyline>
      </div>
    </div>
  );
}
export default AppBorder;
