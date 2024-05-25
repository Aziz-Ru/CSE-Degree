# usestate() Hook
The React useState Hook allows us to track state in a function component.The convention is to name state variables like [something, setSomething] using array destructuring.
```
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...
```
### Parameters 
- *initialState*: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions.
- If you pass a function as initialState, it will be treated as an initializer function. It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state.
### Returns 
useState returns an array with exactly two values:

  1. The current state. During the first render, it will match the initialState you have passed.
  2. The set function that lets you update the state to a different value and trigger a re-render.
React will store the next state, render your component again with the new values, and update the UI.

### set functions, like setSomething(nextState) 
The set function returned by useState lets you update the state to a different value and trigger a re-render. You can pass the next state directly, or a function that calculates it from the previous state:
```
const [name, setName] = useState('Edward');

function handleClick() {
  setName('Taylor');
  setAge(prev => prev + 1);
```
### Updating state based on the previous state 
```
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}
*However, after one click, age will only be 43 rather than 45! This is because calling the set function does not update the age state variable in the already running code. So each setAge(age + 1) call becomes setAge(43).To solve this problem, you may pass an updater function to setAge instead of the next state:*
function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}
```
Here, a => a + 1 is your updater function. It takes the pending state and calculates the next state from it.
### Updating objects and arrays in state 
ou can put objects and arrays into state. In React, state is considered read-only, so you should replace it rather than mutate your existing objects.
```
// ✅ Replace state with a new object
setForm({
  ...form,
  firstName: 'Taylor'
});
```
## Troubleshooting 
### I’ve updated the state, but logging gives me the old value 
```
function handleClick() {
  console.log(count);  // 0

  setCount(count + 1); // Request a re-render with 1
  console.log(count);  // Still 0!

  setTimeout(() => {
    console.log(count); // Also 0!
  }, 5000);
}
```
This is because states behaves like a snapshot. Updating state requests another render with the new state value, but does not affect the count JavaScript variable in your already-running event handler.
### I’ve updated the state, but the screen doesn’t update 
React will ignore your update if the next state is equal to the previous state, as determined by an Object.is comparison. This usually happens when you change an object or an array in state directly:

```
obj.x = 10;  // 🚩 Wrong: mutating existing object
setObj(obj); // 🚩 Doesn't do anything
```
You mutated an existing obj object and passed it back to setObj, so React ignored the update. To fix this, you need to ensure that you’re always replacing objects and arrays in state instead of mutating them:
```
// ✅ Correct: creating a new object
setObj({
  ...obj,
  x: 10
});
```
### I’m getting an error: “Too many re-renders”
You might get an error that says: *Too many re-renders. React limits the number of renders to prevent an infinite loop*. Typically, this means that you’re unconditionally setting state during render, so your component enters a loop: render, set state (which causes a render), render, set state (which causes a render), and so on. Very often, this is caused by a mistake in specifying an event handler:
```
// 🚩 Wrong: calls the handler during render
return <button onClick={handleClick()}>Click me</button>

// ✅ Correct: passes down the event handler
return <button onClick={handleClick}>Click me</button>

// ✅ Correct: passes down an inline function
return <button onClick={(e) => handleClick(e)}>Click me</button>
```
