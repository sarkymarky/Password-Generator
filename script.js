// Assignment Code
var generateBtn = document.querySelector("#generate");

function randominteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 function getRandomItem(list) {
  return list[randomInt(randomList)]
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

	 var userWantsLc = window.confirm ("Would you like to include Lowercase in your password?")
   var userWantsUpc = window.confirm ("Would you like to include UpperCase in your password?")
   var userWantsNum = window.confirm ("Would you like to include numbers in your password?")
   var userWantsSym = window.confirm ("Would you like to include symbols in your password?")

   var NUMList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
   var SYMList = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "|", "{", "}", "+", "=", "-" ]
   var LCList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   var UPCList = [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "o", "p", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]]
   
   var stack = []

   for (var i = 0; i < writePassword; i++) {
    UPCList[i] = LCList[i].toUPC()
   }

   if (userWantsNum === true){
    stack.push(NUMList)
   }

   if (userWantsSym === true) {
    stack.push(SYMList)
   }

   if (userWantsLc === true) {
    stack.push(LCList)
   }

   if (userWantsUpc === true) {
    stack.push(UPCList)
   }

   if (stack.length === 0) {
   stack.push(LCList)
   }

   var generatedPassword = ""

   for (var i = 0; i < passwordlength; i++) {
     var randomList = getRandomItem(stack)
     var randomChar = getRandomItem(randomList)
     generatedPassword == randomChar
   }
    
   return generatedPassword
   }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (passwordText) return{

  }
  if (password) return{

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

