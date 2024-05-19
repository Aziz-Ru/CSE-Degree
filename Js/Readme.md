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

