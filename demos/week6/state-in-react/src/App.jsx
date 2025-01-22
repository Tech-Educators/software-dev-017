//In vanilla JS, we had state in the shape of a global variable
// let counter = 0;
// let x = 2;

//In react, we have an extra issue with global variables --> reusable components
//If we declare a global variable in a reusable component, we don't have a way of managing the value of state across different instances of that component
//We are going to use a hook to manage the value of state, even if the value is instantiated across different component
//the hook we are going to use is useState() --> manage state across all elements of our app
//the keyword for hooks is use
//hooks are React default methods

import Counter from "./Counter";
export default function App() {
  return (
    <>
      <h1>App component</h1>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}
