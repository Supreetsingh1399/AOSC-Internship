var mystring = "The quick brown fox";
function vowelscount() {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var count = 0;
  for (var i = 0; i < mystring.length; i++) {
    if (vowels.includes(mystring[i])) {
      count++;
    }
  }
  return count;
}
console.log(vowelscount(mystring));