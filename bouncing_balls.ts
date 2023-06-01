export function bouncingBall(h: number, bounce: number, window: number): number {
  let loosingBounce: number = 0;
  let seen: number = 1;
  
  if (!(h > 0 && h > window && bounce > 0 && bounce < 1)) {
    return -1;
  }
  
  while (bounce)
  loosingBounce = h * bounce;
  
  seen++
  return seen;
}
