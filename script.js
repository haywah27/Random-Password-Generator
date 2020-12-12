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
  var lengthPass = prompt("Enter a length of password between 8 and 128.");
  var lowercase = confirm("Would you like to include lower case letters?");
  var uppercase = confirm("Would you like to include upper case letters?");
  var numbers = confirm("Would you like to include numbers?");
  var spChar = confirm("Would you like to include lower case letters");
  console.log(lengthPass);
  console.log(lowercase);
  console.log(uppercase);
  console.log(numbers);
  console.log(spChar);
}
