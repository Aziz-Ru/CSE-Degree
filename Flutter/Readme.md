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
- Often Dart's control flow analysis can detect when a non-nullable variable is set to a non-null value before it's used, but sometimes analysis fails. Two common cases are top-level variables and instance variables: Dart often can't determine whether they're set, so it doesn't try.

  ## Final & const
  - If you never intend to change a variable, use final or const, either instead of var or in addition to a type. A final variable can be set only once; a const variable is a 'compile-time constant'.
  ## Built-in Types
  - Numbers(int,double)
  - String(String)
  - Booleans(bool)
  - Records((value1,value2))
  - Lists(List also known as array)
  - Sets(Set)
  - Maps(Map)
  - Object:The superclass of all Dart classes except Null.
  - Enum: The superclass of all enums.
  - Future and Stream: Used in asynchrony support. (Like javascript promise)
  - dynamic: Indicates that you want to disable static checking. Usually you should use Object or Object?
  ## Record
  - Records are an anonymous, immutable, aggregate type. Like other collection types, they let you bundle multiple objects into a single object.
  - syntax
    ```
    var record = ('first', a: 2, b: true, 'last');
    (int, int) swap((int, int) record) {
      var (a, b) = record;
      return (b, a);
    }
    ```
    
