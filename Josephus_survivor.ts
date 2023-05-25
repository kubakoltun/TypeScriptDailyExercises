export function josephusSurvivor(n: number, k: number) {
  let downSize: number = n;
  let kStep: number = 1;
  let i: number = 0;
  let nTab: number[] = Array.from({ length: n }, (value, index) => index+1);
  
  while (nTab.length > 1) {
    if (kStep === k) {
      kStep = 0;
      nTab.splice(i, 1);
      i--;
    }
    
    kStep++;
    i++;
    
    if (i > nTab.length-1) {
      i = 0;
    }
    if(nTab.length === 1) {
      break;
    }
  }
  
  return nTab[0];
}
