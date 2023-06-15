export function numberToEnglish(x: number) {
  if (!Number.isInteger(x) || x < 0 || x > 99999) {
    return "";
  }
  if (x === 0) {
    return "zero";
  }

  const units = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];
  const thousands = [
    "", "thousand", "million", "billion", "trillion"
  ];

  let words = "";
  const groups = [];
    
  while (x > 0) {
    groups.push(x % 1000);
    x = Math.floor(x / 1000);
  }

  for (let i = groups.length - 1; i >= 0; i--) {
    const group = groups[i];

    if (group === 0) {
      continue;
    }

    const hundredsDigit = Math.floor(group / 100);
    const tensDigit = Math.floor((group % 100) / 10);
    const unitsDigit = group % 10;

    if (hundredsDigit > 0) {
      words += units[hundredsDigit] + " hundred ";
    }

    if (tensDigit > 1) {
      words += tens[tensDigit] + " ";
      if (unitsDigit > 0) {
        words += units[unitsDigit] + " ";
      }
    } else if (tensDigit === 1) {
      words += units[group % 100] + " ";
    } else if (unitsDigit > 0) {
      words += units[unitsDigit] + " ";
    }
    words += thousands[i] + " ";
  }

  return words.trim();
}
