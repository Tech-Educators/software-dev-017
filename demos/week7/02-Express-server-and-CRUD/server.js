//import our packages
import express from "express";
import cors from "cors";

//If your db is in a different file, we need to import it
import { db } from "./dbConnection.js";

//Initialise our express server
const app = express();

//Tell the server to manipulate data in JSON format
app.use(express.json());

//Tell our server to share resources
app.use(cors());

//Set our local host to run our server there, in that address
//Anonymous callback arrow function
//Anonymous --> a function with no name
//Callback --> a function as the argument of another function (in this case, listen method)
//Arrow --> type of syntax used

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running is PORT ${PORT}`);
});

//Set up the root route of our server (/) --> READ (GET)
//Each route has two elements --> the address and the task
//The address here is "/"
//The task is to READ data

app.get("/", function (_, res) {
  //This is the task we are giving our route to do.
  //In this case, this route is not requesting any data to read; it's just responding with a message written in JSON.
  res.json({ message: "This is the root route. How roude!" });
});

//What tasks can we perform with our server?

//Tasks --> CRUD
//create
//read
//update
//delete

//Each task has an HTTP method assigned to it
//post
//get
//put
//delete

//I want a route to READ all the biscuits data from my table
app.get("/biscuits", async (req, res) => {
  //I query the database
  const result = await db.query(`SELECT * FROM biscuits`);
  //I parse the values into JSON and wrangle the data
  res.json(result.rows);
});

//I want to CREATE a new entry in the biscuits table
app.post("/add-biscuit", async (req, res) => {
  //we need an element that stores the new data we are adding to the database
  //Our request parameter has a body object to store this new data
  const newData = req.body;
  //I query the database
  const query = await db.query(
    `INSERT INTO biscuits (biscuit_name, src, description, crunchiness) VALUES($1, $2, $3, $4);`,
    [
      newData.biscuit_name,
      newData.src,
      newData.description,
      newData.crunchiness,
    ]
  );
  //One option is to get the query data as a response in JSON
  //   res.json(query.rows);
  //Another option is to confirmed the data was sent successfully
  res.json({ message: "Data sent to the database!" });
});

//This is an example of what the body object will look like
// body = {
//   biscuit_name: "Jaffa Cake",
//   src: "#",
//   description: "Is it a biscuit?",
//   crunchiness: 0,
// };
