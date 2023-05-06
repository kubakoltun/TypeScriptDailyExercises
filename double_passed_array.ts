export function maps(x: number[]): number[]{
  var nx: number[] = x;
  for (let i = 0; i < x.length; i++) {
    nx[i] = x[i]*2;
  }
  
  return nx;
}
