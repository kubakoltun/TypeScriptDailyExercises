export function rgb(r: number, g: number, b: number): string {
  function closest(number: number): number {
    if (number < 0) {
      return 0;
    }
    else if (number > 255) {
      return 255;
    } else {
      return number;
    }
  }
  
  function getNumberToStringOrHex(number: number): string {
    let letterASCII: number = 65;
    if (number >= 10) {
      let addition: number = number-10;
      return String.fromCharCode(letterASCII+addition);
    } else {
      return number.toString();
    } 
  }
  
  let rNumber: number = Math.floor(closest(r)/16);
  let rReminder: number = (closest(r)%16);
  
  let gNumber: number = Math.floor(closest(g)/16);
  let gReminder: number = (closest(g)%16);
  
  let bNumber: number = Math.floor(closest(b)/16);
  let bReminder: number = (closest(b)%16);
  
  let hexString: string = "";
  hexString = getNumberToStringOrHex(rNumber) + 
              getNumberToStringOrHex(rReminder) +
              getNumberToStringOrHex(gNumber) +
              getNumberToStringOrHex(gReminder) +
              getNumberToStringOrHex(bNumber) +
              getNumberToStringOrHex(bReminder);
  
  return hexString;
}
