
// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChara = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//global var 
var pwLength; 
var pushLower;
var pushUpper;
var pushNumber;
var pushSpecialChara;
var pwChoice = []; 
var selection = [];

var generateBtn = document.querySelector("#generate");

 

// Get references to the #generate element
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePw();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePw(){
    pwLength = prompt("Please choose characters between 8-128.")
    if(pwLength < 8 || pwLength > 128){
    pwLength = prompt ("Required corect value (between 8-128).")
    return null} 
    pushLower = confirm("Do you want your PW to contain lower case letters?");
    pushUpper = confirm("Do you want your PW to contain upper case letters?");
    pushNumber = confirm("Do you want your PW to contain numbers?");
    pushSpecialChara = confirm("Do you want your PW to contain special charaters?"); 
  
// for all of the above true
  if (pushNumber && pushSpecialChara && pushUpper && pushLower) {
  selection = specialChara.concat(number, lowerCase, upperCase);
}
// three option selected
  else if (pushNumber && pushSpecialChara && pushUpper) {
  selection = specialChara.concat(number, upperCase);
} else if (pushSpecialChara && pushUpper && pushLower) {
  selection = specialChara.concat(lowerCase, upperCase);
} else if (pushUpper && pushLower && pushNumber) {
  selection = upperCase.concat(lowerCase, number);
} else if (pushLower && pushNumber && pushSpecialChara) {
  selection = letters.concat(number, specialChara);
}
//two option selected
  else if (pushSpecialChara && pushNumber) {
  selection = specialChara.concat(number);
} else if (pushLower && pushUpper) {
  selection = number.concat(upperCase);
} else if (pushUpper && pushLower) {
  selection = upperCase.concat(lowerCase);
} else if (pushLower && number) {
  selection = lowerCase.concat(number);
} else if (pushLower && pushSpecialChara) {
  selection = lowerCase.concat(specialChara);
} else if (pushSpecialChara && pushUpper) {
  selection = specialChara.concat(upperCase);
}
//one option selected
  else if (pushSpecialChara) {
  selection = specialChara;
} else if (pushNumber) {
  selection = number;
} else if (pushLower) {
  selection = lowerCase;
} else if (pushUpper) {
  selection = upperCase;
};

// Add event listener to generate button
  var pwBlank = "";
  for (var i = 0; i < pwLength; i++){
  var randomIndex = selection[Math.floor(Math.random()* selection.length)];
  console.log(selection); 
  console.log(randomIndex);
  pwChoice.push(randomIndex); 
  console.log(pwChoice); 
}
return pwChoice.join("");
}
