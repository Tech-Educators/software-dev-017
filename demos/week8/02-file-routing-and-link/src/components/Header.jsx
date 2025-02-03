//We have an optimised anchor tag called Link
import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>This is the main title of my app</h1>
      <h2>Subheading</h2>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/courses/software-development"}>
          Software Development Course
        </Link>
      </nav>
    </>
  );
}
