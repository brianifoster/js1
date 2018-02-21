// function log(string) {
//   alert(string);
// };
//
// var myTimer = setTimeout(function() {
//   log("Buy stuff!!!");
// }, 15000)
//
// if(user.login == true) {
//   clearTimeout(myTimer)
// }
// log("I'm first!");

// Session Storage
//.setItem
sessionStorage.setItem("user", {"username": "brianifoster", "role": "superadmin"});
//.getItem
var userRole = sessionStorage.getItem('user');
console.log(userRole);
//.removeItem
sessionStorage.removeItem("username"); //used if you want to replace with something
//.clear
sessionStorage.clear(); //it clears everything that was stored

//localStorage also works just like sessionStorage, except for .clear

//IIFE
var getValue = (
  function(x) {
    return function() {
      alert(x);
    };
  }
  (x));

// Firehouse blog
//Mongo db
//Express
//Angular
//Node
//Stack

//JSON - Javascript Object Notation
//JSON.parse()
//JSON.stringify()
var user = {
  name: "Brian",
  coolness: 10
};

console.log(user);

console.log(JSON.parse());
