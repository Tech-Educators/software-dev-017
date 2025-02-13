//I want to add an edit feature in this nested route that uses the bird name params as the unique identifier, in this particular case

//Tools:
//- params
//- server action for the user to trigger the update
//- pre-filled form to use the submit button

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UpdateBird({ params }) {
  const slug = await params;

  //query our db to get all the data for one particular bird
  //this data will be stored in formValues that we will use to pre-fill our form inputs
  const oneBird = await db.query(`SELECT * FROM birds WHERE bird_name = $1`, [
    slug.bird_name,
  ]);
  console.log(oneBird);
  //I need to wrangle the bird data
  const wrangledBird = oneBird.rows[0];
  console.log(wrangledBird);

  async function handleUpdate(formData) {
    "use server";
    //access the input value first
    const birdName = formData.get("bird_name");
    const birdSize = formData.get("bird_size");
    const fluffiness = formData.get("fluffiness");
    const birdColour = formData.get("bird_colour");
    const personality = formData.get("personality");
    //another option is to have a formValues object and have each input as one property of the object
    // const formValues = {
    //   birdName: formData.get("bird_name"),
    //   ...
    // };
    //sql query to update the input value
    //make sure you add your WHERE condition
    await db.query(
      `UPDATE birds SET bird_name = $1, bird_size = $2, fluffiness = $3, bird_colour = $4, personality = $5 WHERE bird_name = $6`,
      [birdName, birdSize, fluffiness, birdColour, personality, slug.bird_name]
    );

    revalidatePath("/birds");
    revalidatePath(`/birds/${slug.bird_name}`);
    redirect(`/birds/${slug.bird_name}`);
  }

  return (
    <>
      <h1>Update the bird&apos;s information</h1>
      <p>Bird: {slug.bird_name}</p>
      {/* we are using the same form as the add a new  bird form because we are updating the same data */}
      <form action={handleUpdate}>
        <label htmlFor="bird_name">Bird name: </label>
        <input
          type="text"
          name="bird_name"
          id="bird_name"
          className="text-emerald-600"
          defaultValue={wrangledBird.bird_name}
        />

        <label htmlFor="bird_size">Bird size: </label>
        <input
          type="text"
          name="bird_size"
          id="bird_size"
          className="text-emerald-600"
          defaultValue={wrangledBird.bird_size}
        />

        <label htmlFor="fluffiness">Fluffiness: </label>
        <input
          type="number"
          name="fluffiness"
          id="fluffiness"
          min={1}
          max={10}
          className="text-emerald-600"
          defaultValue={wrangledBird.fluffiness}
        />

        <label htmlFor="bird_colour">Colour: </label>
        <input
          type="text"
          name="bird_colour"
          id="bird_colour"
          className="text-emerald-600"
          defaultValue={wrangledBird.bird_colour}
        />

        <label htmlFor="personality">Personality: </label>
        <input
          type="text"
          name="personality"
          id="personality"
          className="text-emerald-600"
          defaultValue={wrangledBird.personality}
        />

        <button
          type="submit"
          className="border-amber-600 border-4 m-4 hover:bg-sky-700"
        >
          Edit your bird
        </button>
      </form>
    </>
  );
}
