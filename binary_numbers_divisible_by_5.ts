function divisibleByFive(binaryInput: string): boolean {
    let sum: number = 0;
    let revI = 0;
    
    for (let i = binaryInput.length; i >= 0; i--) {
        if (Number(binaryInput.charAt(i)) === 1) {
            console.log(`is 1`);
            sum += Math.pow(2, revI);
            console.log(`pow ${Math.pow(revI, 2)}`);
            console.log(`sum ${sum}`);
        } 
        revI++;
    }
  
    if (sum % 5 === 0) {
      return true;
    } else {
      return false
    }
}
