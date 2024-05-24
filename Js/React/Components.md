# Component
React Components are the building block of React Application.we mainly have two types of components.1.Functional Components 2.Class based Components.

## Functional Components
Functional components are just like JavaScript functions that accept properties and return a React element.We can create a functional component in React by writing a JavaScript function.

## Class based Components
The class components are a little more complex than the functional components. A class component can show inheritance and access data of other components.Class Component must include the line “extends React.Component” to pass data from one class component to another class component. We can use JavaScript ES6 classes to create class-based components in React.

## Functional Component vs Class Component

A functional component is best suited for cases where the component doesn’t need to interact with other components or manage complex states. Functional components are ideal for presenting static UI elements or composing multiple simple components together under a single parent component.

While class-based components can achieve the same result, they are generally less efficient compared to functional components. Therefore, it’s recommended to not use class components for general use.
## Props
  Props(short for properties) are a way to pass data from the parent component to the child component.Props are like function arguments, you can use them as attributes in components.We know that everything in ReactJS is a component and to pass in data to these components, props are used. Whenever we call child components from parents we can pass data as props. This helps the parent component communicate with the child. 
  - Passing methods as props
## 
