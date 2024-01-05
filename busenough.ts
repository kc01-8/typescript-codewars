export function enough(cap: number, on: number, wait: number): number {
  if (on + wait <= cap){
    return 0;
  } 
  else {
    return on + wait - cap;
  }
}
