// var h1 = document.createElement("h1");
// var p = document.createElement('p');
// var body = document.querySelector("body");
//
// h1.innerHTML = "<h1>Hello world</h1>";
// p.textContent = "whoa!!!";
//
// body.appendChild(h1);
// body.appendChild(p);
// //create a new element
// var newDiv = document.createElement("div");
// //add height and color to see it
// newDiv.style.backgroundColor = "green";
// newDiv.style.height = "120px";
//
// body.insertBefore(newDiv, p);
//
// // body.classList.add("red-background");
// // body.classList.remove("red-background");
// body.classList.toggle('red-background');//if it exists, take it off; if it doesn't exist, turn it on.
//
// body.classList.contains("white-text");//returns a boolean
//
// body.classList.replace("white-text", "purple-text");//add/remove together
//
// var newImg = document.createElement('img');
// newImg.setAttribute("src", "https://s3.amazonaws.com/ffe-ugc/intlportal2/dev-temp/en-US/__59a48ed7599d0.jpg");
//
// body.appendChild(newImg);


//TAKE HOME 7
//Step 1 - When the user clicks a button, prompt them for the a title.
var myButton = document.createElement('button');
var body = document.querySelector('body');
myButton.innerHTML = "Click Me!";
var form = document.querySelector('form');

body.insertBefore(myButton, form);

myButton.addEventListener('click', titlePrompt);

function titlePrompt() {
  var userTitle = prompt('Give me a title');
  //Step 2 - Put that title into an h1 that is centered on the page.
  var h1 = document.createElement('h1');

  h1.innerHTML = userTitle;
  h1.style.textAlign = 'center';
  body.appendChild(h1);
}

var myForm = document.createElement('form');
var textArea = document.createElement('textarea');
var myInput = document.createElement('input');
textArea.innerHTML = "Add a few sentences about what you did today";
myInput.setAttribute("type", "Submit");
textArea.style.width = "300px";
textArea.style.height = "200px";
form.appendChild(textArea);
form.appendChild(myInput);

myInput.addEventListener('click', function();

function sentencePrompt() {
  var userSentences = console.log(textArea);
  var para = document.createElement('p');
  para.innerHTML = textArea;
});







//Step 3 - Ask the user to write a few sentences about what they did today.
