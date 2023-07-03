export const high = (str: string): string => {
  let word: string[] = str.split(" ");
  let sum: number = 0;
  let maxSum: number = 0;
  let result: string = "";
  
  for (let i = 0; i < word.length; i++) {
    sum = 0;
    for (let j = 0; j < word[i].length; j++) {
      sum += word[i].charCodeAt(j) - 96;
    }
    
    if (sum > maxSum) {
      maxSum = sum;
      result = word[i];
    }
  }
  
  return result;
}
