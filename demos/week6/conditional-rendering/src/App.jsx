import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { data } from "./lib/data";

export default function App() {
  //I can only write vanilla JS here

  return (
    <>
      <Header />
      {/* The key prop is needed, so React can track each instance of our Section component */}
      {/* the key prop is unique */}
      {/* Don't use the index as the key! Use a bespoke id property */}
      {data.map(function (dataItem) {
        return (
          <Section
            key={dataItem.id}
            title={dataItem.title}
            content={dataItem.content}
          />
        );
      })}

      {/* I don't need to nest the Section component repeatedly myself. I can use a loop to repeat the task for me */}
      {/* <Section title="Section 1" content="Content 1" />
      <Section title="Section 2" content="Content 2" />
      <Section title="Section 3" content="Content 3" />
      <Section title="Section 4" content="Content 4" /> */}
      <Footer />
    </>
  );
}

//In vanilla JS, we simplified repeated tasks, like rendering multiple DOM elements on the screen, with two tools:
//- We stored the data in an array --> [item, item, item]
//- We used a loop to repeat the task --> forEach / for loop (for of)
