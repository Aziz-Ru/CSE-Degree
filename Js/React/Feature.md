# Feature Of React
JSX stands for JavaScript XML. JSX is basically a syntax extension of JavaScript. React JSX helps us to write HTML in JavaScript and forms the basis of React Development.
## Rules to Write JSX
- Always return a single Root Element: When there are multiple elements in a component and you want to return all of them wrap them inside a single component
- Close all the tags: When we write tags in HTML some of them are self closing like the <img> tag but JSX requires us to close all of them so image tag will be represented as <img />
- Use camelCase convention wherever possible: When writing JSX if we want to give class to a tag we have to use the className attribute which follows camelCase convention.
# Babel
Babel is a very famous transpiler that basically allows us to use future JavaScript in today’s browsers. In simple words, it can convert the latest version of JavaScript code into the one that the browser understands.
- The main reason we need Babel is that it gives us the privilege to make use of the latest things JavaScript has to offer without worrying about whether it will work in the browser or not.
# Virtual DOM
Virtual DOM exists which is like a lightweight copy of the actual DOM.Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. 
- ## How does virtual DOM actually make things faster?
  When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. Once React finds out what exactly has changed then it updates those objects only, on real DOM. React uses something called batch updates to update the real DOM. It just means that the changes to the real DOM are sent in batches instead of sending any update for a single change in the state of a component.

  - We have seen that the re-rendering of the UI is the most expensive part and React manages to do this most efficiently by ensuring that the Real DOM receives batch updates to re-render the UI. This entire process of transforming changes to the real DOM is called Reconciliation.
 
## ReactDOM
ReactDOM is a package in React that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.
- ### Important functions provided by ReactDOM
  - render(): This is one of the most important methods of ReactDOM. This function is used to render a single React Component or several Components wrapped together in a Component or a div element.
  - findDOMNode(): This function is generally used to get the DOM node where a particular React component was rendered. This method is very less used like the following can be done by adding a ref attribute to each component itself.
  - unmountComponentAtNode(): This function is used to unmount or remove the React Component that was rendered to a particular container.
  - hydrate(): This method is equivalent to the render() method but is implemented while using server-side rendering. 
  - createPortal(): It allow us to render a component into a DOM node that resides outside the current DOM hierarchy of the parent component.
## List
React Lists are mainly used for displaying menus on a website, for example, the navbar menu. In regular JavaScript, we can use arrays for creating lists. To traverse a list we will use the map() function. 
- A “key” is a special string attribute you need to include when creating lists of elements in React.
- Keys allow React to keep track of list elements.
## ReactJS Refs
ReactJS Refs are used to access and modify the DOM elements in the React Application. It creates a reference to the elements and uses it to modify them.

## Conditional Rendering

  - Using if else Statement
 - Using Logical && Operator
   - Using ternary operator

