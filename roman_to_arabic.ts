export function solution(roman: string): number {
  let arabic: number = 0;
  let subtraction:  boolean = false;
  
  function charToArabic(romanDigit: string): number {
    if (romanDigit === 'I') {
      return 1;
    }
    if (romanDigit === 'V') {
      return 5;
    }
    if (romanDigit === 'X') {
      return 10;
    }
    if (romanDigit === 'L') {
      return 50;
    }
    if (romanDigit === 'C') {
      return 100;
    }
    if (romanDigit === 'D') {
      return 500;
    }
    if (romanDigit === 'M') {
      return 1000;
    } else {
      return 0;
    }
  }
  
  for (let i = 0; i < roman.length; i++) {
    subtraction = false;
    if (i != roman.length-1 && charToArabic(roman.charAt(i)) < charToArabic(roman.charAt(i+1))) {
      subtraction = true;
    }
    if (roman.charAt(i) === 'I') {
      subtraction ? arabic -= 1 : arabic += 1;
    }
    if (roman.charAt(i) === 'V') {
      subtraction ? arabic -= 5 : arabic += 5;
    }
    if (roman.charAt(i) === 'X') {
      subtraction ? arabic -= 10 : arabic += 10;
    }
    if (roman.charAt(i) === 'L') {
      subtraction ? arabic -= 50 : arabic += 50;
    }
    if (roman.charAt(i) === 'C') {
      subtraction ? arabic -= 100 : arabic += 100;
    } 
    if (roman.charAt(i) === 'D') {
      subtraction ? arabic -= 500 : arabic += 500;
    }
    if (roman.charAt(i) === 'M') {
      subtraction ? arabic -= 1000 : arabic += 1000;
    }
  }
  
  return arabic;
}
