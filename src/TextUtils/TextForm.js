import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const handleUppercase = () => {   
        setText(text.toUpperCase())
    }
    const handleLowercase = () => {
        setText(text.toLowerCase())
    }
    const handleClearText = () => {
        setText("")
    }
     return (
          <div className="container-sm my-3">
               <div className="mb-3">
                    <label
                         htmlFor="exampleFormControlTextarea1"
                         className="form-label"
                    >
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
               <button onClick={handleUppercase} type="button" className="btn btn-dark mx-2">Convert to Uppercase</button>
               <button onClick={handleLowercase} type="button" className="btn btn-dark mx-2">Convert to Lowercase</button>
               <button onClick={handleClearText} type="button" className="btn btn-dark mx-2">Clear Text</button>

               <div className="display-info mt-4">
               <span>Characters: <h4>{text.length}</h4></span>
               <span>Words: <h4>{text.split(' ').length-1}</h4></span>
               <span> <h4>Preview: </h4> <h6>{text}</h6></span>
               </div>
          </div>
     );
}
