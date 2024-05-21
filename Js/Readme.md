# Javascript
javascript is a programming language used for creating dynamic content on websites. It is a lightweight, cross-platform and single-threaded programming language. JavaScript is an interpreted language that executes code line by line providing more flexibility. Its dynamic and weekly typed programming language which is interprted compiled at runtime.
## Dynamic
As Javascript is interprted language it's compile line by line code.code can change at runtime . so same varibale can store multple datatypes.
## Weakly typed
this means when work with data in javascript you dont need to tell which data type you want to assign or work with it. Dynamic nature of javascript where data can change from one line to another line.

# Variable
Variables are Containers for Storing Data
- Using var
- Using let
- Using const
  
The var keyword was used in all JavaScript code from 1995 to 2015.The let and const keywords were added to JavaScript in 2015.The var keyword should only be used in code written for older browsers.

  - Always use const if the type should not be changed
 
# Identifier
All JavaScript variables must be identified with unique names that is called identifier.
- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with $ and _ (but we will not use it in this tutorial).
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.
  
# Hoisting
You can use the variable before it is declared.It's only done by var
# var
Variables declared with the var always have Global Scope.
- Variables defined with var can be redeclared.
```
 var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2 
```
# let
  The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
  - let can not be redeclared.
  - must be declared before use.
  - is not hoisted(means before useing a variable you must be declare that varibale)
```
 let x = 10;
// Here x is 10
{
let x = 2;
// Here x is 2
}
// Here x is 10 
```
# const
- Variables defined with const cannot be Redeclared
- Variables defined with const cannot be Reassigned
- Variables defined with const have Block Scope
- JavaScript const variables must be assigned a value when they are declared
- It does not define a constant value. It defines a constant reference to a value.
-  Reassign a constant value
-  Reassign a constant array
-  Reassign a constant object
-  Redeclaring an existing var or let variable to const, in the same scope, is not allowed
  
But You can
-  Change the elements of constant array
-  Change the properties of constant object
  
  ```
const x = 10;
// Here x is 10
{
const x = 2;
// Here x is 2
}
// Here x is 10 
```
# JavaScript String Comparison
Note that strings are compared alphabetically
```
const a='abc';
const b='abd'
a is lexically smaller than b
```
## Addition
- string + string=string
- string + number=string
- number + string=string
# Subtraction
- string become a number 
- string-number =number
- number-string=number
# Multification
- string become a number 
- string*number =number
- number*string=number
# Division
- string become a number 
- string/number =number
- number/string=number
# Datatypes
- 1. String
- 2. Number
- 3. Bigint
- 4. Boolean
- 5. Undefined
- 6. Null
- 7. Symbol
- 8. Object

The Object Datatype.The object data type can contain:

- 1. An object
- 2. An array
- 3. A date
# Undefined and Null
undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null .
# Number
Javascript numbers are always one type:
double (64-bit floating point).

# BigInt
JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

# function
A JavaScript function is a block of code designed to perform a particular task.
- Functions Used as Variable Values
# Object
- Objects are variables too. But objects can contain many values.
- Objects can also have methods.
- Methods are stored in properties as function definitions.
- `this` refers to the "owner" of the function
- It is a common practice to declare objects with the const keyword.

# Events
HTML events are "things" that happen to HTML elements.
- onchange 	An HTML element has been changed.
- onclick 	The user clicks an HTML element.
- onmouseover 	The user moves the mouse over an HTML element.
- onmouseout 	The user moves the mouse away from an HTML element.
- onkeydown 	The user pushes a keyboard key.
- onload The browser has finished loading the page.
# String Methods
- string.length (returns the length of a string)
- 4 methods for extracting string characters
        - The at(position) Method
        - The charAt(position) Method
        -  The charCodeAt(position) Method
- string.slice(property) extracts a part of a string and returns the extracted part in a new string.
- string.indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found
- string.lastIndexOf(only string) method returns the index of the last occurrence of a specified text in a string
- string.search(regex/string/char) method searches a string for a string (or a regular expression) and returns the position of the match.search() method cannot take a second start position argument.
- match() method returns an array containing the results of matching a string against a string (or a regular expression).
- includes() method returns true if a string contains a specified value.Otherwise it returns false.includes() is case sensitive.includes() is an ES6 feature.
- # Interpolation
  -  Template String provide an easy way to interpolate variables and expressions into strings.`${...} `
