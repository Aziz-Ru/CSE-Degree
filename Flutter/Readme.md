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
  - Records are an anonymous, immutable, aggregate type. Like other collection types, they let you bundle multiple objects into a single object.Record type annotations are comma-delimited lists of types enclosed in parentheses. 
  - syntax
    ```
    var record = ('first', a: 2, b: true, 'last');
    (int, int) swap((int, int) record) {
      var (a, b) = record;
      return (b, a);
    }
    ```
    ## Collections
    Dart has built-in support for list, set, and map collections.
    - ### Lists
         - Perhaps the most common collection in nearly every programming language is the array, or ordered group of objects. 
    - ### Sets
        - A set in Dart is an unordered collection of unique items.
        - ```
          var names = <String>{};
          elements.add('fluorine');
          ```
    - ### Maps
        - In general, a map is an object that associates keys and values.
        - ```
          var gifts = Map<String, String>();
            gifts['first'] = 'partridge';
            gifts['second'] = 'turtledoves';
            gifts['fifth'] = 'golden rings';
            
            var nobleGases = Map<int, String>();
            nobleGases[2] = 'helium';
            nobleGases[10] = 'neon';
            nobleGases[18] = 'argon';
        ```
   - ### Spread operators
     -Dart supports the spread operator (...) and the null-aware spread operator (...?) in list, map, and set literals. Spread operators provide a concise way to insert multiple values into a collection.
     ```
     var list = [1, 2, 3];
     var list2 = [0, ...list];
     assert(list2.length == 4);
     ```
  ## Generics
  Generics are often required for type safety, but they have more benefits than just allowing your code to run:
   - Properly specifying generic types results in better generated code.
   - You can use generics to reduce code duplication.
  ## What is soundness?
    - Soundness is about ensuring your program can't get into certain invalid states. A sound type system means you can never get into a state where an expression evaluates to a value that doesn't match the expression's static type. For example, if an expression's static type is String, at runtime you are guaranteed to only get a string when you evaluate it.
     ### The benefits of soundness
  
      - Revealing type-related bugs at compile time.
      - More readable code.
      - More maintainable code.
      - Better ahead of time (AOT) compilation.
## Function
- A function can have any number of required positional parameters.
  ```
  isNoble(atomicNumber) {
  return _nobleGases[atomicNumber] != null;
  }
  ```
- Optional positional parameters
  
  ## Error handling
    - Your Dart code can throw and catch exceptions. Exceptions are errors indicating that something unexpected happened.
    - Throw
      ```
      throw FormatException('Expected at least 1 section');
      ```
   - Catch
     ```
     try {
          breedMoreLlamas();
        } catch(e){
          print(e)
        }```
     
    -Finally
      - To ensure that some code runs whether or not an exception is thrown, use a finally clause.
      -
          ```
          try {
              breedMoreLlamas();
            } catch (e) {
              print('Error: $e'); // Handle the exception first.
            } finally {
              cleanLlamaStalls(); // Then clean up.
            }
          ```
  ## Class
  Dart is an object-oriented language with classes and mixin-based inheritance. Every object is an instance of a class, and all classes except Null descend from Object. Mixin-based inheritance means that although every class (except for the top class, Object?) has exactly one superclass, a class body can be reused in multiple class hierarchies.
- ### Using class members
Objects have members consisting of functions and data .
- ### Using constructors
  You can create an object using a constructor. Constructor names can be either ClassName or ClassName.identifier.
  - Generative constructors: Creates new instances and initializes instance variables.
    ```
    class Point {
      // Initializer list of variables and values
      double x = 2.0;
      double y = 2.0;
      // Generative constructor with initializing formal parameters:
      Point(this.x, this.y);
    }
    ```
  - Default constructors: Used to create a new instance when a constructor hasn't been specified. It doesn't take arguments and isn't named.
  - Named constructors: Clarifies the purpose of a constructor or allows the creation of multiple constructors for the same class.
  - Constant constructors: Creates instances as compile-type constants.
## Getters and setters
Getters and setters are special methods that provide read and write access to an object's properties. 
```
class Rectangle {
  double left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  // Define two calculated properties: right and bottom.
  double get right => left + width;
  set right(double value) => left = value - width;
  double get bottom => top + height;
  set bottom(double value) => top = value - height;
}

void main() {
  var rect = Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  rect.right = 12;
  assert(rect.left == -8);
}
```
  
  
      

  
