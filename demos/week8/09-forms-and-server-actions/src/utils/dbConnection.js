//I am going to set up a connection pool
import pg from "pg";

//I am accessing the connection string I stored in the .env.local file
const dbConnectionString = process.env.NEXT_PUBLIC_DATABASE_URL;

//set up a pool
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
