export function bouncingBall(h: number, bounce: number, window: number): number {
  let loosingBounce: number = h;
  let seen: number = 1;
  
  if (!(h > 0 && h > window && bounce > 0 && bounce < 1)) {
    return -1;
  }
  
  while (loosingBounce > window) {
    loosingBounce *= bounce;
    if (loosingBounce > window) {
      seen += 2;
    } 
  }
  
  return seen;
}
