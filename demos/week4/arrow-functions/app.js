//This is a regular function! It uses return without smooth brackets (parentheses) as there is only one thing being returned.
function greeting(userName) {
  return `Hello ${userName}`;
}
//This is the same function but using an arrow!
const greeting = (userName) => `Hello ${userName}`;
//The arrow function above has an EXPRESSION BODY, if an arrow function has a single expression body, it has an IMPLICIT return. This means you dont need the return keyword to make the code global in scope.

//This is another regular function. When we want to make the variables userName and message available outside of the function we have to use return with smooth brackets (parentheses) as there are multiple things to return.
function handleSubmit(event) {
  event.preventDefault();
  return (
    (userName = event.target.username.value),
    (message = event.target.message.value)
  );
}

//This is the same function using an arrow! We still need to use return for the same reason as above.
const handleSubmit = (event) => {
  event.preventDefault();
  return (
    (userName = event.target.username.value),
    (message = event.target.message.value)
  );
};

//If we only had one variable to return then the return is implicit and not required:
const handleSubmit = (event) => {
  event.preventDefault();
  userName = event.target.username.value;
};

//Event listener functions:
button.addEventListener("click", function () {
  let count = 0;
  count += 1;
});

//Using an arrow function for an event listener is as simple as:
button.addEventListener("click", () => {
  let count = 0;
  count += 1;
});

//How about loops?
//regular function
games.forEach(function (game) {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

//arrow function
games.forEach((game) => {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

//Very similar again!!!

//What about async functions like fetch?
//Regular function
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

//arrow async
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

//Arrow functions make a lot more sense to use when you're confident about writing code in gerenal so if you're happier to write full functions at this point then you're not wrong!

//Challenge yourself to rewrite your previous work using arrow functions! This strategy tends to be more successful that trying to learn new concepts at the same time as learning to write arrow functions!