# Nan
- NaN - Not a Number
- NaN is a JavaScript reserved word indicating that a number is not a legal number.
# Array
- Arrays are Objects
- Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.But, JavaScript arrays are best described as arrays.
- The easiest way to add a new element to an array is using the push() method
- pop() method removes the last element from an array
- JavaScript does not support arrays with named indexes./fixed size array
- JavaScript has a built-in array constructor new Array().But you can safely use [] instead.
- concat() method creates a new array by merging (concatenating) existing arrays
- sort() method sorts an array alphabetically
- reverse() method reverses the elements in an array
- # iteration
    - forEach() method calls a function (a callback function) once for each array element.in callback function have 3 property .The item value,The item index,The array itself
    - map() method creates a new array by performing a function on each array element.
    - map returns a new array with the results of the function, while forEach does not return anything and only modifies the original array.
    - Arrays are Not Constants.It does NOT define a constant array. It defines a constant reference to an array.
# Date
- Date objects are static.
- Date objects are created with the new Date() constructor.
- new Date() creates a date object with the current date and time.
# Math
- Math.round(x)	Returns x rounded to its nearest integer
- Math.ceil(x)	Returns x rounded up to its nearest integer
- Math.floor(x)	Returns x rounded down to its nearest integer
- Math.trunc(x)	Returns the integer part of x (new in ES6)
- Math.pow(x, y) returns the value of x to the power of y
- Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
- Math.log2(x) returns the base 2 logarithm of x.
- Math.log10(x) returns the base 10 logarithm of x.
- Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive).`Math.floor(Math.random() * 100); `return a number between 0 to 99
# Comparison Operators
- == 	equal to
- != 	not equal
- === 	equal value and equal type
- !== 	not equal value or not equal type
- ternary operator variablename = (condition) ? value1:value2
- Nullish Coalescing Operator. The ?? operator returns the first argument if it is not nullish (null or undefined).

# Regular Expression
- A regular expression is a sequence of characters that forms a search pattern.
- i 	Perform case-insensitive matching 	
- g 	Perform a global match (find all) 	
- m 	Perform multiline matching 	
- d 	Perform start and end matching (New in ES2022)
- [abc] 	Find any of the characters between the brackets 	
- [0-9] 	Find any of the digits between the brackets 	
- (x|y) 	Find any of the alternatives separated with |
- \d 	Find a digit 	
- \s 	Find a whitespace character 	
- \b 	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b 	
- \uxxxx 	Find the Unicode character specified by the hexadecimal number xxxx
# Errors
- The try statement defines a code block to run (to try).

- The catch statement defines a code block to handle any error.

- The finally statement defines a code block to run regardless of the result.

- The throw statement defines a custom error.
# this keyword
- In an object method, this refers to the objec
- the this keyword refers to an object.
- In a function, this refers to the global object.
- In short, with arrow functions there are no binding of this.
# Class
- Use the keyword class to create a class.Always add a method named constructor().
- The constructor method is a special method:

    - It has to have the exact name "constructor"
    - It is executed automatically when a new object is created
    - It is used to initialize object properties
# Module
- Modules only work with the HTTP(s) protocol.
- A web-page opened via the file:// protocol cannot use import / export.

# JSON
- JSON stands for JavaScript Object Notation
- JSON is a lightweight data interchange format
- JSON is language independent *
- JSON is "self-describing" and easy to understand
- JSON.parse() to convert the string into a JavaScript object
- JSON.stringify() to convert the json to string

  # JS Async
  - A callback is a function passed as an argument to another function.This technique allows a function to call another function.A callback function can run after another function has finished
  - A callback is a function passed as an argument to another function.
  - Functions running in parallel with other functions are called asynchronous
  - A Promise contains both the producing code and calls to the consuming code.Producing code" is code that can take some time."Consuming code" is code that must wait for the result,A Promise is an Object that links Producing code and Consuming code
  - Promise.then() takes two arguments, a callback for success and another for failure.
  - async and await make promises easier to write
  - async makes a function return a Promise
  - await makes a function wait for a Promise
  - The await keyword can only be used inside an async function.


