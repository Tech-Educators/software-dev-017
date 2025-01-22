//   let counter = 0;
//   let array = [];
//Here we are destructuring one SPECIFIC element from the whole react folder
import { useState } from "react";

export default function Counter() {
  //the useState hook has three elements --> initial value, state variable, mutation function (set)
  //   const [stateVariable, mutationFunction] = useState(initialValue);
  const [counter, setCounter] = useState(0);
  //! I cannot change or update the value of state directly. I need to use the mutation function
  console.log(counter);
  return (
    <>
      <h3>Counter</h3>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click!
      </button>
    </>
  );
}
