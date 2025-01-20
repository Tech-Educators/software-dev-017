//We have the imports at the top of the file
import Header from "./Header";
import Section from "./Section";
//We need a component function:
//The component function is going to have tasks
//The component function is going to render DOM elements

export default function App() {
  //here we are going to write the function tasks using JS (any logic for this component)

  //in the return of the component function, we write our HTML
  return (
    <div>
      <Header />
      <Section />
      <Section />
      <Section />
    </div>
  );
}
