export function spinWords(words: string): string {
    let wordsList: string[] = words.split(" ");
    
    for (let i = 0; i < wordsList.length; i++) {
      if (wordsList[i].length >= 5) {
        let letters: string[] = wordsList[i].split("");
        let revLetters: string = letters.reverse().join("");  
        wordsList[i] = revLetters;
      }
    }
  
  return wordsList.join(" ");
}
