import React, { useState } from "react";


function App() {

    const [massage, setMassage] = useState("Hello");
    const [Color, setColor] = useState({ backgroundColor: "white" });
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });
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
        event.preventDefault();
    }



    function handalingContact(event) {
        const { name, value } = event.target;
        console.log(name, value);

        setContact((prevState) => {
            if (name === "fName") {
                return { ...prevState, fName: value };
            } else if (name === "lName") {
                return { ...prevState, lName: value };
            } else {
                return { ...prevState, email: value };
            }
        });
    }
    return (
        <div className="container">
            <h1>{massage}  {contact.fName} {contact.lName}</h1>
            <p>{contact.email}</p>
            <form onSubmit={handleMassage}>
                <input
                    onChange={handalingContact}
                    name="fName"
                    value={contact.fName}
                    placeholder="First Name"
                />
                <input
                    onChange={handalingContact}
                    name="lName"
                    value={contact.lName}
                    placeholder="Last Name"
                />
                <input
                    onChange={handalingContact}
                    name="email"
                    value={contact.email}
                    placeholder="Email"
                />
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
