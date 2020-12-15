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


var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "\"", "'", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~", ",", "<", ">", "/", "\\", "?", "[", "{", "}", "]", "|", "`"];




function generatePassword(){
  // set to empty string to avoid appending to previous password
  var userChoice = [];

  // input length, if out of params, loop until a valid response is entered
    var lengthPass = parseInt(prompt("Enter a length of password between 8 and 128."));
    while (lengthPass < 8 || lengthPass > 128 || !lengthPass){
      lengthPass = parseInt(prompt("Your password length has to be a number between 8 and 128, please re-submit"));
    }
    
    // confirm whether to include lowercase letters 
    var lowerCase = confirm("Would you like to include lower case letters?");
    if (lowerCase === true){ 
      console.log("is true lower");
      // if true (yes), add it to the userChoice array
      userChoice = userChoice.concat(lowerCaseChar);
    }

    // confirm whether to include uppercase letters 
    var upperCase = confirm("Would you like to include upper case letters?");
    if (upperCase === true){ 
      console.log("is true upper");
      userChoice = userChoice.concat(upperCaseChar);
    } 

    // confirm whether to include numbers
    var numbers = confirm("Would you like to include numbers?");
    if (numbers === true){ 
      console.log("is true numbers");
      userChoice = userChoice.concat(numberOptions);
    } 

    // confirm whether to include special characters 
    var spChar = confirm("Would you like to include special characters?");
    if (spChar === true){ 
      console.log("is true spChar");
      userChoice = userChoice.concat(specialChar);
    } 
    // if no option is confirmed, alert to try again
    if (!lowerCase || !upperCase || !numbers || !spChar){
      alert("You have to choose at least one type of character. Please try again.");
    }
    
    // create empty array for generated password
    var newPass = [];
    // for loop to designate the length of the password (length is decided by user)
    for (var i = 0; i < lengthPass; i++){
      // newPass.push posts to page // math to pick random positions in user decided arrays
      newPass.push(userChoice[Math.floor(Math.random() * userChoice.length)]);
      // will return individual strings
    } 

    // join will remove the quotes from the individual strings and make one long string
    return newPass.join("");

  }