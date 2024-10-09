# Dart

A client-optimized language, type safe & static type language , design for developing fast apps for multiple platforms. It has ability to compile multiple target like arm64,x86_64.

Although types are mandatory, type annotations are optional because of type inference. art has built-in sound null safety.

## Libraries

- Built-in types, collections, and other core functionality for every Dart program (dart:core)

- Richer collection types such as queues, linked lists, hashmaps, and binary trees (dart:collection)

- Encoders and decoders for converting between different data representations, including JSON and UTF-8 (dart:convert)

- Mathematical constants and functions, and random number generation (dart:math)

- Support for asynchronous programming, with classes such as Future and Stream (dart:async)

- File, socket, HTTP, and other I/O support for non-web applications (dart:io)

## Dart: The platforms

- Native platform: For apps targeting mobile and desktop devices, Dart includes both a Dart VM with just-in-time (JIT) compilation and an ahead-of-time (AOT) compiler for producing machine code.

- Web platform: For apps targeting the web, Dart can compile for development or production purposes. Its web compilers translate Dart into JavaScript or WebAssembly.

## Dart:Performance

JIT and AOT Compilation: Dart supports both Just-In-Time (JIT) for faster development and Ahead-of-Time (AOT) compilation for better runtime performance in production.

- JIT:

JIT compilation occurs at runtime. The source code is compiled into machine code while the application is running.IT is great for development environments because it allows for features like hot reload (instant updates when you change your code).

- AOT:

AOT compilation happens before runtime, during the build process. The source code is compiled into machine code ahead of time, and this pre-compiled machine code is what gets executed by the CPU when the program runs.

## Important concepts

- Everything you can place in a variable is an object, and every object is an instance of a class.

- Although Dart is strongly typed, type annotations are optional because Dart can infer types. In var number = 101, number is inferred to be of type int.

- _If you enable null safety, variables can't contain null unless you say they can. You can make a variable nullable by putting a question mark (?) at the end of its type._

For example, a variable of type int? might be an integer, or it might be null. _If you know that an expression never evaluates to null but Dart disagrees, you can add ! to assert that it isn't null_ (and to throw an exception if it is).

- Dart supports generic types, like List<int> (a list of integers) or List<Object> (a list of objects of any type).

- Unlike Java, Dart doesn't have the keywords public, protected, and private. If an identifier starts with an underscore (\_), it's private to its library.

## Variable

Even in type-safe Dart code, you can declare most variables without explicitly specifying their type using var. Thanks to type inference, these variables' types are determined by their initial values:

```
void main() {
  // Variable
  var name = "Dart";
  dart can guess the type by intialvalue
  var age = 25;
  var height = 1.75;
  var isStudent = true;
  var isEmployed = false;
  print(name.runtimeType);
  print(age.runtimeType);
  print(height.runtimeType);
  print(isStudent.runtimeType);
  print(isEmployed.runtimeType);
}


```

name variable contains refrence to a String Object with value "Dart". The type of the name variable is inferred to be String, but you can change that type by specifying it. If an object isn't restricted to a single type, specify the Object type (or dynamic if necessary).

`Object name = 'Bob';` or `String name = 'Bob';`

The Dart language enforces sound null safety.if we declar `var v;` type of v is Null.The error is called a null dereference error. A null dereference error occurs when you access a property or call a method on an expression that evaluates to null. An exception to this rule is when null supports the property or method, like toString() or hashCode. With null safety, the Dart compiler detects these potential errors at compile time.

For example, say you want to find the absolute value of an int variable i. If i is null, calling i.abs() causes a null dereference error.

Null safety introduces three key changes:

- When you specify a type for a variable, parameter, or another relevant component, you can control whether the type allows null. To enable nullability, you add a ? to the end of the type declaration.

```
String? name  // Nullable type. Can be `null` or string.
```

### Late variables

The late modifier has two use cases:

- Declaring a non-nullable variable that's initialized after its declaration.

- Lazily initializing a variable.

## final & const

In Dart, both final and const are used to declare variables that cannot be reassigned, but they have some key differences in how they operate and when they're used.

### final

A final variable can only be set once. After its initial value is assigned, it cannot be changed. The value of a final variable can be determined at runtime. This means you can assign a value to it based on computations or method calls at the moment it is initialized.f you use the final keyword, you can assign a constant value to the field once at runtime

### const

A const variable is a compile-time constant. Its value must be known at compile time and cannot be changed.If you use the const keyword, you need to initialize the value in the field declaration. Also, the value must be known at compile time.

- Use const for variables that you want to be compile-time constants.

## Type test operators

- as Typecast (also used to specify library prefixes)

- is True if the object has the specified type

- is! True if the object doesn't have the specified type

## Types

- Numbers(int,double)
- Strings(String)
- Booleans(bool)
- Lists(List as array)
- Maps(Map)
- Sets(Set)
- Symbols

