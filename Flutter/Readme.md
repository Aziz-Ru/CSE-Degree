# Flutter Basic To Advance
# Dart
## Dart is a statically typed language, we have the possibility to define a variable with a dynamic type. 
- Everything you can place in a variable is an object, and every object is an instance of a class. Even numbers, functions, and null are objects. With the exception of null (if you enable sound null safety), all objects inherit from the Object class.

- Although Dart is strongly typed, type annotations are optional because Dart can infer types. In var number = 101, number is inferred to be of type int.

### var
In Dart, var is a keyword that represents a dynamically typed variable. 

### Null safety
Null safety prevents an error that results from unintentional access of variables set to null. The error is called a null dereference error. A null dereference error occurs when you access a property or call a method on an expression that evaluates to null. you can control whether the type allows null. To enable nullability, you add a ? to the end of the type declaration.For example `String? Name`
