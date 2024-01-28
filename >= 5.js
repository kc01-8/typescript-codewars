function spinWords(string){
  var splitString = string.split(" ");

    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i].length >= 5) {
            splitString[i] = splitString[i].split("").reverse().join("");
        }
    }

    string = splitString.join(" ");
    return string;
}
