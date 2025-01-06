//I need to use the express package
//ES6
import express, { response } from "express";
//commonjs
//require(express);

//I need to initiliase express
const app = express();

//I need to tell express what language my data is written in
app.use(express.json());

//I need to host my server somewhere (in a port)
app.listen(8080, function () {
  console.log("Server running in port 8080");
});

//I need to tell my server what to do in the root route (/)
//We use this route as our testing route
//My browser needs to know what to READ (GET) in the root route
app.get("/", function (request, response) {
  response.json({ message: "This is the root route. How roude!" });
});

//I need an endpoint to READ data from the database
app.get("/database-data", function (request, response) {
  //Some code to ask the database for the data
  response.json({ data: "value" });
});

//I need to CREATE new data in the database
app.post("/add-new-data", function (request, response) {
  //The client request will contain the data body
  const data = request.body;
  //Some code to add this data body into the database
  response.json(data);
});

//======================================================
//JS has two main "dialects":
//commonjs --> default JS
//ES6 --> modern JS
//To use ES6 terminology, we need to add "type": "module" to the package.json
