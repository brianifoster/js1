
  //var arr = []; //Basic array

  // var arr = ['thingOne', 22, true, {}, []];
  // console.log(arr[0], arr[3]); // array index 1

  // var myArr = ["It", 7, true, 1990];
  // console.log(myArr, myArr.length);
  //
  // console.log(typeof(myArr));
  // console.log(Array.isArray(myArr));
  //
  // var bestTeacher = prompt('Who is the best teacher?', 'Damon');
  // myArr.push(bestTeacher); //you can use .unshift instead of .push to put it in front of the array
  // console.log(myArr);
  // console.log(myArr, 'Before!!!');
  // var removeItem = myArr.slice(0,2);
  // myArr.pop();
  // console.log(removeItem, myArr); // You can remove an item, but you can still keep it



//if you can make an if/else into a switch, you should

// alert(`Hey there, ${firstName} it looks like you love ${favColor} and your last name is ${lastName}.`) --better than using ("Hey there, " + firstName + "it looks like you love " + favColor + "and your last name is " + lastName + ".");

// var arr = [1, 2, 3, 4, 5];
// if(arr.indexOf(6) !== -1) {
//   //Do some logic there
// } else {
//   //do some logic here
// }

var favMovieOne = ['Pulp Fiction', 'Julius'];
var favMovieTwo = ['Usual Suspects', 'Vermin'];
var favMovieThree = ['Eternal Sunshine of the Spotless Mind', 'Joel'];
var favMovieFour = ['Captain America: Civil War', 'Captain America'];
var favMovieFive = ['Magnolia', 'Frank T.J. Mackey'];
var favMovies = [];
favMovies.push(favMovieOne, favMovieTwo, favMovieThree, favMovieFour, favMovieFive);
// console.log(favMovies);
// var movieTitles = [];
// movieTitles.push(favMovieOne[0,0], favMovieTwo[1,0], favMovieThree[2,0], favMovieFour[3,0], favMovieFive[4,0]);
// alert(movieTitles);
// var bestLast = [];
// bestLast.push(favMovies[0][0], favMovies[4][0]);
// console.log(bestLast);
// alert(favMovies.length);

 // let i = 0;
 //
 // while (i < favMovies.length) {  //while loop
 //   console.log(favMovies[i]);
 //   i++; //without this, it will be an infinite loop
 // }
//for loop; best practice is to use "let" instead of "var"

 for (var i = 0; i < favMovies.length; i++) {
   if(favMovies[i][0] === "Pulp Fiction") {
     alert(`${favMovies[i][0]} is my favorite movie with ${favMovies[i][1]}.`);
   }
} //this is for Try It Out #3 in Day 4


//do..while loop
// var i = 0;

// do {
//   console.log(favMovies[i]);
// } while(i < favMovies.length);
