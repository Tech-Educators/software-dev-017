//This route has the task to READ data from the database
import { db } from "@/utils/dbConnection";

export async function GET() {
  //query the database
  //we can handle errors with try and catch
  try {
    //you perform the task you want to try
    const result = await db.query(`SELECT * FROM birds`);
    return new Response(JSON.stringify(result.rows));
  } catch (error) {
    //you add an error message
    console.error("Status 500: Internal server error", error);
  }
}

// app.get("/birds", (req, res) => {
//task
// });
