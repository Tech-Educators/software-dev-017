//I want to add a delete feature in this nested route that uses the bird name params as the unique identifier, in this particular case

//Tools:
//- params
//- server action for the user to trigger the delete
//- form to use the submit button

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeleteBirdPage({ params }) {
  //I can use params in here because this route is nested in our dynamic route "bird_name"
  const slug = await params;

  //a server action is an async function that runs in the server specifically
  async function handleDelete() {
    "use server";

    //query the db
    await db.query(`DELETE FROM birds WHERE bird_name = $1`, [slug.bird_name]);

    revalidatePath("/birds");
    redirect("/birds");
  }

  return (
    <>
      <h1>Delete a bird</h1>
      <form action={handleDelete}>
        <button
          type="submit"
          className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
        >
          Are you sure you want to delete this precious bird?
        </button>
      </form>
    </>
  );
}
