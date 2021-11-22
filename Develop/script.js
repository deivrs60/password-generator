// Assignment code here

/////////////////////////////////////////////////////////////////////////////

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerics = "0123456789";
var spchar = "#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
var charset = "";


/////////////////////////////////////////////////////////////////////////////

function generatePassword () {
  var length = window.prompt("Please type your password character length no less than 8 and no more than 128.");
  
  // create statement that limits to a number >= 8 but <= 128
  while (length < 8 || length > 128 || length === "" || length === null) {
    length = prompt("Please enter a number no smaller than 8 and no greater than 128.")
  }
  window.alert("You have chosen a password with " + length + " characters.");

  ///////// begin boolean confirmation alerts /////////

  // Include lowercase entries?
  var lowercaseConfirm = confirm("Would you like to include some Lowercase letters in your password?");
    if (lowercaseConfirm == true) {
      charset += lowercase;
    }
  
  // Include uppercase entries?
  var uppercaseConfirm = confirm("Would you like to include some Uppercase letters in your password?");
    if (uppercaseConfirm) {
      charset += uppercase;
    }

  // Include numeric entries?
  var numericsConfirm = confirm("Would you like to include Numbers in your password?");
    if (numericsConfirm) {
      charset += numerics;
    }

  // Include special character entries? 
  var spcharConfirm = confirm("Would you like to include Special Characters in your passwod?");
    if (spcharConfirm) {
      charset += spchar;
    }

    // If all entry options are declined, prompt a reset and alert to choose at least one
    if (lowercaseConfirm == false && uppercaseConfirm == false &&  numericsConfirm == false && spcharConfirm == false )  {
      window.alert("Please choose at lease one entry option for your password.")
      generatePassword()
    }

    // Generate the password based on selected entries!
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  

  return retVal;
};

/////////////////////////////////////////////////////////////////////////////



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