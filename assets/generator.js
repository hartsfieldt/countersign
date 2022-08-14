// Assignment code here
var passwordLength = 0;
var UpperCase = "ABCDEFGHIJKLMNOP";
var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var Number = "0123456789";
var Symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

var passwordUpperCase = false;
var passwordLowerCase = false;
var passwordNumber = false;
var passwordSymbol = false;


var generatePassword = function() {
  while (!passwordLength) {
    passwordLength = window.prompt("How many characters would you like your password to contain?");

    passwordLength = parseInt(passwordLength);

    if (passwordLength > 128 || passwordLength < 8 || !passwordLength) {
      window.alert("Your password must be more than 8 characters long and less than 128 characters long. You password length must be a number.")
      passwordLength = 0;
    }
  }

  while (!passwordUpperCase && !passwordLowerCase && !passwordNumber && !passwordSymbol) {
    passwordUpperCase = window.confirm("Okay to confirm including upper case characters?");
    passwordLowerCase = window.confirm("Okay to confirm including lower case characters?");
    passwordNumber = window.confirm("Okay to confirm including numbers?");
    passwordSymbols = window.confirm("Okay to include symbols.");

  if (!passwordUpperCase && !passwordLowerCase && !passwordNumber && !passwordSymbol)
  window.alert("Your password must include one or more character types.");
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);