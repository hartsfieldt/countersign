// Below are the variables that I created so that they would be called in the below functions.
var passwordLength = 0;
var UpperCase = "ABCDEFGHIJKLMNOP";
var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var Number = "0123456789";
var Symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// I added these variable so that the special characters would return if they are not returned as true.
var passwordUpperCase = false;
var passwordLowerCase = false;
var passwordNumber = false;
var passwordSymbols = false;


var generatePassword = function() {
  while (!passwordLength) {
    passwordLength = window.prompt("How many characters would you like your password to contain?");

    passwordLength = parseInt(passwordLength);

    if (passwordLength > 128 || passwordLength < 8 || !passwordLength) {
      window.alert("Your password must be more than 8 characters long and less than 128 characters long. Your password length must be a number.")
      passwordLength = 0;
    }
  }

  while (!passwordUpperCase && !passwordLowerCase && !passwordNumber && !passwordSymbols) {
    passwordUpperCase = window.confirm("Okay to confirm including upper case characters?");
    passwordLowerCase = window.confirm("Okay to confirm including lower case characters?");
    passwordNumber = window.confirm("Okay to confirm including numbers?");
    passwordSymbols = window.confirm("Okay to include symbols.");

  if (!passwordUpperCase && !passwordLowerCase && !passwordNumber && !passwordSymbols)
  window.alert("Your password must include one or more character types.");
  }
};

var writePassword = function () {
  var array1 = [0,1,2,3,4,5,6,7,8,9];

}


// Get references to the #generate element **No need for edits**
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);