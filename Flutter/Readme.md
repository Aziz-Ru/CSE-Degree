# Flutter Basic To Advance
# Dart
## Dart is a statically typed language, we have the possibility to define a variable with a dynamic type. 
- Everything you can place in a variable is an object, and every object is an instance of a class. Even numbers, functions, and null are objects. With the exception of null (if you enable sound null safety), all objects inherit from the Object class.

- Although Dart is strongly typed, type annotations are optional because Dart can infer types. In var number = 101, number is inferred to be of type int.
- If you enable null safety, variables can't contain null unless you say they can. You can make a variable nullable by putting a question mark (?) at the end of its type.
- Dart supports generic types, like List<int> (a list of integers) or List<Object> (a list of objects of any type).
- Dart supports top-level functions (such as main()), as well as functions tied to a class or object (static and instance methods, respectively). You can also create functions within functions (nested or local functions).
- Unlike Java, Dart doesn't have the keywords public, protected, and private. If an identifier starts with an underscore (_), it's private to its library.

## var
- In Dart, var is a keyword that represents a dynamically typed variable.

## late
- The late modifier has two use cases:
    - Declaring a non-nullable variable that's initialized after its declaration.
    - Lazily initializing a variable.
