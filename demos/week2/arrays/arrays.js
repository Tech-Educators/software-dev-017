//We use arrays to store more than one value
//We use square brackets to write an array
//We can store different data types in one array
//We don't usually store different data types in the same array, but it is possible
let myArray = ["Joe", "Manny", 67, true, null];

//I want to see how long my array is in the console
//Arrays have a length property that we can access to see how many items we are storing in the array
//We use a dot . to access properties or actions inside our JS elements
console.log(myArray.length);

//Examples of accessing properties using dot notation
// myH2.textContent;
// newImg.src;
// newImg.alt;

//Arrays also have an index property.
//The index tells us the order in which our items are organised by specifiying the position of each item
//To access the index property we write the name of our array, and the index number in brakets (NO DOT)
//The first position for our index property is 0 zero
console.log(myArray[3]);

//The index of the last item in an array is length - 1

//Tangent!
//During set-up we install node.js
//Node.js is a package that reads our JS and displays it in the TERMINAL
//To run a JS file in the terminal, we use the commmand node and the name of the JS file
