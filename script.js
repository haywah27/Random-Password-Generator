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
  // checkLength();
  var userChoice = [];
  var newPass = [];

  // while the length input is not between 8-128, loop until the user inputs valid response
  // then proceed with the other prompts
 
  
  // check length
    var lengthPass = parseInt(prompt("Enter a length of password between 8 and 128."));
    while (lengthPass < 8 || lengthPass > 128 || !lengthPass){
      lengthPass = parseInt(prompt("Your password length has to be a number between 8 and 128, please re-submit"));
    }
    

    var lowerCase = confirm("Would you like to include lower case letters?");

    if(lowerCase === true){ 
      console.log("is true lower");
      userChoice = userChoice.concat(lowerCaseChar);
    }
    // console.log("this is userChoice: " + userChoice);
  
    // console.log(userChoice)

    var upperCase = confirm("Would you like to include upper case letters?");
    // console.log("check upper " + upperCase);

    if(upperCase === true){ 
      console.log("is true upper");
      userChoice = userChoice.concat(upperCaseChar);
    } 
    // console.log("this is userChoice: " + userChoice);


    var numbers = confirm("Would you like to include numbers?");
    if(numbers === true){ 
      console.log("is true upper");
      userChoice = userChoice.concat(numberOptions);
    } 
    // console.log("this is userChoice: " + userChoice);


    var spChar = confirm("Would you like to include special characters?");
    if(spChar === true){ 
      console.log("is true upper");
      userChoice = userChoice.concat(specialChar);
    } 
    console.log("this is userChoice: " + userChoice);


    
    

    for(var i = 0; i < lengthPass; i++){
      // var random = (Math.floor(Math.random() * userChoice.length));
      newPass.push(userChoice[Math.floor(Math.random() * userChoice.length)]);
    } 
    console.log("this is newPass: " + newPass)
    return newPass.join("");
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
 

