//We use objects to store data --> we can store multiple pieces of data
//We structure our data into key/value pairs --> properties (more detailed data)

//Example

// const staff = {
//   norwich: {
//     instructor: "Manny",
//     ta: "Joe",
//     courseDirector: "Tim",
//     educationLead: "Jez",
//   },
//   liverpool: {
//     instructor: "Sam",
//   },
//   instructors: ["Manny", "Sam"],
// };

//I want to access the value "Jez"
// console.log(staff.norwich.educationLead);

//What if I want to store an action or task in my object?
//We can store functions inside objects too!

const staff = {
  norwich: {
    instructor: "Manny",
    ta: "Joe",
    courseDirector: "Tim",
    educationLead: "Jez",
  },
  liverpool: {
    instructor: "Sam",
  },
  instructors: ["Manny", "Sam"],
  askForHelp: function (staffMember) {
    console.log(`Help, ${staffMember}, please!`);
  },
};

//The function we wrote in our object is anonymous!
//In this case, our function has a key that we can use to call it
//When we have a function inside an object, we call it a method

//We can call the function as usual

console.log(staff.askForHelp(staff.norwich.ta));

//Real-world examples

//When we use our console, we always add a methods to perform a task
//console = {
// key:"value",
// key: "value",
// log: function(message){
//     add a message to the console
// }
// }

//when we manipulate our DOM using the document object!
// document = {
//     key: "value",
//     key: "value",
// createElement: function (element){
//     creates a DOM element
// },
// getElementById: function(id){
//     find the id
//     select the element that matches the id
// }
// }
