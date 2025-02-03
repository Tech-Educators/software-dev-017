//I am going to use params to access the value of my dynamic params

export default async function IdPage({ params }) {
  const userId = await params;
  console.log(userId); // {id: number}
  const usernameData = await fetch(`https://dummyjson.com/users/${userId.id}`);
  const parsedData = await usernameData.json();

  return (
    <>
      <h1>Id page: {userId.id}</h1>
      {/* we are going to render the data from this user in here */}
      {/* Since the fetch is dynamically fetching data depending on the params value, the values in here will also be updated to match the user located at each specific params */}
      <h2>{parsedData.firstName}</h2>
      <h2>{parsedData.lastName}</h2>
      <p>{parsedData.email}</p>
    </>
  );
}
