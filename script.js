// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// create alerts in generate password function (length between 8 and 128 (input), (confirm)lowercase, uppercase, numeric, and/or special characters)
// save input as variable
// make functions for each variable
// create arrays of characters
// alert if all options are false
// alert if length of pass is out of boundries




function generatePassword(){
  checkLength();

  // while the length input is not between 8-128, loop until the user inputs valid response
  // then proceed with the other prompts
  function checkLength() {
    var lengthPass = parseInt(prompt("Enter a length of password between 8 and 128."));
    while (lengthPass < 8 || lengthPass > 128 || !lengthPass){
      lengthPass = parseInt(prompt("Your password length has to be a number between 8 and 128, please re-submit"));
    }
    console.log("check length " + lengthPass)
    checkLower();
  }

  function checkLower(){
    var lowerCase = confirm("Would you like to include lower case letters?");
    console.log("check lower " + lowerCase)
    checkUpper();
  }


  function checkUpper(){
    var upperCase = confirm("Would you like to include upper case letters?");
    console.log("check upper " + upperCase)
    checkNums();
  }

  function checkNums(){
    var numbers = confirm("Would you like to include numbers?");
    console.log("check num " + numbers)
    checkSpChar();
  }

  function checkSpChar(){
    var spChar = confirm("Would you like to include lower case letters");
    console.log("check sp char " + spChar)
  }
 
}
