function submit() {
  // take value of text box
  var palindrome = document.getElementById("pal").value;

  // replace white space and make everything lowercase
  // identify white space with regular expressions
  var reg = /[\W]/g;

  //lower case the string and replace whitespaces
  var val = palindrome.toLowerCase().replace(reg, "");

  //reverse (turn the string into an array, reverse array, and join)
  var reval = val
    .split("")
    .reverse()
    .join("");
  //length of array
  var n = val.length;

  if (reval === val) {
    document.getElementById("ans").value = reval;
  } else {
    document.getElementById("ans").value = "Not A Palindrome";
  }
}
