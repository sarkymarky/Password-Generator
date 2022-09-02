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
   var userWantsLC = window.confirm ("Would you like to include Lowercase in your password?")
   var useruWantsUC = window.confirm ("Would you like to include UpperCase in your password?")
   var userWantsNUM = window.confirm ("Would you like to include numbers in your password?")
   var userWantsSYM = window.confirm ("Would you like to include symbols in your password?")

   var lcList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   var ucList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "o", "p", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
   var symList = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "|", "{", "}", "+", "=", "-" ]


   var stack = []

   for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
   }

   if (userWantsSymbols === true) {
    stack.push(symList)
   }

   if (userWantsLowerCase === true) {
    stack.push(lcList)
   }

   if (userWantsUppercase === true) {
    stack.push(ucList)
   }

   if (userWantsNumbers === true){
       stack.push(numList)
   }

   if (stack.length === 0) {
    stack.push(lcList)
   }

   var generatedPassword = ""

   for (var i = 0; i < passwordlength; i++) {
     var randomList = getRandomItem(list)
     var randomChar = getRandomItem(randomList)
     generatedPassword += randomChar
   }
    
   return generatedPassword
   }

function randominteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 function writePassword(){
 var password = generatePassword();
 var passwordtext = document.querySelector("password");

 if (!password) return
 } 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

