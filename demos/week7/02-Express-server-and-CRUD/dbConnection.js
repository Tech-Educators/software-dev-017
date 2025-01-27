//I am separating the database connection from the main server to organise my code. You can also have it all in the server file.

//import packages
import dotenv from "dotenv";
import pg from "pg";

//initialise (activate) our .env file
dotenv.config();

//create a db pool to connect our server with our database using the connection string
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
