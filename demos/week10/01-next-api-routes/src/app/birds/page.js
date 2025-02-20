export default async function BirdsPage() {
  //we are going to fetch the data from our API route
  const result = await fetch("http://localhost:3000/api/birds");
  const birds = await result.json();

  return (
    <>
      <h1>Birds Page</h1>
      {/* in here, I want to render the list of birds */}
      {birds.map((bird) => (
        <div key={bird.id}>
          <h1>{bird.bird_name}</h1>
        </div>
      ))}
    </>
  );
}
