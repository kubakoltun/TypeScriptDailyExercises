export function fibonacciSequence(stopElementIndex: number): number[] {
  let prevTri: number = 1;
  let currTri: number = 1;
  let nextTri: number = 2;
  let result: number[] = [];
  let i: number = 0;
  
  while (i !== stopElementIndex) {
    nextTri = currTri + prevTri;
    prevTri = currTri;
    currTri = nextTri;
    result[i] = (currTri);
    i++;
  }
  
  return result;
}
