import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    // The difference between passing an updater and passing the next state directly
    // setCount(count+1); //This example does not pass the updater function, so the “add5” button doesn’t work
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Simple Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => countHandler()}>Add1</button>
      <button
        onClick={() => {
          countHandler();
          countHandler();
          countHandler();
          countHandler();
          countHandler();
        }}
      >
        Add5
      </button>
    </div>
  );
};

export default Counter;
