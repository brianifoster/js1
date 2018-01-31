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

//named function that takes 2 arguments
function myMagicFunction(argument1, argument2) { //names for arguments are arbitrary
  console.log(`${argument1} is better than ${argument2}`);
};

myMagicFunction("Star Wars", "Star Trek");
