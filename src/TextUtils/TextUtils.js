import React from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function TextUtils() {
     return (
          <Router>
               <Navbar />
               <Routes>
                <Route path="/" element={<TextForm heading="Enter the text here:"/>}/>
                <Route path="/about" element={<About />}/>
               
               </Routes>
          </Router>
     );
}
