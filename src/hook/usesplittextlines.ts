import { useEffect, useRef, useState, RefObject } from "react";

export interface UseSplitTextLinesResult {
  /** Массив строк, на которые разбился текст */
  lines: string[];
  /** Ref для контейнера, ширина которого учитывается при разбиении */
  ref: RefObject<HTMLDivElement>;
}

/**
 * Хук для автоматического разбиения текста на строки
 * с учётом ширины блока и шрифта
 */
export function useSplitTextLines(text: string): UseSplitTextLinesResult {
  const ref = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (!ref.current) return;
    const container = ref.current;

    const splitText = () => {
      const words = text.split(" ");
      const result: string[] = [];

      // временный span для измерений
      const temp = document.createElement("span");
      temp.style.visibility = "hidden";
      temp.style.position = "absolute";
      temp.style.whiteSpace = "nowrap";

      // копируем шрифтовые стили
      const styles = window.getComputedStyle(container);
      temp.style.font = styles.font;
      temp.style.letterSpacing = styles.letterSpacing;

      document.body.appendChild(temp);

      let line = "";

      for (let i = 0; i < words.length; i++) {
        const word = words[i];

        // правильный расчет: пробел только если line не пустая
        const testLine = line.length > 0 ? line + " " + word : word;
        temp.textContent = testLine;

        if (temp.offsetWidth > container.clientWidth) {
          // если line пустая → слово не помещается → вставляем его целиком
          if (line.length > 0) result.push(line);
          line = word;
        } else {
          line = testLine;
        }
      }

      if (line.length > 0) result.push(line);

      document.body.removeChild(temp);

      setLines(result);
    };

    // первый рендер
    splitText();

    // отслеживаем изменение ширины контейнера
    const observer = new ResizeObserver(() => splitText());
    observer.observe(container);

    return () => observer.disconnect();
  }, [text]);

  return { lines, ref };
}