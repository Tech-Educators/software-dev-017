import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // the function that our useEffect is running creates a timer called myInterval!
    const myInterval = setInterval(() => {
      //our timer does 2 things every second!
      console.log("Woooo! Timers yo!");
      //first, it spits out a console.log!
      setCount((currentCount) => {
        return currentCount + 1;
        // the other thing it does is to use the setCount mutation function to set the value of the variable called count thats saved in state.
        //It sets the value of count to be equal to the value of the varible currentCount + 1. Since the initial value of currentCount is 0 its begins counting up from 0, adding 1 every second.
      });
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);
  return (
    <div>
      <h1>Timers in React</h1>
      <p>{count}</p>
    </div>
  );
}
