function alphanumeric(string){
  var regex = new RegExp(/^[A-Za-z\d]{1,}$/);
  return regex.test(string);
}
