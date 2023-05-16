export function humanReadable(seconds:number):string {
  let HH: number = Math.floor(seconds/3600);
  let MM: number = Math.floor((seconds-(HH*3600))/60);
  let SS: number = seconds-(HH*3600)-(MM*60);
  
  return `${HH.toString().padStart(2, '0')}:${MM.toString().padStart(2, '0')}:${SS.toString().padStart(2, '0')}`;
}
