export function numberToEnglish(x: number): string {
  function tellDigit(digit: number): string {
    if (digit === 1) {
      return "one";
    }
    else if (digit === 2) {
      return "two";
    }
    else if (digit === 3) {
      return "three";
    }
    else if (digit === 4) {
      return "four";
    }
    else if (digit === 5) {
      return "five";
    }
    else if (digit === 6) {
      return "six";
    }
    else if (digit === 7) {
      return "seven";
    }
    else if (digit === 8) {
      return "eight";
    }
    else if (digit === 9) {
      return "nine";
    }
    else if (digit === 10) {
      return "ten";
    }
    else {
      return "";
    }
  }
  
  function tellTeen(teenZ: number): string {
    let teen: number[] = teenZ.toString().split('').map(Number);
    
    if (teen[1] === 1) {
      return "eleven";
    }
    else if (teen[1] === 2) {
      return "twelve";
    }
    else if (teen[1] === 3) {
      return "thirteen";
    }
    else if (teen[1] === 5) {
      return "fifteen";
    }
    else if (teen[1] === 8) {
      return "eighteen";
    }
    else if (teen[1] === 4 || teen[1] === 6 || teen[1] === 7 || teen[1] === 9) {
      return tellDigit(teen[1]) + "teen";
    }
    else {
      return "";
    }
  }
  
  function tellTy(th: number): string {
    let tenth: number[] = th.toString().split('').map(Number);
    if (tenth[0] === 2) {
      return ("twenty " + tellDigit(tenth[1])).trim();
    }
    else if (tenth[0] === 3) {
      return ("thirty " + tellDigit(tenth[1])).trim();
    }
    else if (tenth[0] === 4) {
      return ("forty " + tellDigit(tenth[1])).trim();
    }
    else if (tenth[0] === 5) {
        return ("fifty " + tellDigit(tenth[1])).trim();
    }
    else if (tenth[0] === 6) {
        return ("sixty" + tellDigit(tenth[1])).trim();
    }
    else if (tenth[0] === 7) {
        return ("seventy" + tellDigit(tenth[1])).trim();
    }
    else if (tenth[0] === 8) {
        return ("eighty" + tellDigit(tenth[1])).trim();
    }
    else if (tenth[0] === 9) {
        return ("ninety" + tellDigit(tenth[1])).trim();
    }
    else {
      return "";
    }
  }
  
  
  if (x === 0) {
      return "zero";
  }
  else if (x < 11) {
   return tellDigit(x);
  }
  else if (x > 10 && x < 20) {
    return tellTeen(x);
  }
  else if (x >= 20 && x < 100) {
    return tellTy(x);
  }
  else if (x >= 100 && x < 1000) {
    let hundred: number[] = x.toString().split('').map(Number);
    if (hundred[1] > 1) {
      return (tellDigit(hundred[0]) + " hundred " + tellTy(Number(hundred[1].toString() + hundred[2].toString()))).trim();
    }
    else if (hundred[1] === 1) {
      return (tellDigit(hundred[0]) + " hundred " + tellDigit(hundred[2])).trim();
    }
    else {
      return (tellDigit(hundred[0]) + " hundred " + tellDigit(hundred[2])).trim();
    }
  }
  
    return "";
}
