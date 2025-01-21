import Button from "./components/Button";
import ButtonInline from "./components/ButtonInline";
import ReusableButton from "./components/ReusableButton";

export default function App() {
  //If we want to reuse a button component to send different messages to the console, we need to prepare different event handlers and pass them down as props to the corresponding button component

  function handleFirstClick() {
    console.log("You clicked on the first button");
  }
  function handleSecondClick() {
    console.log("You clicked on the second button");
  }
  function handleThirdClick() {
    console.log("You clicked on the third button");
  }
  return (
    <>
      <Button />
      <ButtonInline />
      <ReusableButton eventHandler={handleFirstClick} />
      <ReusableButton eventHandler={handleSecondClick} />
      <ReusableButton eventHandler={handleThirdClick} />
    </>
  );
}
