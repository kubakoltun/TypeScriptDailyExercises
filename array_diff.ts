export function arrayDiff(a: number[], b: number[]): number[] {
  let newArr: number[] = a;
  for (let i = 0; i < b.length; i++) {
    //if (b[i] != undefined) {
      if (a.includes(b[i])) {
        newArr.delete(b[i]);
      }
    //}
  }
                               
  return newArr;
}
