// .toUpperCase()-->this a function, and we know it is because of the parentheses
// console.log()-->also a function
//everything inside the parentheses are called arguments

// var myFunc = function() { //anonymous function - you do not name it - with 0 arguments
//   console.log('You fired your anonymous function');
// };
//
// myFunc();
// //anonymous fn that takes 2 args and is assigned to a var...
// var userLogin = function(username, password) {
//   //compare coorect password for this user with the password they give you
// }

// //named function that takes 2 arguments
// function myMagicFunction(argument1, argument2) { //names for arguments are arbitrary
//   console.log(`${argument1} is better than ${argument2}`);
// };

// myMagicFunction("Star Wars", "Star Trek");
//
//
// function callMyself(number) {
//   if(number >= 0) {
//     number--;
//     console.log(number);
//   } else {
//     return
//   }
// }
//
// //FAT ARROW FUNCTIONS
// (number) => {
//   if(number >= 0) {
//     number--;
//     console.log(number);
//   } else {
//     return
//   }
// }

//RETURN statement works like a break; it can also return a value

// function givesMeBestNumber(number) { //declaration
//   if(number === 42) {
//     return `${number} is the best number!`;
//   } else {
//     alert(`${number} sucks!!!`);
//   }
// }



// let message = givesMeBestNumber(33); //call

// alert(message);
// const dogAge = prompt("How old is your dog?", '3');
//
// function calcDogYears(age) {
//   parseInt(age);
//   if(isNaN(age)) {
//     //if the user gives me a non-number...
//     calcDogYears(prompt('Nah, for real...NUMBER', '10')); //edge-casing
//   } else {
//     alert(age *= 7);//this is this age = age * 7
//   }
// }
//
// calcDogYears(dogAge); //this is the call, and you must have it

//METHOD
// var myString = "lalala";
// myString.toUpperCase();
// myString//object.toUpperCase();//method;   //you can tell it's a method because it's attached to something with a .

//TRY IT OUT DAY 5
// var userAge = prompt("Hold old are you?", "30");
// var product = prompt("How much product do you use each day?", "15");
//
// function calcQty(age, qty) {
//   parseInt(age, qty);
//   if(isNaN(age, qty)) {
//     calcQty(prompt("Oops! We need an actual number.", "18"));
//   } else {
//     alert(`You will need ${(80 - age) * (qty * 365)} to last you until you're 80.`);
//   }
// }
//
// calcQty(userAge, product);


//TAKE HOME DAY 5 - On your day5 branch write a program that uses functions to:

//PART 1 - Take a number and return the square of that number (power of 2).

// var anyNumber = prompt("Give me a number, any number!", "1, 50, 1000...");
//
// function square(number) {
//   parseInt(number);
//   alert(number * number);
// }
//
// square(anyNumber);


//PART 2 - If a non-number argument is passed into the function, alert NaN and prompt for another response

// var anyNumber = prompt("Give me a number, any number!", "10");
//
// function square(number) {
//   parseInt(number);
//   if(isNaN(number)) {
//   square(prompt("Oops, that's not a number. Please give us a number.", "10"));
// } else {
//   alert(number * number);
//   }
// }
//
// square(anyNumber);

//PART 3 - In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period

// var originString = prompt("Where are you from?");
//
// function format(string) {
//   if(string.charAt(string.length -1) === ".") {
//     console.log(string.charAt(0).toUpperCase() + string.slice(1));
//   } else {
//     console.log(string.charAt(0).toUpperCase() + string.slice(1) + ".");
//   }
// }
//
// format(originString);

//PART 4 - Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.

// var wholeString = "abcdef";
//
// function flip(string) {
//   let abcString = string.substr(0, 3);
//   let defString = string.substr(3);
//   console.log(defString + abcString);
// }
//
// flip(wholeString);

//BONUS - If you are bored by all that, write a function that checks if a given string is a palindrome.

// var myPalindrome = prompt("Type in a word to find out if it's a palindrome", "mom");
//
// function palindrome(myString) {
//   var lowerCase = myString.toLowerCase();
//   var checkPalindrome = lowerCase.split("").reverse().join("");
//   if(lowerCase === checkPalindrome) {
//     alert(`${myString} is a palindrome`);
//   } else {
//     alert(`${myString} is not a palindrome`);
//   }
// }
//
// palindrome(myPalindrome);
