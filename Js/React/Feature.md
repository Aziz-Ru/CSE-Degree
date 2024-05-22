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
React-dom is the most widely used package of React. React provides the developers with a package react-dom to access and modify the DOM.