Some other types also have special roles in the Dart language:

- Object: The superclass of all Dart classes except Null.

- Enum: The superclass of all enums.

- Future and Stream: Used in asynchrony support.

- Iterable: Used in for-in loops and in synchronous generator functions.

- dynamic: Indicates that you want to disable static checking. Usually you should use Object or Object? instead.

- void: Indicates that a value is never used. Often used as a return type.

## Function

A function signature has a return type, function name, and parameter list.syntax:

```
returnType functionName(param1,param2,..){

}
```

- Use the square brackets [] to make one or more parameters optional.

```

void main(List<String> args) {
greet(
"Dart",
2021,
);
}

void greet(String name, [int? year, int? month]) {
//Use the square brackets [] to make one or more parameters optional.
print("Hello $name");
if (year != null) {
print("Year: $year");
}
if (month != null) {
print("Month: $month");
}
}

```

### Introduction to the Dart named parameters

Named parameters make the meaning of parameters clear in the function calls.

- To define named parameters, you surround them with curly braces. to required the value add required in first of params.

## Class

Dart is an object-oriented programming language. In Dart, everything is an object. An object consists of states and behaviors:

- Use the final keyword to make a field of a class immutable.

- Use the Dart static keyword to declare a static field or method in a class.

### Inheritance

Inheritance allows you to define a class that extends the functionality of another class. Dart supports single inheritance. It means that a class can inherit from a single class. Dart doesn’t support multiple inheritances.

To define a class that inherits from another class, you use the extends keyword as follows:

```
class ChildClass extends ParentClass {
  //...
}
```

Inheritance allows a child class to inherit the properties and methods from another class.

Use the super keyword to reference the parent class.

## Collections

- Introduction to the Dart private fields

When you define a property for a class, you can access it from the outside of a class. The accessibility of the property is public.

To make the property private, you need to prefix its name with an underscore (\_): `type _privateVariable;`

_Note that a variable of a class is generally called a field. However, if it can be accessed from outside of a class, it is called a property._

### Lists

Perhaps the most common collection in nearly every programming language is the array, or ordered group of objects. In Dart, arrays are List objects, so most people just call them lists.following syntax:
`List<Type> name=[]`

```

var score = [1, 2, 3];

```

`Dart infers that list has type List<int>. If you try to add non-integer objects to this list, the analyzer or runtime raises an error.`

- Adding elements to a list ` scores.add(5);`

- Removing elements to a list `scores.add(value);`

- To prevent a list from being reassigned to another list, you use the final keyword.

- Use the final keyword to define a list that can be assigned once.

- Use the const keyword to define an immutable list.

### Set

A set in Dart is an unordered collection of unique items.TO create Empty Set:

`Set<Type>Name={}`

Or you can move the type to the right-hand side:

`var ratings = <int>{};`

- Getting the number of elements:

  `ratings.length`

- Accessing an element by index:

`ratings.elementAt(0)`

- Adding an element to a set

`ratings.add(4);`

-Adding multiple Elements:

`ratings.addAll([4, 5] or list);    `

- Checking the existence of elements

`ratings.contains(1)`

- Finding the intersection of two sets

```

var a = {1, 2, 3};
var b = {2, 3, 4};
var c = a.intersection(b);

```

## Map

Map type allows you to manage a collection of key/value pairs.The Map type is similar to the Dictionary type in other programming languages.

creating a map : `Map<String, int> map`

- Accessing Elements :
  ` print(map['one']);`

- Adding elements to a map

`map['four']=4;`

- Removing elements
  `map.remove('four');`

- map.isEmpty – return true if the map has no element.

- map.isNotEmpty – return true if the map has at least one element.

- map.length – return the number of elements of the map.

- map.keys – return a list of keys.

- maps.values – return a list of values.

- Checking for the existence of keys or values
  `print(map.containsKey('five'));`

map.containsKey(key) return a boolean
print(map.containsValue(1)); checking existing value.

- Iterating over elements of a map

```

void main() {
var fruits = {'apple': 1, 'banana': 2, 'orange': 3};
for (var name in fruits.keys) {
print('$name: ${fruits[name]}');
}
}

```

## Enums

Enums are a way of enumerating a predefined set of values or instances in a way which ensures that there cannot be any other instances of that type.

## Async

### Dart Event Loop

Dart is a single-threaded language. It means that Dart uses a single thread to execute the code. Dart’s single thread runs in what is known as an isolate.

The event loop has two queues:

- A microtasks queue.
- An event queue.

Dart mostly uses the microtasks queue internally. Also, Dart uses an event queue for asynchronous tasks.

### Dart Future

A future is an object that represents the result of an asynchronous operation.

A future object will return a value at a later time.

A future has two states: uncompleted and completed. When a future completes, it has two possibilities:

- Completed with a value
- Failed with an error
