//Since this component is in a nested route inside /:id, I can also have access to the dynamic params value in here
import { useParams } from "react-router-dom";
export default function UserComments() {
  let { id } = useParams();
  return (
    <>
      <h2>User Comments</h2>
      <h3>These are the comments from user number {id}</h3>
    </>
  );
}
