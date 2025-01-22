//We want to render the content of the section, only when the user clicks on the title of the section

//We need three tools:
// - state --> what value are we saving in state? State will track if the content is rendered (truthy) or not rendered (falsey) on the page
// - event --> when the user clicks on the title
// - conditional --> we ONLY render if the click event triggers

import { useState } from "react";

export default function Section(props) {
  //First, I declare my state variable --> useState()
  const [showContent, setShowContent] = useState(false);

  //Second, I will prepare my event --> onClick
  //I am going to write my event handler
  function handleClick() {
    //when the user clicks, I want the state value to change.
    //if the state value is false, I want the state value to be true
    //if the the state value is true, I want the state value to be false
    setShowContent(!showContent);
  }
  return (
    <>
      <h2 onClick={handleClick}>{props.title}</h2>
      {/* We want to render this p tag conditionally --> based on the value of state */}
      {/* I cannot use a classic if statement in here, so I am going to use a ternary operator */}
      {showContent ? <p>{props.content}</p> : null}
    </>
  );
}

// if (showContent === true){
//   render(<p>{props.content})
// } else if (showContent === false) {
//   render(null)
// }
