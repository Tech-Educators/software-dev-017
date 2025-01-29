import Header from "./components/Header";
import Footer from "./components/Footer";
//You can nest your DOM elements into BrowserRouter here, or nest the whole App component in the main.jsx file
// import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <h1>App</h1>
      <Header />
      {/* nested inside the Routes component, I will declare my Route components */}
      <Routes>
        {/* in the Route component, I declare which component I want to render in which location (address) */}
        <Route element={<About />} path={"/about"} />
        <Route element={<Contact />} path={"/contact"} />
      </Routes>
      <Footer />
    </>
  );
}
