import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  time.substring(0, 6);
  console.log(time);
  let [Time, setTime] = useState(time.substring(0, 8));

  function currentTime() {
    time = new Date().toLocaleTimeString();

    setTime(time.substring(0, 8));
  }

  setInterval(currentTime, 1000);

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
