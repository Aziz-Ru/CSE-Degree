# useCallback() Hook
useCallback is a React Hook that lets you cache a function definition between re-renders.this hook cach a function that once render.
`const cachedFn = useCallback(fn, [dependencies])`
## Parameters
- **fn**:The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render.React will give you the same function again if the dependencies have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later.
- **dependencies**:The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison algorithm.

## Caveats 
- useCallback is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.

## How is useCallback related to useMemo? 
You will often see useMemo alongside useCallback. They are both useful when you’re trying to optimize a child component. They let you memoize (or, in other words, cache) something you’re passing down:
The difference is in what they’re letting you cache:
- useMemo caches the result of calling your function. In this example, it caches the result of calling computeRequirements(product) so that it doesn’t change unless product has changed. This lets you pass the requirements object down without unnecessarily re-rendering ShippingForm. When necessary, React will call the function you’ve passed during rendering to calculate the result.
- useCallback caches the function itself. Unlike useMemo, it does not call the function you provide. Instead, it caches the function you provided so that handleSubmit itself doesn’t change unless productId or referrer has changed. This lets you pass the handleSubmit function down without unnecessarily re-rendering ShippingForm. Your code won’t run until the user submits the form.

```
** Counter.jsx**
import { useCallback, useState } from "react";
import Button from "./Button";
import Showcount from "./Showcount";

const Countermemo = () => {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const count1Handler = useCallback(() => {
    setcount1((prev) => prev + 1);
  }, []);
  const count2Handler = useCallback(() => {
    setcount2((prev) => prev + 5);
  }, []);
  return (
    <div>
      <h1>useMemo</h1>
      <Showcount title={"Counter-1"} count={count1} />
      <Button handler={count1Handler}>IncrementByOne</Button>
      <hr />
      <Showcount title={"Counter-2"} count={count2} />
      <Button handler={count2Handler}>IncrementByFive</Button>
    </div>
  );
};

export default Countermemo;
**Showcount.jsx**
import React from "react";
// eslint-disable-next-line react/prop-types
const Showcount = ({ title, count }) => {
  console.log(`rendering ${title}`);
  return <div>{`Title:${title}---${count}`}</div>;
};

export default React.memo(Showcount);

**Button.jsx**
import React from "react";
// eslint-disable-next-line react/prop-types
const Button = ({ children, handler }) => {
  console.log(`rendering button ${children}`);
  return <button onClick={handler}>{children}</button>;
};

// export default Button;

export default React.memo(Button);
/**
 * After using memo second button also rerender after state changin
 *
 */

```
  
