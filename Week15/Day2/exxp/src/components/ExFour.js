import React from "react";
import './ExFour.css';

// const style_header = {
//   color: "white",
//   backgroundColor: "DodgerBlue",
//   padding: "10px",
//   fontFamily: "Arial"
// };

export function ExFour() {
    return (
        <>
        {/* <h1 style={{color: 'red', background: 'lightblue'}}>This is a header</h1> */}
        {/* <h1 style={style_header}>This is a header</h1> */}
        <h1>This is a header</h1>
        <p className="para">This is a paragraph</p>
        <a href="#">This is a link</a>
        <form>
            <label>Enter your name:</label>
            <input type='text'></input>
            <input type='submit'></input>
        </form>
            <h4>Here is an image</h4>
            <img src="https://picsum.photos/200/300"></img>
        </>
    )
}