function gcd(a: number, b: number): number {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

export function an(n: number): number[] {
    const a: number[] = [];
    a[0] = 7;
    if (n < 2) {
        return a;
    }
    for (let i = 2; i <= n; i++) {
        const res = a[i - 2] + gcd(i, a[i-2]);
        a[i - 1] = res;
    }
    return a;
}

export function gn(n: number): number[] {
    const arr = an(n);
    let j = 1;
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[j] - arr[i];
        j++
    }
    arr.unshift(1);
    return arr;
}

export function countOnes(n:number ):number {
  return gn(n).filter(n => n == 1).length;
}

const cache = Array.from(new Set(gn(2000000).filter(num => num != 1)))
export function p(n: number): number[] {
    return cache.slice(0, n);
}

export function maxPn(n:number ): number {
  return Math.max(...p(n));
}

export function anOver(n: number): number[] {
    const arrAN: number[] = an(10000*n);
    const arrGN: number[] = gn(10000*n);
    const res: number[] = []
    for (let i = 0; i < arrAN.length; i++) {
        if (arrGN[i] != 1) {
            res.push(arrAN[i] / (i + 1));
        }
        if (res.length == n) {
            break;
        }
    }
    return res;
}

export function anOverAverage(n:number):number {
  const arr: number[] = anOver(n);
  const arrSum: number = arr.reduce((a,b) => a + b, 0);
  return arrSum / arr.length;
}
