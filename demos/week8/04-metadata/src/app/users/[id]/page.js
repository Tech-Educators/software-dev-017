//I am going to use params to access the value of my dynamic params

//In dynamic pages, we can use the method generateMetadata to create dynamic metadata depending on the value of our params
//This function creates the metadata object
export async function generateMetadata({ params }) {
  //I am using params to make sure the metadata matches the user we are displaying
  const userParams = await params;
  //We are going to customise the metadata object to show data relevant to the user we are displaying
  const result = await fetch(`https://dummyjson.com/users/${userParams.id}`);
  const user = await result.json();
  //I am returning the metadata object
  //I am customising the values using the data from params and the API
  return {
    title: `Users App - This is user: ${user.firstName}`,
    description: `${user.firstName} ${user.lastName} is such an interesting user. Definitely, do not call their number ${user.phone}`,
  };
}

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
