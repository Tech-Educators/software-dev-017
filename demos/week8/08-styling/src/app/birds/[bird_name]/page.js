import { db } from "@/utils/dbConnection";

export default async function BirdNamePage({ params }) {
  const birdParams = await params;
  console.log(birdParams.bird_name);
  const bird = await db.query(`SELECT * FROM birds WHERE bird_name = $1`, [
    birdParams.bird_name,
  ]);

  const wrangledBird = bird.rows;

  console.log(wrangledBird);
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
