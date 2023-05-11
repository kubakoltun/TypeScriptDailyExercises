export function narcissistic(value: number): boolean {
  let sum: number = 0;
  let str: string = value.toString();
  let power: number = str.length;

  for (let i  = 0; i < str.length; i++) {
    let x: number = +str[i];
    sum += Math.pow(x, power);
  }
  
  if (sum !== value) {
    return false;
  } else {
    return true;
  }
}
