var sentence = "brian is my name"; //string
//console.log(sentence);

var sentence = 2; //number
//console.log(sentence);

var yes = true; //boolean
//console.log(yes);

{
  //a block is anything between two curly braces
  {//Block A
    {//Block B
      {//Block C
        //blocks can be infinitely nested
      }
    }
  }
}

//variable is like a nickname
  var firstNumber = 22; //Declaration and definition
  var firstNumber; //declaration
  firstNumber = 22; //definition
  var secondNumber = 11;

  //let firstNumber = 22; // to create a variable that doesn't get hoisted

  //const truth = "Ep8 was....TERRIBLE..."; // short for constant... you cannot re-define a constant
  //console.log(truth);

  {
    //const truth = "Ep8 was....TERRIBLE...";
  //  console.log(truth);
  }
  const truth = "Ep8 was... MEH...";
  //console.log(truth);
//NEW is a reserved term that won't work for something that isn't its purpose

  let rightNow = new Date();
  //console.log(rightNow);


  var string = "lalalalala";  // primitive string

  var newString = new String("lalalalala"); // object string
  //console.log(newString.toUpperCase());

  var myArray = ["hello world", 22, true, {}, null];
  //console.log(myArray.length);

  var myObject = {
    myString: "Hello World",
    magicNumber: 42
  };

  //let helloMessage = alert("Hey, there! My book is only $9.99....");
  //let confirmMessage = confirm("Is your name Jesus?");
  //console.log(confirmMessage);

  //let promptMessage = prompt("Tell me the password", "password");
  //console.log(promptMessage);

/*
const firstName = prompt("What is your first name?", "Maria");
const lastName = prompt("What is your last name?", "is the best...duh");
console.log(firstName);
alert(lastName);
let birthday = prompt("What's your birthday?", "Please answer in the following format: 1/1/1900");
confirm(new Date(birthday));

/*
Sandbox server - staging... not a live server, but a place where your
client can go to in order to see what you've been working on
*/

//This is my gh-pages branch

/*
const bestNumber = "";

console.log(!firstName && !lastName);
*/
/*
var string = "1";  //loose equal... true; strict equal... false
var number = 1;
console.log(string === number);

var string = true;
var number = 1;
console.log(string != number); //loosely NOT true
console.log(string !== number); //strictly loosely NOT true
*/
/*
let obj1 = {name:"brian"};
let obj2 = {name:"brian"};
console.log(obj1 === obj2); //false.  Cannot compare objects.
*/
/*
var primitive = "Hello World";
var stringObject = new String("Hello World");
console.log(primitive == stringObject); // this comes back true because the value is the same
console.log(typeof(primitive));
//console.log(typeof(stringObject)); // this is NOT strictly equal because one is a primitive string and the other is a string objects
*/
/*
var number1 = 12;
var number2 = 780;
number1++;
console.log(isNaN(number1));
console.log(number1);
*/
/*
var number1 = 12;
var number2 = 780;
number1 /= 12; // also * + - ...this statement changes the value of 'number1'
console.log(number1);
*/

// This is Try It Out 2 (day2)
/*
var number1 = prompt("What is your favorite number?", "10");
var number2 = prompt("What is your second favorite number?", "10");
var parsed = parseInt(number1, 10);
var parsed2 = parseInt(number2, 10);
alert("Your favorite numbers added together are " + (parsed + parsed2));
console.log(parsed + parsed2);
*/

// const bestMovie = "Reservoir Dogs";
// bestMovie !== undefined ? alert('It exists') : alert('It doesn\'t exist'); //There should be only one thing that you're evaluating for a ternary
/*
if (typeof(bestMovie) === 'string') { //if/else statement
  alert('Yay its a string');
} else if(typeof(bestMovie) === 'number') {
  alert('You gave me a number');
} else {
  alert("It's not a string"); // If/else statements don't need semicolons at the end
}
*/
/*
// switch(typeof(bestMovie)) {  //switch statement
//   case 'string':
//     alert('Yay it\'s a string');
//     break;
//   case 'number':
//     alert('Yay it\'s a number');
//     break;
//   case 'boolean':
//     alert('Yay it\'s a boolean');
//     break;
//   case 'object':
//     alert('It\'s an object');
//     break;
//   default:
//     alert('It\'s an array');
//     break;
// }
// */

// Try It Out 3 (day3)
var userAge = confirm('Are you over 18');

if(userAge == true) {
  underEighty = confirm('Are you under 80 years old');
    if(underEighty) {
      var starWars = confirm('Do you like Star Wars?');
      if(starWars) {
        alert('You rock!');
      }
    } else {
      confirm('Do you like prunes?');
    }
} else {
  alert('You\'re not old enough');
}
