//We use objects to store data by attaching a label to each value
//We use curly braces to declare an object
//I store properties inside my object. Each property has a key and a value.
//We separate properties with commas ,
let city = {
  cityName: "London",
  population: 8000000,
  hasTrainStation: true,
};

//I want to access the value "London" in my object
//We are going to use dot notation to access values in an object
console.log(city.cityName);
console.log(city.population);

//Our CSS is written using a similar structure --> key/value pairs!
// h1 {
//     background-color: blue;
// }

//Let's have a look at other ways of storing data

let complexCity = {
  cityName: "London",
  population: 8000000,
  hasTrainStation: true,
  cityColours: ["red", "green", "grey", "gold"],
  boroughs: {
    Chelsea: {
      location: "centre",
      population: 400000,
    },
    Brixton: {
      location: "south",
      population: 500000,
    },
    Mitcham: {
      location: "southwest",
      population: 150000,
    },
  },
};

//I want to access the value gold
console.log(complexCity.cityColours[3]);
//I want to access the population property in Chelsea
//Properties are case sensitive
console.log(complexCity.boroughs.Chelsea.population);
//I want to access the location property in Brixton
console.log(complexCity.boroughs.Brixton.location);

//===============================================================
//Tangent: the classical way of declaring variables is with the keyword var.
//Since ES6 was released, we now use let and const to be more specific about the values we are storing
