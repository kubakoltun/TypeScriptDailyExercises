export const findOdd = (xs: number[]): number => {
  let count: number = 0;
  let n: number = 0;

  xs.forEach((num) => {
    count = xs.filter((x) => x === num).length;
    console.log(count);
    
    if (count % 2 !== 0) {
      n = num;
    }
  });

  return n;
};
