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
  - is not hoisted(means to use variable must be declare)
```
 let x = 10;
// Here x is 10
{
let x = 2;
// Here x is 2
}
// Here x is 10 
```
