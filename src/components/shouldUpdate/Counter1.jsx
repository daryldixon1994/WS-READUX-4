import React from "react";

export default React.memo(function Counter1({ counter1, setCounter1 }) {
    console.log("Counter 1 update ");
    return (
        <div>
            <h1>Counter 1</h1>
            <h4>{counter1}</h4>
            <button onClick={() => setCounter1(counter1 + 1)}>Increase</button>
        </div>
    );
});
