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

//TAKE HOME DAY 5
//PART 1
// var anyNumber = prompt("Give me a number, any number!", "1, 50, 1000...");
//
// function square(number) {
//   parseInt(number);
//   alert(number * number);
// }
//
// square(anyNumber);

//PART 2
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

//PART 3
var origin = prompt("Where were you born?  Please use the example format.", "I was born...");

function originString(s) {
  return s.charAt(0).toUpperCase() + s.splice(1);
}

originString(origin);
