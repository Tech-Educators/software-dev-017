export default async function UsersPage() {
  const result = await fetch("http://localhost:3000/api/users");
  const users = await result.json();
  return (
    <>
      <h1>Users Page</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.firstName}</h1>
        </div>
      ))}
    </>
  );
}
