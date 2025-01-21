//We need to add an event to the button to make it interactive
//In this case, a clikc event is more suitable

// addEventListener("click", handler) --> onClick={handler}
//the keyword on plus an action is the way we have to write our event listeners in React
export default function Button() {
  //event handler
  function handleClick() {
    console.log("You have clicked the button");
  }

  return (
    <>
      {/* event listener */}
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
