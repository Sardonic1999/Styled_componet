import React, { useState, useEffect } from "react";

function Hook({ count }) {
  const [counter, setCounter] = useState(count);
  const [status, setStatus] = useState("Student");

  useEffect(() => {
    setCounter(count);
  }, [count, status]);

  return (
    <>
      <h1>React Hooks State {counter}</h1>
      <input
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      />
      <div>
        ReactHooks
        <button
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            marginLeft: "20px",
            marginRight: "5px",
            cursor: "pointer",
          }}
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
        <button
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Hook;
