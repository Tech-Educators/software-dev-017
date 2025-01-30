import Header from "./components/Header";
import Footer from "./components/Footer";
//You can nest your DOM elements into BrowserRouter here, or nest the whole App component in the main.jsx file
// import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import UserProfile from "./components/UserProfile";
import UserComments from "./components/UserComments";

export default function App() {
  return (
    <>
      <h1>App</h1>
      <Header />

      <Routes>
        <Route element={<About />} path={"/about"} />
        <Route element={<Contact />} path={"/contact"} />
        {/* Add a new route for the UserProfile component --> /users/:id */}
        <Route element={<UserProfile />} path={"/users/:id"}>
          {/* in here, i am going to nest the /comments route */}
          <Route element={<UserComments />} path={"/users/:id/comments"} />
        </Route>
        {/* Add a new route to show particular comments for each user profile --> /users/:id/comments */}
      </Routes>
      <Footer />
    </>
  );
}
