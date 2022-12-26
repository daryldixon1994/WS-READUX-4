import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseCounter, increaseCounter } from "../redux/actions";
function Counter() {
    const counter = useSelector((store) => store.counterReducer.counter);
    const dispatch = useDispatch();
    const handleIncrease = () => {
        dispatch(increaseCounter());
    };
    const handleDecrease = () => {
        dispatch(decreaseCounter());
    };
    return (
        <div
            style={{
                width: "80%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContents: "center",
                alignItems: "center",
            }}
        >
            <h1 style={{ fontSize: "3.5rem" }}>{counter}</h1>
            <div>
                <button
                    style={{
                        all: "unset",
                        backgroundColor: "black",
                        color: "white",
                        padding: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => handleIncrease()}
                >
                    Increase
                </button>
                <button
                    style={{
                        all: "unset",
                        backgroundColor: "white",
                        color: "black",
                        padding: "5px",
                        border: "1px black solid",
                        boxSizing: "border-box",
                        cursor: "pointer",
                    }}
                    onClick={() => handleDecrease()}
                >
                    Decrease
                </button>
            </div>
        </div>
    );
}

export default Counter;
