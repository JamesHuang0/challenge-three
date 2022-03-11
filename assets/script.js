// Assignment code here

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "~", "}", "{", "[", "]", "-", "_", "=", "+", "?", ".", ";"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var confirmLength = "";
var confirmNumber;
var confirmSpecialChar;
var confirmAlphaLower;
var confirmAlphaUpper;
var selectParameters;

var generatePassword = function() {
  var confirmLength = window.prompt("How many characters would you like in your password? Select an amount between 8 and 128 characters.");


    while(confirmLength <= 7 || confirmLength >= 129) {
      window.alert("Generated password length must be between 8-128 characters. Please try again.");
      generatePassword();
      break;
    }
  
  
    var confirmNumber = confirm("Click OK to include numbers in your password.");
    var confirmSpecialChar = confirm("Click OK to include special characters in your password.");
    var confirmAlphaLower = confirm("Click OK to include lowercase letters in your password.");
    var confirmAlphaUpper = confirm("Click OK to include uppercase letters in your password.");

      while(confirmNumber === false && confirmSpecialChar === false && confirmAlphaLower === false && confirmAlphaUpper === false) {
        window.alert("You must select at least ONE parameter.");
          var confirmNumber = confirm("Click OK to include numbers in your password.");
          var confirmSpecialChar = confirm("Click OK to include special characters in your password.");
          var confirmAlphaLower = confirm("Click OK to include lowercase letters in your password.");
          var confirmAlphaUpper = confirm("Click OK to include uppercase letters in your password.");
      }

    var passwordChars = []

    if (confirmNumber) {
      passwordChars = passwordChars.concat(number)
    }

    if (confirmSpecialChar) {
      passwordChars = passwordChars.concat(specialChar)
    }

    if (confirmAlphaLower) {
      passwordChars = passwordChars.concat(alphaLower)
    }

    if (confirmAlphaUpper) {
      passwordChars = passwordChars.concat(alphaUpper)
    }

    console.log(passwordChars)

    var randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + passwordChars[Math.floor(Math.random() * passwordChars.length)];
      console.log(randomPassword)
    }
    return randomPassword;

}

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
