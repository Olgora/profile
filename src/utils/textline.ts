/*
 * Разбивает текст на строки по ширине контейнера
 * @param {string} text
 * @param {HTMLElement} container
 * @returns {string[]}
 */
export function splitTextToLines(text:string, container:HTMLElement) {
  if (!container) return [];

  const words = text.split(' ');
  const lines = [];

  // создаём временный элемент для измерений
  const temp = document.createElement('span');
  temp.style.visibility = 'hidden';
  temp.style.position = 'absolute';
  temp.style.whiteSpace = 'nowrap';

  // копируем важные стили
  const styles = window.getComputedStyle(container);
  temp.style.font = styles.font;
  temp.style.letterSpacing = styles.letterSpacing;

  document.body.appendChild(temp);

  let line = '';

  for (let word of words) {
    const testLine = line + (line ? ' ' : '') + word;
    temp.textContent = testLine;

    if (temp.offsetWidth > container.clientWidth) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  }

  if (line) lines.push(line);

  document.body.removeChild(temp);

  return lines;
}