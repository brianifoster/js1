// const orderForm = document.forms.order;
// //
// // console.log(orderForm.quantity.value);
//
// var submitBtn = orderForm.submit;
//
// document.addEventListener('submit', function(e) {
//   e.preventDefault();
//   if(orderForm.quantity.value == null) {
//     //the time you would use it is when you don't want the default action to happen
//   }
//   //validation, verification
// });
//
// var tracker = 0;
//
// myH1.addEventListener('click', function(e) {
//   if(tracker <= 2) {
//     //do stuff...
//     tracker++
//   } else {
//     e.preventDefault();
//   }
// })

//"THIS"

// function logThis() {
//   console.log(this.name);//the word "this" should not be in quotes
// }
// //If you don't bind "this" to a scope, it will always go to window
// var name = 'Peter';
//
// function wrapLog() {
//   logThis();
// }
//
// wrapLog();

//IMPLICIT BINDING #1
// var checkScope = function() {
//   alert(`Hi, ${this.name}, we have your girlscout cookies, you fattie!!`);
// }
//
// var name = 'Peter';
//
// var user = {
//   a: checkScope,
//   name: 'Brian',
//   password: 'kewlkidd08',
//   lastlogin: new Date()
// }
//
// user.a();

//EXPLICIT BINDING #2
// var checkScope = function() {
//   alert(`Hi, ${this.name}, we have your girlscout cookies, you fattie!!`);
// }
//
// var name = 'Peter';
//
// var user = {
//   a: checkScope,
//   name: 'Brian',
//   password: 'kewlkidd08',
//   lastlogin: new Date()
// }
//
// checkScope.call(user);
// checkScope();

// var checkScope = function(product) {
//   alert(`Hi, ${this.name}, we have your ${product}, you fattie!!`);
// }
//
// var user = {
//   name: 'Brian',
//   password: 'kewlkidd08',
//
// }
//Scope and "this" are not the same thing!!!

var name = "Black Panther";

function myFunction() {
  var name = "Daredevil";
  console.log(name);
}

console.log(name);
myFunction();

let place = "Maui";

function secFunction() {
  let place = "Oahu";
  console.log(place);
}

console.log(place);

const person = "Madonna";

function thirdFunction() {
  const person = "Prince";
  console.log(person);
}

console.log(person);
