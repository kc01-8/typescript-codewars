export const centuryFromYear = (year: number): number => {
  if (year % 10 == 0) {
    let a = (year / 100);
    return ~~a;
  } else {
    let a = (year / 100) + 1;
    return ~~a;
  }

  return 1;
};
