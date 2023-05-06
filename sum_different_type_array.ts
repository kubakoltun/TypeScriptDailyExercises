export function sumMix(x: any[]): number {
  let sum: number = 0;
  for (let i = 0; i < x.length; i++) {
    let hold: number = Number(x[i]);
    sum += hold;
  }
  
  return sum; 
}
