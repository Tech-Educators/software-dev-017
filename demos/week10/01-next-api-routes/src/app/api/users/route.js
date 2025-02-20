//This route has the task to READ data from an external API
export async function GET() {
  try {
    const result = await fetch("https://dummyjson.com/users");
    const data = await result.json();
    const wrangledData = data.users;
    return new Response(JSON.stringify(wrangledData));
  } catch (error) {
    //Joe's funky error handling
    if (error instanceof TypeError) {
      console.error("Network error or invalid response:", error.message);
    } else if (error.message.includes("HTTP error!")) {
      console.error("API responded with an error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}

// app.get("/users", (req, res) => {
//task
// });
