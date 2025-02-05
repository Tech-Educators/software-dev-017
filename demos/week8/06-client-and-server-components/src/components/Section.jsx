//this is a server component by default
import Button from "./Button";

export default function Section() {
  return (
    <>
      <h1>Title</h1>
      <h2>Subheading</h2>
      <img src="#" alt="placeholder image" />
      {/* I need my button to perform a task (event) in the client. How would I do that? The best solution is to isolate the button in its own component*/}
      <Button />
    </>
  );
}
