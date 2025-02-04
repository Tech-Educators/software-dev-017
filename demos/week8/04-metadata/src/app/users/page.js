//I am going to use an API to render some data in the users page: https://dummyjson.com/users

//The same as params, our pages have access to another url object --> searchParams (query strings)
//The same as params, searchParams is asynchronous (promise)
import Link from "next/link";

//I can ass custom metadata for each page
export const metadata = {
  title: "Users App - Users",
  description: "A convenient list of all available users in the app.",
};

export default async function UsersPage({ searchParams }) {
  //fetch data
  const usersData = await fetch(`https://dummyjson.com/users`);
  console.log(usersData);

  //parse data into JSON
  const parsedData = await usersData.json();
  console.log(parsedData);

  //wrangle data to have an array of objects
  const wrangledData = parsedData.users;
  console.log(wrangledData);

  //========================================================
  //here we are going to await our searchParams
  const query = await searchParams;
  console.log(query);
  //I want to sort our users  --> we will use the terms ASC and DESC
  // if (query.sort === "asc") {
  //   wrangledData.sort();
  // } else if (query.sort === "desc") {
  //   wrangledData.sort().reverse();
  // }

  //I want to sort our users alphabetically --> we will use the terms ASC and DESC (credit to Craig!)
  if (query.sort === "desc") {
    wrangledData.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
  } else if (query.sort === "asc") {
    wrangledData.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  }
  //Logic has many faces --> you can build a feature using different tools that give similar results
  //========================================================
  return (
    <>
      <h1>Users Page</h1>
      {/* I am going to set up my query strings specifically here: */}
      <Link href={`/users?sort=asc`}>A-Z</Link>
      <Link href={`/users?sort=desc`}>Z-A</Link>

      {/* render our array of objects on the page */}
      {wrangledData.map((user) => (
        <div key={user.id}>
          <h2>{user.firstName}</h2>
        </div>
      ))}
    </>
  );
}
