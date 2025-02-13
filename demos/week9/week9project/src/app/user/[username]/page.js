// To set up a profile page that reders the data that we can get from Cler:
auth(); //from this thing we can access the userID!
currentUser; // From this thing we can access userrname, email adress etc etc
//Some of the data is coming through from Clerk that was capture during signup.

export default async function UserPage() {
  const user = await currentUser();
  // console.log the heck out of user!
  return (
    <>
      {/* <h1>User Page!</h1>
        optional chaining cover the situation that our user might not provide all the data we are expecting to be given */}
      {/* <p>welcome `{user?.firstname}</p> */}
      {/* If a value is NULL or undefined and optional chaining ISNT used then you'll have a crash on your hands! */}
    </>
  );
}
// WHAT IF A USERNAME THATS BEEN ENTERED ISNT *UNIQUEEEEEEEEEEE*?
