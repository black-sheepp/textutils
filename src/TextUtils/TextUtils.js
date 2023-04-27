import React, { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Alert from "./Alert";

export default function TextUtils() {
     const [alert, setAlert] = useState(null);
     const showAlert = (alertType, alertMsg) => {
          setAlert({
               msg: alertMsg,
               type: alertType,
          });

          setTimeout(()=>{
            
          })
     };
     const [darkMode, setDarkMode] = useState("light");
     const handleDarkMode = () => {
          if (darkMode === "light") {
               setDarkMode("dark");
               document.body.style.backgroundColor = "black";
               document.body.style.color = "white";
               showAlert("success","Dark mode has been enabled");
          } else {
               setDarkMode("light");
               document.body.style.backgroundColor = "white";
               document.body.style.color = "black";
               showAlert("success","Light mode has been enabled");
          }
     };

     return (
          <Router>
               <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
               <Alert alert={alert} />
               <Routes>
                    <Route path="/" element={<TextForm heading="Enter the text here:" showAlert={showAlert}/>} />
                    <Route path="/about" element={<About />} />
               </Routes>
          </Router>
     );
}
