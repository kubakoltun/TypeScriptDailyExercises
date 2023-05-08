export function accum(s: string): string {
  let ns: string = "";
  
  for (let i = 0; i < s.length; i++) {
    ns += s[i].toUpperCase() + s[i].repeat(i).toLowerCase();
    i != s.length-1 ? ns += "-" : ns;
  }
  
  return ns;
}
