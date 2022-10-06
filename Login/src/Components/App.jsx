import React, { useState } from "react";


function App() {

    const [massage, setMassage] = useState("Hello");
    const [Color, setColor] = useState({ backgroundColor: "white" });
    const [Name, setName] = useState("");
    const [Heading, setHeading] = useState("");
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
    function handleMassage(event) {

        setMassage("Submitted");
        handleHeading();
        event.preventDefault();
    }
    function handleHeading() {
        setHeading(Name);
    }
    function handleNameChange(event) {

        setName(event.target.value);

    }
    return (
        <div className="container">
            <h1>{massage} {Heading}</h1>
            <form onSubmit={handleMassage}>
                <input type="text" onChange={handleNameChange} value={Name} placeholder="What's your name?" />
                <button
                    onMouseOver={over}
                    onMouseOut={out}
                    style={Color}
                    type="submit"

                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
