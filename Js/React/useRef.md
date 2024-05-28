# useRef Hook
useRef is a React Hook that lets you reference a value that’s not needed for rendering.
```
const ref = useRef(initialValue)
```
### Parameters
- initialValue: The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.
### Returns
- useRef returns an object with a single property:
current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
### Caveats
- You can mutate the ref.current property. Unlike state, it is mutable. However, if it holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object.
- When you change the ref.current property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.

### Stop watch

```
import { useRef, useState } from "react";

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
    </div>
  );
};

export default ClickCounter;

```
## Manipulating the DOM with a ref
It’s particularly common to use a ref to manipulate the DOM. React has built-in support for this.First, declare a ref object with an initial value of null .
