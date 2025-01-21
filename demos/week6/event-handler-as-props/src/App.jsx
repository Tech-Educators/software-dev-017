import Button from "./Button";
import Section from "./Section";
function App() {
  const title1 = "Section 1";
  // const title2 = "Section 2";

  function handleSubmit1() {
    console.log("First");
  }
  function handleSubmit2() {
    console.log("Second");
  }
  // function handleSubmit3() {
  //   console.log("Third");
  // }
  return (
    <>
      <Section title={title1} />
      <Section title="Section 2" />

      <Button eventHandler={handleSubmit1} />
      <Button eventHandler={handleSubmit2} />
      <Button
        eventHandler={() => {
          console.log("Third");
        }}
      />
    </>
  );
}

export default App;
