import { db } from "@/utils/dbConnection";

export default async function BirdNamePage({ params }) {
  const birdParams = await params;
  console.log(birdParams.bird_name);
  const bird = await db.query(`SELECT * FROM birds WHERE bird_name = $1`, [
    birdParams.bird_name,
  ]);

  const wrangledBird = bird.rows;
  //Our database will always give us an array of objects
  console.log(wrangledBird);
  return (
    <>
      {wrangledBird.map((oneBird) => (
        <div key={oneBird.id}>
          <h1>Bird Name: {oneBird.bird_name}</h1>
          <p>Size: {oneBird.bird_size}</p>
          <p>Fluffiness: {oneBird.fluffiness}</p>
          <p>Colour: {oneBird.bird_colour}</p>
          <p>Personality: {oneBird.personality}</p>
        </div>
      ))}
    </>
  );
}
