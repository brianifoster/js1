var h1 = document.createElement("h1");
var p = document.createElement('p');
var body = document.querySelector("body");

h1.innerHTML = "<h1>Hello world</h1>";
p.textContent = "whoa!!!";

body.appendChild(h1);
body.appendChild(p);
//create a new element
var newDiv = document.createElement("div");
//add height and color to see it
newDiv.style.backgroundColor = "green";
newDiv.style.height = "120px";

body.insertBefore(newDiv, p);

// body.classList.add("red-background");
// body.classList.remove("red-background");
body.classList.toggle('red-background');//if it exists, take it off; if it doesn't exist, turn it on.

body.classList.contains("white-text");//returns a boolean

body.classList.replace("white-text", "purple-text");//add/remove together

var newImg = document.createElement('img');
newImg.setAttribute("src", "https://s3.amazonaws.com/ffe-ugc/intlportal2/dev-temp/en-US/__59a48ed7599d0.jpg");

body.appendChild(newImg);
