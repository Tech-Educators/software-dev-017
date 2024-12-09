//Loops are used to do a repetitive task

//Types of loops
//For loops
//We use for loops to do a repetitive task when we know how many times we want to repeat that task

//Structure of a for loop
// for (initialisation; condition; afterthought ) {
//     Here I add the task I want to repeat (statement)
// }

for (let i = 0; i < 3; i++) {
  //I want to send a message to the console multiple times
  console.log(`Hey, this is repetition ${i}`);
}

//++ increment operator --> adds one
//-- decrement operator --> subtracts one

//while loops
//We use while loops to repeat an action or task, but in this case, we don't have a specific number of iterations
//We ALWAYS want the loop to repeat until the condition is met

//Structure of while loops
// while (condition){
// action or task to repeat
// }

//Examples --> to keep an element on the screen until user interacts
//timer that runs forever or for a very specific amount of time (sneak peek for next week)
//in a game or quizzes, the user needs to stay on a level until they pass a task or they complete an objective
//login --> to check if the user is logged in before seeing the website's content

let counter = 5;

while (counter <= 10) {
  console.log(counter);
  //you could add value from counter to avoid the infinite loop
  counter++;
}

//<= less than or equal to
//>= greater than or equal to
//-= this will subtract a number using the current value as reference
// counter += 6; --> counter = counter +  this is 10 + 6 after counter goes through the while loop
//+= this will add a number using the current value as reference

//What if we want to combine an array with a for loop?
//I want to repeat an action for each item in my array

let food = ["fava beans", "pizza", "sushi", "kombucha", "marmite"];

let sports = ["football", "basketball", "cricket", "swimming"];

//I want to display the value of my items in the console
console.log(food[0]);
console.log(food[1]);
console.log(food[2]);
console.log(food[3]);
console.log(food[4]);
console.log(food.length);
//we can use the length property to make sure that our loop iterates once per item in the array
for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}
//our variable i does not exist outside the for loop
//this console throws an error saying it's undefined
// console.log(i);

for (let i = 0; i < sports.length; i++) {
  console.log(sports[i]);
}
//The length is 5 in our array
//The index goes from 0 to 4 in our array
//The initial value  in our for loop matches the index number
//The length property value is used in the condition

//=============================================================
//There are simplified versions of our classic for loop
for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}

//this for ... of doesn't have access to the index value
//we will use the for ... of loop when we don't need to mamipulate the index value
//the foodItem includes the index value inside and the food array includes the length property inside
for (let foodItem of food) {
  console.log(foodItem);
}

//There is another "secret" of doing arrays and loops...
