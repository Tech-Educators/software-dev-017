import { Link } from "react-router-dom";

//we are going to use the Link component to add a convenient navigation element for the user
export default function Header() {
  return (
    <>
      <h2>Header</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/nowhere"}>Suprise!</Link>
    </>
  );
}
