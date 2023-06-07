function gcd(a: number, b: number): number {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function an(n: number): number[] {
  const sequence: number[] = [7];
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 2] + gcd(i, sequence[i - 2]));
  }
  return sequence;
}

function gn(n: number): number[] {
  const sequence: number[] = [1];
  for (let i = 2; i <= n; i++) {
    sequence.push(gcd(i, sequence[i - 2]));
  }
  return sequence;
}

export function countOnes(n: number): number {
  const sequence: number[] = gn(n);
  return sequence.filter((num) => num === 1).length + 1;
}

function p(n: number): number[] {
  const sequence: number[] = gn(n);
  const primes: number[] = [];
  for (const num of sequence) {
    if (num !== 1 && isPrime(num)) {
      primes.push(num);
    }
  }
  return primes.slice(0, n);
}

function isPrime(num: number): boolean {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export function maxPn(n: number): number {
  const primes: number[] = p(n);
  return primes.length > 0 ? Math.max(...primes) : -Infinity;
}

function anOver(n: number): number[] {
  const sequence: number[] = an(n);
  const gnSequence: number[] = gn(n);
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    if (gnSequence[i] !== 1) {
      result.push(sequence[i] / (i + 1));
    }
  }
  return result;
}

export function anOverAverage(n: number): number {
  const sequence: number[] = anOver(n);
  const sum: number = sequence.reduce((a, b) => a + b, 0);
  return Math.floor(sum / sequence.length);
}
