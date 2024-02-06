function firstNonRepeatingLetter(s) {
    var lowerCase = s.toLowerCase();

  for (var i = 0; i < s.length; i++) {
    if (lowerCase.indexOf(lowerCase[i]) === lowerCase.lastIndexOf(lowerCase[i])) {
      return s[i];
    }
  }
  return null;
}

//Check if the first and last occurrence of a letter are equal
