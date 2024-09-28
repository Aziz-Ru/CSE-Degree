## Typescript

TypeScript is a superset of JavaScript.

TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.

TypeScript uses the JavaScript syntaxes and adds additional syntaxes for supporting Types.

### Primitive types

- string Represent text data.

- number Represent numeric values.

- boolean Have true and false values.

- null Have one value: null.

- undefined Have one value: undefined. It is the default value of an uninitialized variable.

TypeScript uses type annotations to specify explicit types for identifiers such as variables, functions, objects, etc.

TypeScript uses the syntax : type after an identifier as the type annotation, which type can be any valid type.

```
let variableName: type;
let variableName: type = value;
const constantName: type = value;
```

To annotate an array type you use a specific type followed by a square bracket : type[] :

### Function arguments & return types

```
let greeting : (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
};

function add(a: number, b: number): number {
  return a + b;
}

```

### Type inference

TypeScript guesses the type

### Type annotations

You explicitly tell TypeScript the type

When creating a variable, there are two main ways TypeScript assigns a type:

- Explicit : declar a variable with Type

- Implicit :Type will be guess

## TypeScript Number

All numbers in TypeScript are either floating-point values or big integers. The floating-point numbers have the type number while the big integers get the type bigint

```
let price: number;
let price = 9.95;

```

### Binary Numbers

The binary number uses a leading zero followed by a lowercase or uppercase letter b.

### Octal Number

An octal number uses a leading zero followed by the letter o (since ES2015) 0o

## Hexadecimal numbers

Hexadecimal numbers use a leading zero followed by a lowercase or uppercase letter X (0x or 0X).

### Big Integer

The big integers represent the whole numbers larger than 253 – 1.

## TypeScript String

Like JavaScript, TypeScript uses double quotes (") or single quotes (') to surround string literals:

```
let firstName: string = 'John';
let title: string = "Web Developer";
```

TypeScript also supports template strings that use the backtick (`) to surround characters.

## TypeScript boolean

In TypeScript, you can declare a boolean variable using the boolean keyword.

```
let pending: boolean;
pending = true;
```

## TypeScript object type

The TypeScript object type represents all values that are not in primitive types.

The following are primitive types in TypeScript:

number
bigint
string
boolean
null
undefined
symbol

```
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
```

TypeScript has another type called Object with the letter O in uppercase. It’s important to understand the differences between them.

### object vs. Object

_The object type represents all non-primitive values while the Object type describes the functionality of all objects._

## TypeScript array type

A TypeScript array is an ordered list of data.
`let arrayName: type[];`

For example, the following declares an array of strings:

`let skills: string[] = [];`

declaring fixed size array:
`let list: [number, number, number];`

## Unknown Type

In TypeScript, the unknown type can hold a value that is not known upfront but requires type checking.

To declare a variable of the unknown type, you use the following syntax:

`let result: unknown;`

Like the any type, you can assign any value to a variable of the unknown type. For example:

```
let result: unknown;

result = 1;
result = 'hello';
result = false;
result = Symbol();
result = { name: 'John' };
result = [1, 2, 3];
```

_any type, TypeScript checks the type before performing operations on it. you cannot call a method or apply an operator on a unknown value._

- Enforces type safety

- Operations cannot be performed without type assertion (narrowing type)

- Useful for dynamic values and safe because it requires validation before use.

## any

_opt out of the type checking_

- No type-safety

- Operations can be performed without checks

- Useful for dynamic values but unsafe.

- TypeScript compiler does not perform a type checking on an any variable.

## TypeScript Tuple

A tuple works like an array with some additional considerations:

- The number of elements in the tuple is fixed.

- The types of elements are known, and need not be the same.

```
let skill: [string, number];
skill = ['Programming', 5];
```

### TypeScript Enum

An enum is a group of named constant values. Enum stands for enumerated type.Under the hood, an enum is a JavaScript object with named properties declared in the enum definition.

The following shows the syntax for defining an enum:

`enum name {constant1, constant2, ...};`

#### When to use an enum

You should use an enum when you:

- Have a small set of closely related fixed values.

- And these values are known at compile time.

```
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}

```

### TypeScript void type

The void type denotes the absence of having any type at all.

```
function log(message): void {
    console.log(messsage);
}
```

## TypeScript union type

you can make type stirng or number etc;

`let result: number | string;`

A union type describes a value that can be one of several types, not just two. For example number | string | boolean is the type of a value that can be a number, a string, or a boolean.

## TypeScript type aliases

a type alias allows you to create a new name for an existing type.

To define a type alias, you use the type keyword followed by the alias name and the type it represents.

```
type Personal = {
  name: string;
  age: number;
};
```

## null

The null type holds a single value, which is null.

## never

_The never type is a type that holds no value_. It is like an empty set.Since a never type does not hold any value, you cannot assign a value to a variable with the never type.

## TypeScript functions

TypeScript functions are the building blocks of readable, maintainable, and reusable code.

```
function name(parameter: type, parameter:type,...): returnType {
   // do something
}
```

### function types

A function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts with the following syntax:

`(parameter: type, parameter:type,...) => type`

### Optional Parameters

Use the parameter?: type syntax to make a parameter optional.

```
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
```

### Rest Parameters

A rest parameter allows a function to accept zero or more arguments of the specified type.

```
function fn(...rest: type[]) {
   //...
}
```

## class

```
class Person {
    ssn;
    firstName;
    lastName;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

### modifiers

Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three access modifiers:

- private
- protected
- public

## TypeScript Interface

In TypeScript, both type and interface can be used to define the shape of objects and other structures.
TypeScript interfaces define contracts in your code and provide explicit names for type-checking.

Interfaces may have optional properties or read-only properties.

The type annotation of the function argument makes the code difficult to read. To address this issue, TypeScript introduces the concept of interfaces.

Interfaces can be used as function types.

```
interface Person {
    firstName: string;
    lastName: string;
}
<!-- Optional properties -->
interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}
<!-- Readonly properties -->
interface Person {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let person: Person;
person = {
  ssn: '171-28-0926',
  firstName: 'John',
  lastName: 'Doe',
};
person.ssn = '171-28-0000';(error TS2540: Cannot assign to 'ssn' because it is a read-only property.)

```

### Function types

interface StringFormat {
(str: string, isUpper: boolean): string
}

### Extend Interfaces in TypeScript

Interfaces extending one interface

```
interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}
```

### Typescript Generics

Generics in TypeScript allow you to create reusable components, classes, or functions that work with a variety of types, while maintaining type safety.They enable you to define flexible, type-safe code that can handle multiple types without losing type information.

_working logic same but data type diffrent ,then you can use generics_

Leverage type checks at the compile time.
Eliminate type castings.

```
// Suppose you need to develop a function that returns a random number in an array of numbers.

function getRandom1Element(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// To get a random element of an array, you need to:

// Find the random index first.
// Get the random element based on the random index.

let numbers = [1, 5, 7, 4, 2, 9];
let colors = ["red", "green", "blue"];
console.log(getRandom1Element(colors));
console.log(getRandom1Element(numbers));
// The getRandomNumberElement function receives an array of numbers and returns a random number from the array.

// TypeScript generics come to the rescue

// The following shows a generic function that returns the random element from an array of type T

// SOlve

function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers1 = [1, 5, 7, 4, 2, 9];
let colors1 = ["red", "green", "blue", "yellow", "orange", "purple"];
console.log(getRandomElement<string>(colors1));
console.log(getRandomElement<number>(numbers1));

```
