export function formatTextWithLineBreaks(
  inputText: string,
  wordsPerLine: number
) {
  const words = inputText.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i] + " ";
    if ((i + 1) % wordsPerLine === 0) {
      result += "\n";
    }
  }
  return result;
}

const inputText =
  "This is a long text that you want to format with line breaks after every 10 words. This text will be split into words, and line breaks will be added accordingly.";
const wordsPerLine = 10;

const formattedText = formatTextWithLineBreaks(inputText, wordsPerLine);
