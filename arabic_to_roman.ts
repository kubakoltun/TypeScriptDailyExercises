export function solution(arabic: number): string {
  const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const numeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  let romanNumeral = ""; 
  
  for (let i = 0; i < numeralValues.length; i++) {
    while (arabic >= numeralValues[i]) {
      romanNumeral += romanNumerals[i]; 
      arabic -= numeralValues[i]; 
    }
  }
  
  return romanNumeral;
}
