import React, { useState, useEffect, useRef } from "react";

function Example() {
    const [value, setValue] = useState(5);
    const valueRef = useRef();
    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    useEffect(() => {
        return function cleanup() {
            valueRef.current = 0;
            console.log(valueRef.current);
        };
    }, []);

    return (
        <div>
            Example
            <h2> {value} </h2>
        </div>
    );
}

export default Example;
