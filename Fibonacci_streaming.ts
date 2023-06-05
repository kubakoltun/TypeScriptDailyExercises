export function* fibonacciSequence(): Iterator<number> {
  let prev = 1;
  let curr = 1;

  while (true) {
    yield prev;
    [prev, curr] = [curr, prev + curr];
  }
}
