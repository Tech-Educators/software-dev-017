//I am going to use an API to render some data in the users page: https://dummyjson.com/users

export default async function UsersPage() {
  //fetch data
  const usersData = await fetch(`https://dummyjson.com/users`);
  console.log(usersData);

  //parse data into JSON
  const parsedData = await usersData.json();
  console.log(parsedData);

  //wrangle data to have an array of objects
  const wrangledData = parsedData.users;
  console.log(wrangledData);

  return (
    <>
      <h1>Users Page</h1>
      {/* render our array of objects on the page */}
      {wrangledData.map((user) => (
        <div key={user.id}>
          <h2>{user.firstName}</h2>
        </div>
      ))}
    </>
  );
}
