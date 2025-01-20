//We have the imports at the top of the file
import Header from "./Header";
import Section from "./Section";
import Button from "./Button";
//We need a component function:
//The component function is going to have tasks
//The component function is going to render DOM elements

export default function App() {
  //here we are going to write the function tasks using JS (any logic for this component)

  //in the return of the component function, we write our HTML
  return (
    <div>
      <Header />
      {/* I can give each Section component specific props to render different data */}
      <Section
        subheading="Company updates"
        sectionTitle="NEWS"
        buttonMessage="Click to read more"
      />
      <Section
        subheading="Buy tickets"
        sectionTitle="TICKETS"
        buttonMessage="Click to read more"
      />
      <Section
        subheading="Meet the team"
        sectionTitle="STAFF"
        buttonMessage="Click to read more"
      />
      <Section
        subheading="Send us an email"
        sectionTitle="CONTACT"
        buttonMessage="Click to read more"
      />
      <Button buttonMessage="Click to read more" />
    </div>
  );
}
