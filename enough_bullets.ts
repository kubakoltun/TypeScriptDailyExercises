export function hero(bullets: number, dragons: number): boolean {
  let lives: boolean = true;
  
  if (bullets - dragons*2 < 0) {
    lives = false;
  }
  
  return lives;
}
