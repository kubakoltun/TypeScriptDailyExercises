export const isPangram = (phrase: string): boolean => {
  const lettersInAlphabet: number = 26;
  let uniqueLet: number = 0;
  
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].match(/[ 1234567890`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
      //{}
    } else {
      let found: boolean = false;
      for (let j = 0; j < i; j++) {
        if (phrase[i].toLowerCase() == phrase[j].toLowerCase()) {
          found = true;
          break;
        }
      }
      if (!found) {
        uniqueLet++;
      }
    }
    if (uniqueLet == lettersInAlphabet) {
      return true;
    }
  }
  
  return false;
}
