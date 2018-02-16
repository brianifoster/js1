// var myString = new String('Hello World!');
// console.log(Object.getPrototypeOf(myString));

// var admin = {
//   name: 'Peter',
//   password: 'blah',
//   lastlogin: new Date (0/0/0000)
// };
//
// console.log(admin.name);//accessing a key within an object.  THIS IS CALLED ".NOTATION"
// console.log(admin['password']);//bracket notation. -->for objects
//
// var myName = {
//   firstName: 'Brian',
//   lastName: 'Foster'
// };

//Constructor functions
// function Name(first, last) {
//   this.first = first;
//   this.last = last;
// };
//
// let newPerson = new Name("Brian", "Foster");
// console.log(newPerson);
// var aBC = prompt("What's your username?");
// var xYZ = prompt("What's your password?");
var newUserForm = document.forms.newUser;
newUserForm.addEventListener("submit", function(e) {
  login(e);
});

// submit.addEventListener('click', function() {
//
// })

function Users(username, password) {
  this.username = username;
  this.password = password;
};

var users = [];

function login(e) {
  e.preventDefault();//stops it from actually submitting the information
  var username = document.querySelector('.username').value;
  var password = newUserForm.password.value;
  var userInfo = new Users(username, password);
  users.push(users);
  console.log(userInfo);
}

var calcMileage = function(miles, gallons) {
  return miles / gallons;
}

function Vehicle(wheels, type, engine, color, miles, gallons) {
  this.wheels = wheels;
  this.type = type;
  this.engine = engine;
  this.color = color;
  this.calculateGasMileage = calcMileage(miles, gallons);
}

function Engine(numOfCycls, injectionSystem, vrooms, horsees) {
  this.numOfCycls = numOfCycls;
  this.injectionSystem = injectionSystem;
  this.vrooms = vrooms;
  this.hp = horsees;
}
var myEngine = new Engine(2, 'crap', 0.00, "???");

var saturn = new Vehicle(4, "car", myEngine, "faded grey", 5, 4);
console.log(saturn);
