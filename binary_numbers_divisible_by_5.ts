function divisibleByFive(binaryInput: string): boolean {
    let sum: number = 0;
    let revI: number = 0;
    
    for (let i = binaryInput.length-1; i >= 0; i--) {
        if (Number(binaryInput.charAt(i)) === 1) {
            sum += Math.pow(2, revI);
        } 
        revI++;
    }
  
    if (sum % 5 === 0) {
      return true;
    } else {
      return false
    }
}

function convertioToBinary(decimalInput: number): string {
    return decimalInput.toString(2);
}
  
//or as a regex
//export const divisibleByFive = /^(0|(101(0)*|(10(10)*0)))$/;
