import { db } from "@/utils/dbConnection";
//we need to use the notFound function here to trigger our not-found page
import { notFound } from "next/navigation";

export default async function BirdNamePage({ params }) {
  const birdParams = await params;
  console.log(birdParams.bird_name);
  const bird = await db.query(`SELECT * FROM birds WHERE bird_name = $1`, [
    birdParams.bird_name,
  ]);

  const wrangledBird = bird.rows;

  console.log(wrangledBird);

  //we are adding a conditional to trigger the notFound function if wrangleBird does not have any data
  //we are finessing the logic, so the notFound function is called when the length value of our entries array is zero
  if (wrangledBird.length === 0) {
    notFound();
  }

  return (
    <>
      {wrangledBird.map((oneBird) => (
        <div key={oneBird.id} className="flex flex-col items-center">
          <h1 className="text-5xl bg-amber-600 p-6">
            Bird Name: {oneBird.bird_name}
          </h1>
          <p className="bg-sky-500">Size: {oneBird.bird_size}</p>
          <p>Fluffiness: {oneBird.fluffiness}</p>
          <p>Colour: {oneBird.bird_colour}</p>
          <p>Personality: {oneBird.personality}</p>
        </div>
      ))}
    </>
  );
}
