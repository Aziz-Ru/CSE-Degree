## useEffect

control the side effect of of dom.this func take two parameters .`useEffect(setup, dependencies?)`

- setup:

The function with your Effect’s logic. Your setup function may also optionally **return a cleanup function**. When your component is added to the DOM, React will run your setup function. After every re-render with changed dependencies

- optional

The list of all reactive values referenced inside of the setup code.The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison. If you omit this argument, your Effect will re-run after every re-render of the component.
If dependency array empty means that work in first time render.


**every state change mean re-render the full component**

## useRef

useRef is a React Hook that lets you reference a value that’s not needed for rendering.

`const ref = useRef(initialValue)`

initialValue: The value you want the ref object’s current property to be initially. It can be a value of any type. 

useRef returns an object with a single property:

current: Initially, it’s set to the initialValue you have passed.

## useReducer
when you need to multiple state handle that can be esily done by this hook

useReducer is a React Hook that lets you add a reducer to your component.

`const [state, dispatch] = useReducer(reducer, initialArg, init?)`

The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.

initialArg: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.

useReducer returns an array with exactly two values:
The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).

The dispatch function that lets you update the state to a different value and trigger a re-render.

## dispatch function

The dispatch function returned by useReducer lets you update the state to a different value and trigger a re-render. You need to pass the action as the only argument to the dispatch function:


