import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewBirdPage() {
  //function to handle submit --> onSubmit listener (event)
  //In a server component, we cannot use events --> we are going to use a server action!
  // a server action is an async function that runs in the server specifically
  async function handleSubmit(formValues) {
    "use server";
    //I want to store the formValues --> state
    //I cannot use state and useState in the server --> I will "get" the formValues from the inputs directly
    const birdName = formValues.get("bird_name");
    const birdSize = formValues.get("bird_size");
    const fluffiness = formValues.get("fluffiness");
    const birdColour = formValues.get("bird_colour");
    const personality = formValues.get("personality");

    //we could also store the values in an object:
    // const formData = {
    //   bird_name: formValues.get("bird_name"),
    //   bird_size: formValues.get("bird_size"),
    //   fluffiness: formValues.get("fluffiness"),
    //   bird_colour: formValues.get("bird_colour"),
    //   personality: formValues.get("personality"),
    // };

    //I can send the formValues data to the data with a SQL query right here in the server!
    db.query(
      `INSERT INTO birds (bird_name, bird_size, fluffiness, bird_colour, personality) VALUES ($1, $2, $3, $4, $5)`,
      [birdName, birdSize, fluffiness, birdColour, personality]
    );

    //two Next.js tools to improve the UX
    //revalidatePath checks if there is new data to render on a particular location
    revalidatePath("/birds");
    //we can also redirect the user automatically after they submit the form, so they can see the new bird added on the page
    redirect("/birds");
  }

  return (
    <>
      <h1>Add a new bird to the website</h1>
      {/* we are going to add a form in here, same as usual */}
      {/* remember to add some validation to make sure your data is as precise as possible! */}
      <form action={handleSubmit}>
        <label htmlFor="bird_name">Bird name: </label>
        {/* the name attribute gives an identifier to the input, so I can target each input specifically */}
        {/* it is recommended that the name attribute value matches the table column where the data will be stored */}
        <input
          type="text"
          name="bird_name"
          id="bird_name"
          className="text-emerald-600"
        />

        <label htmlFor="bird_size">Bird size: </label>
        <input
          type="text"
          name="bird_size"
          id="bird_size"
          className="text-emerald-600"
        />

        <label htmlFor="fluffiness">Fluffiness: </label>
        <input
          type="number"
          name="fluffiness"
          id="fluffiness"
          min={1}
          max={10}
          className="text-emerald-600"
        />

        <label htmlFor="bird_colour">Colour: </label>
        <input
          type="text"
          name="bird_colour"
          id="bird_colour"
          className="text-emerald-600"
        />

        <label htmlFor="personality">Personality: </label>
        <input
          type="text"
          name="personality"
          id="personality"
          className="text-emerald-600"
        />

        <button
          type="submit"
          className="border-amber-600 border-4 m-4 hover:bg-sky-700"
        >
          Submit your bird
        </button>
      </form>
    </>
  );
}
