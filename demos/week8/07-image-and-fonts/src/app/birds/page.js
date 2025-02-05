import { db } from "@/utils/dbConnection";

export default async function BirdsPage() {
  //I am going to query the database to get all the birds in the table
  const birds = await db.query(`SELECT * FROM birds`);
  console.log(birds);
  const wrangledBirds = birds.rows;
  console.log(wrangledBirds);
  return (
    <>
      <h1>A list of all our available birds</h1>
      {/* I will render my table entries in here */}
      {wrangledBirds.map((bird) => (
        <div key={bird.id}>
          <h2>{bird.bird_name}</h2>
        </div>
      ))}
    </>
  );
}
