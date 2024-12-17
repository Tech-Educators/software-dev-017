//We are going to use local storage to store some data

//I want to store this data in local storage, so the user can keep browsing the shop while this data is stored in the cart
const biscuit = {
  flavour: "vanilla",
  size: "5cm",
  shape: "square",
  biscuitName: "custard cream",
  crunchiness: 6,
};

//I want to add new data to local storage
//STEP 1: Our local storage can only store strings! We need to parse our data into strings --> stringify
const stringifiedBiscuit = JSON.stringify(biscuit);
console.log(stringifiedBiscuit);

//STEP 2: add the stringified data to local storage
//setItem needs two arguments: the key (string), and the stringified data
localStorage.setItem("biscuit", stringifiedBiscuit);

//====================================================

//I want to read the data in local storage
//STEP 1: We need to get the data back
//getItem needs one argument: the key (string)
const retrievedBiscuit = localStorage.getItem("biscuit");
console.log(retrievedBiscuit);

//STEP 2: We are going to parse (translate) our data to its original structure
//parse needs one argument, which is the data we get from local storage
const parsedBiscuit = JSON.parse(retrievedBiscuit);
console.log(parsedBiscuit);

//Vocab recap
//method --> a function inside an object. We perform a task with a method
// JSON = {
// parse: function (data){
//take strings, unstringify them
// }
// }

//argument --> the element we add to a function call to replace the parameter (placeholder) in the function declaration

const JSON = {
  stringify: function (data) {
    data.makeItAString();
  },
  parse: function (data) {
    //take strings, unstringify them
    data.unstringify();
  },
};
JSON.parse(retrievedBiscuit);

localStorage = {
  getItem: function (key) {
    //read the data in local storage
    //give it to the user
  },
  setItem: function (key, value) {
    //add a key to local storage
    //assign a value to that key
  },
};
// localStorage.setItem("key", "value");
