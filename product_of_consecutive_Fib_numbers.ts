export const productFib = (prod:number): [number,number,boolean] => {
  let fib_n: number = 0;
  let fib_n_plus_1: number = 1;
  
  while (fib_n * fib_n_plus_1 < prod) {
    const next_fib = fib_n + fib_n_plus_1;
    
    fib_n = fib_n_plus_1;
    fib_n_plus_1 = next_fib;
  }
  
  if (fib_n * fib_n_plus_1 === prod) {
    return [fib_n, fib_n_plus_1, true];
  } else {
    return [fib_n, fib_n_plus_1, false];
  }  
}
