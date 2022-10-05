import React from "react";
import Form from "./Form";

let isLoggedIn = false;
let userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? (
        <h1>Hello</h1>
      ) : (
        <Form userIsRegistered={userIsRegistered} />
      )}
    </div>
  );
}

export default App;
