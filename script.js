// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
}

 function getRandomItem(list) {
  return list[randomInt(list.length)]
}
  
 function generatePassword() {
  
   while(true) {

    
    // user exited the prompt
     if (userInput === null){
      return 
    }
    var userInput = window.prompt("How long do you want your password to be?")
     var passwordlength = parseInt(userInput)

     if (isNaN(passwordlength)) {
     window.alert("That's not a number!")
      } else if (passwordlength < 8 || passwordlength > 128 ) {
      window.alert("Invalid password length. Length should be between 8 and 128 characters.")
      } else {
        break
      }

     }

   var userWantsNumbers = window.confirm ("Would you like to include numbers in your password?")
   var userWantsSymbols = window.confirm ("Would you like to include symbols in your password?")
   var userWantsLowerCase = window.confirm ("Would you like to include Lowercase in your password?")
   var userWantsUppercase = window.confirm ("Would you like to include UpperCase in your password?")

   var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
   var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
   var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   var uppercaseList = []

   var optionsCart = []

   for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
   }

   if (userWantsNumbers === true){
    optionsCart.push(numberList)
   }

   if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
   }

   if (userWantsLowerCase === true) {
    optionsCart.push(lowercaseList)
   }

   if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
   }

   if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
   }

   var generatedPassword = ""

   for (var i = 0; i < passwordlength; i++) {
     var randomList = getRandomItem(optionsCart)
     var randomChar = getRandomItem(randomList)
     generatedPassword += randomChar
   }
    
   return generatedPassword
   }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

