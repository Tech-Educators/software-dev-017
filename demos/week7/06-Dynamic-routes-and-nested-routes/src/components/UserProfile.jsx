//the purpose of this component is to show each user's personal profile
//we can have a dynamic route which changes the value depending on the user
// /users/:id
// http://localhost:5173/users/876

//We need to have access to the dynamic params value, so we can change their value depending on the user --> useParams()
import { useParams, Outlet } from "react-router-dom";

export default function UserProfile() {
  //we are destructuring the id variable from the useParams hook --> we are extracting one element from the hook
  //the id variable was created by us, so the useParams hook can store the value of params in there
  let { id } = useParams();

  return (
    <>
      <h1>Hello, user number {id}!</h1>

      {/* <UserComments /> /users/:id/comments */}
      {/* in order to show the UserComments component dynamically here, we need to leave a placeholder to represent that */}
      <Outlet />
      {/* Outlet represents the UserComments component, so when we go to /users/:id/comments, we can see the comments for each user */}
    </>
  );
}
