// Below are the variables that I created so that they would be called in the below functions.
var passwordLength = 0;
var UpperCase = "ABCDEFGHIJKLMNOP";
var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var Number = "0123456789";
var Symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// I added these variable so that the special characters would return a prompt if they are not returned as true.
var passwordUpperCase = false;
var passwordLowerCase = false;
var passwordNumber = false;
var passwordSymbols = false;

// I created the variable generate password to create the window confirms to confirm the  password criteria the user would like for their password.
var generatePassword = function() {
  var mainPasswordContainer = "";
  var block = "";
  while (!passwordLength) {
    passwordLength = window.prompt("How many characters would you like your password to contain?");

    passwordLength = parseInt(passwordLength);

    if (passwordLength > 128 || passwordLength < 8 || !passwordLength) {
      window.alert("Your password must be more than 8 characters long and less than 128 characters long. Your password length must be a number.")
      passwordLength = 0;
    }
  }
// Here I created a while loop to execute their selections and to then execute a password.
  while (!passwordUpperCase && !passwordLowerCase && !passwordNumber && !passwordSymbols) {
    passwordUpperCase = window.confirm("Okay to confirm including upper case characters?");
    passwordLowerCase = window.confirm("Okay to confirm including lower case characters?");
    passwordNumber = window.confirm("Okay to confirm including numbers?");
    passwordSymbols = window.confirm("Okay to include symbols?");

    if (passwordUpperCase) {
    mainPasswordContainer += UpperCase;
  }

    if (passwordLowerCase) {
      mainPasswordContainer += LowerCase;
    }

    if (passwordNumber)  {
      mainPasswordContainer += Number;
    }

    if (passwordSymbols) {
      mainPasswordContainer += Symbols;
    }

  if (!passwordUpperCase && !passwordLowerCase && !passwordNumber && !passwordSymbols)
  window.alert("Your password must include one or more character types.");
  }
// Then finally here, the below lines 56 and 57 are to generate the password with-in the length limits.
  for (var i = 0; i < passwordLength; i++) {
    block += mainPasswordContainer [Math.floor(Math.random() * mainPasswordContainer.length)]
  }

  return block;
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