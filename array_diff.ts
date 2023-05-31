export function arrayDiff(a: number[], b: number[]): number[] {
  let newArr = a.filter(num => !b.includes(num));                 
  return newArr;
}
