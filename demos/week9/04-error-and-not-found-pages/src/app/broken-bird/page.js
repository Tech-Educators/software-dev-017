//This page is going to artificially throw an error for testing purposes

export default function BrokenBird() {
  throw new Error(
    "Sorry, this bird is in the nursery at the moment. Try to visit another bird"
  );
  return (
    <>
      <h2>Did it get fixed magically?</h2>
    </>
  );
}
