import { useRef, useState } from "react";
import FocusInput from "./FocusInput";
import ScrollImage from "./ScrollImage";

const ClickCounter = () => {
  const [startTime, setstartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(`You Clicked ${ref.current} times`);
  };
  const handleStart = () => {
    setstartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  let secondPassed = 0;
  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }
  return (
    <div>
      <h1>ClickCounter Using useRef</h1>
      <button onClick={() => handleClick()}>Click me</button>
      <div>
        <h1>Time Passed:{secondPassed.toFixed(3)}</h1>
        <button onClick={() => handleStart()}>start</button>
        <button onClick={() => handleStop()}>stop</button>
      </div>
      <hr />
      <FocusInput />
      <hr />
      <ScrollImage />
    </div>
  );
};

export default ClickCounter;
