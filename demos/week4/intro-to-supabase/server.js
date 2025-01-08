//I need express
import express from "express";
//I need cors
import cors from "cors";

//I need to start express
const app = express();
//I need to start cors
app.use(cors());

//I need my server to use JSON
app.use(express.json());

//I need to set up a port

app.listen(8080, () => {
  console.log(`Server running on PORT 8080`);
});

// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server running on PORT ${PORT}`);
// });

//I need a root route --> the task is to READ data / the method is get
// http://localhost:8080/ --> this is the address

app.get("/", (req, res) => {
  res.json({ message: "This is the root route. How roude!" });
});

//====================================================================

//To interact with our database and use SQL in the server, we need the pg package
//We are going to use pg to connect our database to the server and to write SQL queries
//I need to import pg
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
//I need to use the connection string that identifies my Supabase database
//Our connection string password is sensitive info! We CANNOT have it in our code.
//To store secrets in our server, we are using the .env file
//We are going to "import" our connection string stored in the .env file, so we can use it in the server file
const dbConnectionString = process.env.DATABASE_URL;

//To configure our .env file, we need to do two things:
//We need a new package! dotenv
// import dotenv from "dotenv";
//We need to configure the package
// dotenv.config();

//We need to set up a database pool to properly connect our database and server by creating a query pool
const db = new pg.Pool({
  connectionString: dbConnectionString,
});
