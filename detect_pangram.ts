export const isPangram = (phrase: string): boolean => {
  const lettersInAlphabet: number = 26;
  let occurencesOfLet: number = 0;
  let uniqueLet: number = 0;
  
  for (let i = 0; i < phrase.length; i++) {
    occurencesOfLet = 0;
    if (phrase[i].match(/[ 1234567890`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
      //{}
    } else {
      for (let j = 0; j < phrase.length; j++) {
        if (phrase[i] == phrase[j]) {
          console.log(` i ${phrase[i]} j ${phrase[j]} `)
          occurencesOfLet++;
          
        }
      }
      
    }
    console.log(occurencesOfLet);
    if (occurencesOfLet == 1) {
      uniqueLet++;
    }
  }
  console.log(uniqueLet);
  if (uniqueLet == lettersInAlphabet) {
    return true;
  } else {
    return false;
  }
}
