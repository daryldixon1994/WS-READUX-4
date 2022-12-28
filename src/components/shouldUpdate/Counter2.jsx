import React from "react";

export default React.memo(function Counter2({ counter2, setCounter2 }) {
    console.log("Counter 2 update ");
    return (
        <div>
            <h1>Counter 2</h1>
            <h4>{counter2}</h4>
            <button onClick={() => setCounter2(counter2 + 1)}>Decrease</button>
        </div>
    );
});
