import React, { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Alert from "./Alert";

export default function TextUtils() {
    const [darkMode, setDarkMode] = useState('light')
    const handleDarkMode = () =>{
        if(darkMode === 'light'){
            setDarkMode("dark")
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
        }else{
            setDarkMode('light')
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        }
    }
     return (
          <Router>
               <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
               <Alert/>
               <Routes>
                <Route path="/" element={<TextForm heading="Enter the text here:"/>}/>
                <Route path="/about" element={<About />}/>
               </Routes>
          </Router>
     );
}
