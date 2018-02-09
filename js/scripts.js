//The DOM is an API.  The DOM is where Javascript, HTML, and CSS meet.
/*TRY IT OUT - Create a function that queries the DOM for the body tag using all of these methods. Log the results to your console.
The function should take 2 arguments: the DOM selector method the user wants to employ and the name of the DOM selector to be searched for.*/

// var userQueryType = prompt("Which type do you want to use?", "Please use either 'tag', 'class', 'id', 'selector', 'selectorAll'");
//
// function queryDom(queryType, tagToQuery) {
//   tagToQuery = 'body';
//   switch(queryType) {
//     case 'tag':
//       console.log(document.getElementsByTagName('body')[0]);
//       break;
//     case 'class':
//       console.log(document.getElementsByClassName('bodyTag')[0]);
//       break;
//     case 'id':
//       console.log(document.getElementById('bodyTag');
//       break;
//     case 'selector':
//       console.log(document.querySelector('body'));
//       break;
//     case 'selectorAll':
//       console.log(document.querySelectorAll('body')[0]);
//   }
// }

//In Javascript, all functions are first class functions because the functions can be passed from one function to another

//TAKEHOME6 - Write a program that converts temperatures. It should:

//STEP 1 - Employ a function that accepts two arguments: temperature and scale (either celcius or fahrenheit).

//STEP 2 - Display the temperature in an h3 with minimal styling.

//STEP 3 - When the user clicks on the h3, run the function to convert the temperature.

//STEP 4 - Display the converted temperature in the h3.

// var tempNum = prompt("What's the temperature today?", "32");
// var tempScale = prompt("Is that Fahrenheit or Celcius?", "F or C");
//
// function calcTemp(temp, scale) {
//   parseInt(temp);
//   if(isNaN(temp)) {
//     calcTemp(prompt("Oops! We need an actual number.", "32"));
//   } else {
//     alert(`The temperature is ${temp} ${scale.toUpperCase()}`);
//   }
// }
//
// calcTemp(tempNum, tempScale);
//
// var getH3 = document.querySelector(".myTemp");
// console.log(getH3);


//TRY IT OUT - 1.) On your day6 branch, create a basic HTML mockup with a button, a div with some height and background color, and an h1 with some text

var myDiv = document.querySelector(".my-div"),
myButton = document.querySelector("button"),
myTitle = document.querySelector(".my-title");

myButton.addEventListener("click", () => {
  alert("How darest thou?!");
});

color = ["blue", "green", "black", "purple", "yellow"];

myDiv.addEventListener('mouseenter', function(e) {
  myDiv.style.backgroundColor = "randomColor(0, color.length - 1);"
});

//FUNCTION FOR GETTING A RANDOM # FROM AN ARRAY

function randomColor(min, max) {
  var num = Math.round(Math.random() * (max - min) + min);
  return color[num];
};
