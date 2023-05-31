export function arrayDiff(a: number[], b: number[]): number[] {
  let newArr: number[] = [];
  if (b.length === 0) {
    newArr = a;
  }
  for (let i = 0; i < b.length; i++) {
      if (a.includes(b[i])) {
        let g: number = 0;
        for (let j = 0; j < a.length; j++) {
          if (a[j] !== b[i]) {
            newArr[g] = a[j];
            g++;
          } 
        }
      }  
  }
                                      
  return newArr;
}
