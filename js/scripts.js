var sentence = "brian is my name"; //string
console.log(sentence);

var sentence = 2; //number
console.log(sentence);

var yes = true; //boolean
console.log(yes);

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
  console.log(truth);
//NEW is a reserved term that won't work for something that isn't its purpose

  let rightNow = new Date();
  console.log(rightNow);


  var string = "lalalalala";  // primitive string

  var newString = new String("lalalalala"); // object string
  console.log(newString.toUpperCase());
