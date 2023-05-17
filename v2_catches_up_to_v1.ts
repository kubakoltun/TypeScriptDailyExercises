export const race = (v1:number, v2:number, g:number) => {
  let timeToCatchUp: number[] = [];
  let additionalSpped = v2-v1;
  
  if (additionalSpped <= 0) {
    return null;
  }
  
  let eliminateGap: number = g/additionalSpped;
  let h: number = Math.floor(eliminateGap);
  let m: number = Math.floor((eliminateGap-h)*60);
  let s: number = Math.floor((((eliminateGap - h)*60)-m)*60);
  
  timeToCatchUp[0] = h;
  timeToCatchUp[1] = m;
  timeToCatchUp[2] = s;
  
  return timeToCatchUp;
}
