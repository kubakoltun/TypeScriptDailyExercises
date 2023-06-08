export function wordsToHex(words: string) {
  let wordsArr: string[] = words.split(' ');
  let hexDecimal: string = "";
  let hex: string[] = [];
  for (let i = 0; i < wordsArr.length; i++) {
    for (let j = 0; j < wordsArr[i].length; j++) {
      if (j > 2) {
        break;
      }
      hexDecimal += wordsArr[i].charCodeAt(j).toString(16).padStart(2, "0");
    }
    if (wordsArr[i].length < 3) {
      hexDecimal += '00'.repeat(3 - wordsArr[i].length);
    }
    hex[i] = '#'+hexDecimal;
    hexDecimal = "";
  }
  
  return hex;
}
