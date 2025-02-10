//we have access to the clerk userId
// import { auth } from "@clerk/nextjs/server";
export default async function UserProfilePage() {
  //we have destructered (extracted) the userId value from auth
  // const { userId } = await auth();
  return (
    <>
      <h1>User profile page</h1>
      <h2>Super secret info, do not steal!</h2>
      {/* This is the userId value that clerk assigns to a user when they sign up */}
      {/* we can store this value in a database to relate it to posts, comments... */}
      {/* <p>{userId}</p> */}
    </>
  );
}
