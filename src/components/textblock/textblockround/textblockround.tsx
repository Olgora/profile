import styles from "./textblockround.module.css";
import { useSplitTextLines } from "../../../hook/usesplittextlines";

type Tprops = {
  text: string;
};

export function TextBlockRound({ text }: Tprops) {
  //const ref = useRef(null);
  //const [lines, setLines] = useState<string[]>([]);
  const { lines, ref } = useSplitTextLines(text);

  return (
    <div className={styles.main}>
      <div className={styles.top}></div>

      <div className={styles.list} ref={ref}>
        {lines.map((line, i) => (
          <div key={i} className={styles.item}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TextBlockRound;
