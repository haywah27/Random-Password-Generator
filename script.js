// declaring variables for later user confirm statements
var confirmLengthPass;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSpChar;

// possible characters in generated password
var allCapsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var spCharArray = ["!", "\"", "'", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~", ",", "<", ">", "/", "\\", "?", "[", "{", "}", "]", "|", "`"];

// userSelection declared outside of function so it can be updated based on different scenarios
var userSelection;

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  // confirm upper case 
  var confirmUpperCase = confirm ("include upper case? \nOK = yes \ncancel = no");

  // Asks for user for length input
  confirmLengthPass = parseInt(prompt("How many characters do you want included in your password? Choose a number between 8 and 128"));

  // prompting for user selections 
  if (!confirmLengthPass) {
      alert("This needs a value ");
      confirmLengthPass;
  } else if (confirmLengthPass < 8 || confirmLengthPass > 128) {
      // Validates user input
      // Start user input prompts
      confirmLengthPass = parseInt(prompt("You must choose between 8 and 128"));
      confirmLengthPass;
  } else {
      // Continues once user input is validated
      var confirmLowerCase = confirm ("include lower case? \nOK = yes \ncancel = no");
      var confirmNumbers = confirm ("include numbers? \nOK = yes \ncancel = no");
      var confirmSpChar = confirm ("include special characters? \nOK = yes \ncancel = no");
  };


// userSelection based on user submissions
// 4 true options
  if (confirmUpperCase && confirmLowerCase && confirmNumbers && confirmSpChar) {

    userSelection = allCapsArray.concat(allLowerArray, numbersArray, spCharArray);
  }

  // 3 true options
  else if (confirmUpperCase && confirmLowerCase && confirmNumbers) {
    userSelection = allCapsArray.concat(allLowerArray, numbersArray);
  }
  else if (confirmUpperCase && confirmLowerCase && confirmSpChar) {
    userSelection = allCapsArray.concat(allLowerArray, spCharArray);
  }
  else if (confirmUpperCase && confirmNumbers && confirmSpChar) {
    userSelection = allCapsArray.concat(numbersArray, spCharArray);
  }
  else if (confirmLowerCase && confirmNumbers && confirmSpChar) {
    userSelection = allLowerArray.concat(numbersArray, spCharArray);
  }

  // 2 true options 
  else if (confirmUpperCase && confirmLowerCase) {
    userSelection = allCapsArray.concat(allLowerArray);

  } else if (confirmUpperCase && confirmNumbers) {
    userSelection = allCapsArray.concat(numbersArray);

  } else if (confirmUpperCase && confirmSpChar) {
    userSelection = allCapsArray.concat(spCharArray);
  }
  else if (confirmLowerCase && confirmNumbers) {
    userSelection = allLowerArray.concat(numbersArray);

  } else if (confirmLowerCase && confirmSpChar) {
    userSelection = allLowerArray.concat(spCharArray);

  } else if (confirmNumbers && confirmSpChar) {
    userSelection = numbersArray.concat(spCharArray);
  }

  // 1 true option
  else if (confirmUpperCase) {
    userSelection = allCapsArray;
  }
  else if (confirmLowerCase) {
    userSelection = allLowerArray;
  }
  else if (confirmNumbers) {
    userSelection = numbersArray;
  }
  else if (confirmSpChar) {
    userSelection = spCharArray;
  }

  // Else if for 4 negative options
  else if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    userSelection = alert("You must choose a criteria!");

  };

    // empty variable to use for loop to return password inside vairable
    var randomPassword = ""
      
      for (var i = 0; i < confirmLengthPass; i++) {
        randomPassword = randomPassword + userSelection[Math.floor(Math.random() * userSelection.length)];
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
