import React, { useState } from "react";


export default function TextForm(props) {
     const [text, setText] = useState("");

     const handleOnchange = (event) => {
          setText(event.target.value);
     };
     const handleUppercase = () => {
          setText(text.toUpperCase());
          props.showAlert("success","Text convert to Uppercase!")
     };
     const handleLowercase = () => {
          setText(text.toLowerCase());
          props.showAlert("success","Text convert to Lowercase!")
     };
     const handleClearText = () => {
          setText("");
          props.showAlert("warning","Text box cleared! ")
     };
     return (
          <div className="container-sm my-3">
               <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                         <h4>{props.heading}</h4>
                    </label>
                    <textarea
                         className="form-control"
                         id="exampleFormControlTextarea1"
                         rows={8}
                         value={text}
                         onChange={handleOnchange}
                    />
               </div>
               <button onClick={handleUppercase} type="button" className="btn btn-dark mx-2 mb-2">
                    Convert to Uppercase
               </button>
               <button onClick={handleLowercase} type="button" className="btn btn-dark mx-2 mb-2">
                    Convert to Lowercase
               </button>
               <button onClick={handleClearText} type="button" className="btn btn-dark mx-2 mb-2">
                    Clear Text
               </button>
               <div className="display-info mt-4">
                    <h3>Text Summary</h3>
                    <span>
                         Characters: <h4>{text.length}</h4>
                    </span>
                    <span>
                         Words: <h4>{text.split(/\s+/).filter((ele)=>ele.length!==0).length}</h4>
                    </span>
                    <span>
                         Reading Time: <h4>{(0.008 * text.split(" ").length - 0.008).toFixed(2)} <span>mins</span></h4> 
                    </span>
                    <span>
                         <h4>Preview: </h4> 
                         {text?<h6>{text}</h6>:"Enter inside the text box to preview here."}
                         
                    </span>
               </div>
          </div>
     );
}
