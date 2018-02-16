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

function Users(username, password) {
  this.username = username;
  this.password = password;
};

var users = [];

function login() {
  var username = prompt("Give me your username");
  var password = prompt("Password, please...");
  var userInfo = new Users(username, password);
  users.push(users);
  console.log(userInfo);
}

login();
