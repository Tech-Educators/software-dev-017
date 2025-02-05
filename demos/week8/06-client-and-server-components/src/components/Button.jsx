//This component is server by default, but you can change it to be client
"use client";

import { useState } from "react";

export default function Button() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p>{counter}</p>
    </>
  );
}
