//Start of React Modules
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";

//End of React Modules


//Start of Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Categories";
import Contact from "./pages/Contacts";
//End of Pages


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/categories" element={<Shop />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
