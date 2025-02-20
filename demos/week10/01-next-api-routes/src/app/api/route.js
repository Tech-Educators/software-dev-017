//This is our root route
export async function GET() {
  return Response.json({ message: "This is the root route. How roude!" });
}
