import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    //console.log("Uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelLoClick = () => {
    //console.log("Uppercase was click" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
 
  const handelclearClick= () => {
    //console.log("Uppercase was click" + text);
    let newText = ' ';
    setText(newText);
  };
 
  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            id="Textarea"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handelUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary my-3 m-3" onClick={handelLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary Mx-2" onClick={handelclearClick}>
       Clear text
        </button>
      </div>

      <div className="container my-3">
        <h3>Your Text Summery</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <button type="button" className="btn btn-success">Preview Text</button>
        <p>{text}</p>
      </div>
    </>
  );
}
