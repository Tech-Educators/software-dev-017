import React, { useState, useEffect } from "react";

export default function App() {
  // Lets define our state variables!
  // They are variables whose values are stored in state!

  const [items, setItems] = useState([]);
  // The variable is called items, the mutation fucntion to update its value is setItems and the initial value of the items variable is an empty array.
  //This is for storing my fetched data

  const [message, setMessage] = useState("Fetching items...");
  // this is for storing a message that i'll display to my user

  const [refreshCount, setRefreshCount] = useState(0);
  //this is for storing the number of times ive re-fetched my data

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
          //fetches a list of todos from the API
        );
        const data = await response.json();
        // JSON wrangle!

        console.log("EFFECT!!!: Data fetched successfully!");
        //console log then data is fetched

        setItems(data);
        setMessage(
          `SIDE EFFECT!!!: Fetched ${data.length} items successfully!`
        );
      } catch (error) {
        console.error("SIDE EFFECT!!!: Failed to fetch items!");
        setMessage("SIDE EFFECT!!!: Failed to fetch items!");
        // If our fetch doesnt work then we get a message in our console (a side effect) and we set the value of the message variable in state to the error message using the setMessage mutation function
      }
    }
    fetchData();
    // we need a dpendency array (its written between square brackets at the end of our useEffect and it can be empty!)
    //dependency array tells useEffect when to run and in what way to run
    // an empty dependency array will have useEffect run its function only one, on reder of the page/component.
  }, [refreshCount]);

  console.log("RENDERING HAPPENED!!! Component/page rendered!");
  console.log("This is the fetched data:", items);

  return (
    <div>
      <h1>useEffect Demo!!!</h1>
      <p>{message}</p>
      <button onClick={() => setRefreshCount(refreshCount + 1)}>
        Refetch Data ({refreshCount})
      </button>
      <button onClick={() => setMessage("")}>Clear Message</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
          //every item that was fetched is going to be rendered as a list item element.
        ))}
      </ul>
    </div>
  );
}

// useEffect is basically saying "Every time the value of this specific variable change, run this function".
