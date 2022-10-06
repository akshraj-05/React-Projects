import React, { useState } from "react";


function App() {
    let [count, setCount] = useState(0);

    function increse(){
        setCount(count+1);
    }
    function decrese(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }

    return (
        <div className="container" >
            <h1 >{count}</h1>
            <button onClick={increse}>+</button>
            <button onClick={reset}>0</button>
            <button onClick={decrese}>-</button>
        </div>
    );
}
export default App;