import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import BooksList from "./components/BooksList";
import { data } from "./data";
import Counter1 from "./components/shouldUpdate/Counter1";
import Counter2 from "./components/shouldUpdate/Counter2";
import Example from "./components/unmounting/Example";
function App() {
    // const [counter1, setCounter1] = useState(0);
    // const [counter2, setCounter2] = useState(0);

    const [show, setShow] = useState(false);
    return (
        <div className="App">
            <NavBar />
            <BooksList />

            {/* using React.memo to avoid automating call for a component */}
            {/* <Counter1 counter1={counter1} setCounter1={setCounter1} />
            <Counter2 counter2={counter2} setCounter2={setCounter2} /> */}

            {/* ComponentDidUnmount for functional component */}
            {/* <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "SHOW"}
            </button>
            {show ? <Example /> : null} */}
        </div>
    );
}

export default App;
