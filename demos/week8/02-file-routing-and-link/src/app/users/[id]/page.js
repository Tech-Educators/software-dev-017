//we are going to use the params object to have access to the params value
//the params object is a promise! --> we need to make an asynchronous request
//Since we are in a server component, we can have asynchronous elements directly here!
//I am going to destructure params in the component function
export default async function IdPage({ params }) {
  const idParams = await params;
  console.log(idParams);
  return (
    <>
      <h1>Id Page</h1>

      <p>{idParams.id}</p>
    </>
  );
}
