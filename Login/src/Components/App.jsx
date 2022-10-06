import React, { useState } from "react";


function App() {
    const [Color, setColor] = useState({ backgroundColor: "white" });
    function over() {
        setColor(previousState => {
            return { ...previousState, backgroundColor: "black" }
          });
    }
    function out() {
        setColor(previousState => {
            return { ...previousState, backgroundColor: "white" }
          });
    }
    return (
        <div className="container">
            <h1>Hello</h1>
            <input type="text" placeholder="What's your name?" />
            <button onMouseOver={over} onMouseOut={out} style={Color}>Submit</button>
        </div>
    );
}

export default App;