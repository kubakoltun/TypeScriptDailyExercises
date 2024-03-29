function divisibleByFive(binaryInput: string): boolean {
    let sum: number = 0;
    let revI: number = 0;
    // const decimalNumber = parseInt(binaryInput, 2);
    // decimalNumber % 5 === 0 ? return true : return false;
    
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
  
// or as a regex
export const divisibleByFive = /^(0|1(10)*(0|11)(01*0(01)*(00|1))*1)+$/;
