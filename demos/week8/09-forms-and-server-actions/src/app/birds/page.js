//I need to import my CSS module
//The name of the module here is up to you; I recommend you use the file name + styles
import birdsStyles from "@/app/birds/birds.module.css";

import { db } from "@/utils/dbConnection";

export default async function BirdsPage() {
  const birds = await db.query(`SELECT * FROM birds`);
  console.log(birds);
  const wrangledBirds = birds.rows;
  console.log(wrangledBirds);
  return (
    <>
      <h1 className={birdsStyles.birdsHeading}>
        A list of all our available birds
      </h1>

      {wrangledBirds.map((bird) => (
        <div key={bird.id} className={birdsStyles.birdsDiv}>
          <h2>{bird.bird_name}</h2>
        </div>
      ))}
    </>
  );
}
