
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

 var favMovieOne = ['Pulp Fiction', 'Julius'];
 var favMovieTwo = ['Usual Suspects', 'Vermin'];
 var favMovieThree = ['Eternal Sunshine of the Spotless Mind', 'Joel'];
 var favMovieFour = ['Captain America: Civil War', 'Captain America'];
 var favMovieFive = ['Magnolia', 'Frank T.J. Mackey'];
 var favMovies = [];
 favMovies.push(favMovieOne, favMovieTwo, favMovieThree, favMovieFour, favMovieFive);
 var movieTitles = [];
 movieTitles.push(favMovieOne[0,0], favMovieTwo[1,0], favMovieThree[2,0], favMovieFour[3,0], favMovieFive[4,0]);
 alert(movieTitles);
