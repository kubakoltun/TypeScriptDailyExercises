export const towerBuilder = (nFloors: number): string[] => {
  let tower: string[] = [];
  let sides: number = 1;
  
  for (let i = 0; i < nFloors; i++) {
    tower[i] = "";
    if (i < nFloors-1) tower[i] += " ".repeat((nFloors-(i+1)));
    tower[i] += "*".repeat(sides);
    if (i < nFloors-1) tower[i] += " ".repeat((nFloors-(i+1)));
    sides += 2;
  }
  
  return tower;
}
