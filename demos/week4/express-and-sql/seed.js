//The seed file functions the same as our SQL editor --> testing!
//We can use our seed file to create tables, insert dummy data, or test selecting different data from the tables.
//The SQL editor and the seed file are mutually exclusive – if you have created your tables in the SQL editor, you don't need a seed file.
//! For the course, we will always ask you to have a seed file with your SQL queries, so we can see them in your submissions.

//We are going to send a SQL query to the database pool that we set up
//We need to import the pool from the server file
//We imported just ONE item from the server file. I signal this with {}
import { db } from "./server.js";

//I can query my database using SQL and the querty method
db.query(
  `INSERT INTO staff (staff_name, staff_role, productivity_rating, department, ai_replaced)
    VALUES ('Frankie', 'instructor', 250000, 'digital innovation', false)`
);
