// 
var createBtn = document.querySelector("#create");

function createPassword() {

// Arrays of the possible characters that can be included in passwords.
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


var resultArray = [];
var userArray = [];

uppercaseArray [1]
//-----------------------------------------------------------------
  var numCharacter = prompt ("How much number of Character you want between 8 and 128?");
  var numbers = confirm ("Would you like to include numbers in your password?");
  var uppercases = confirm ("How about uppercase letters?");
  var lowercases = confirm ("And lowercase letters?");
  var characters = confirm ("Last question: would you like to have non-alphnumerical characters?");


// 
if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function myFunction() {
//   var copyText = document.getElementById("myInput");
//   copyText.select();
//   copyText.setSelectionRange(0, 99999)
//   document.execCommand("copy");

function copyPassword() {
  var passwordTextarea = document.getElementById("myInput");
    passwordTextarea.select();
    document.execCommand("copy");
    passwordTextarea.innerHTML = ("");
}

createBtn.addEventListener("click", writePassword);
