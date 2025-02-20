import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
});
