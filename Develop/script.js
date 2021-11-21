// Assignment code here

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerics = "0123456789";
var spchar = "#$%&'()*+,-./:;<=>?@[]/^_`{|}~";

////////////////////////////////////////////////////////////////////////////
function generatePassword () {
  var length = window.prompt("Please type your password character length no less than 8 and no more than 128.");
  
  // create statement that limits to a number >= 8 but <= 128
  while (length < 8 || length > 128 || length === "" || length === null) {
    length = prompt("Please enter a number no smaller than 8 and no greater than 128.")
  }
  window.alert("You have chosen a password with " + length + " characters.");

  // begin boolean confirmation alerts
  // Include lowercase pr
  var lowercaseConfirm = confirm("Would you like to include some Lowercase letters in your password?");
    if (lowercaseConfirm == true) {
      charset = lowercase
      window.alert("Lowercase letters WILL  be included in your password.")
    }
    else {
      charset != lowercase 
      window.alert("Lowercase letters will NOT be included in your password.")
    }

  var uppercaseConfirm = confirm("Would you like to include some Uppercase letters in your password?");
    if (uppercaseConfirm) {
      charset = uppercase
    }

  var numericsConfirm = confirm("Would you like to include Numbers in your password?");
    if (numericsConfirm) {
      charset = numerics
    }
  
  var spcharConfirm = confirm("Would you like to include Special Characters in your passwod?");
    if (spcharConfirm) {
      charset = spchar
    }

  var charset
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  } 
  return retVal;
};

//////////////////////////////////////////////////////////////////////////////







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



// switch 