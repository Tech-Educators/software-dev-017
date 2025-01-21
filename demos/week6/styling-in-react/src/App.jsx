import Header from "./components/Header/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
// This is how we import a CSS file
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Section title="Title 1" content="Content 1" />
      <Section title="Title 2" content="Content 2" />
      <Footer />
    </>
  );
}
