## Dart classes

Dart is an object-oriented programming language. In Dart, everything is an object. An object consists of states and behaviors:

- The state describes the values that an object has at a specified time.

- The behaviors are actions that an object can do to manipulate its state.

To create an object, you need to define a class first. A class is a blueprint for creating objects.

_Variables are used to model the state of objects. When variables are defined inside a class, they are called properties of the class._

_Functions are used to model the behaviors of objects. When functions are defined inside a class, they are called methods._

- To define a class, you use the class keyword followed by a class name and curly braces

```
class MyClass {
}
```

## Creating objects from a class

```
MyClass c1=MyClass();

```

## Adding properties to the class

````
class Point {
  int x = 0;
  int y = 0;
}
```

Dart provides a cascade operator (..) that allows you to chain multiple assignments on the same object without repeating the object name. For example:

```
class Point {
int x = 0;
int y = 0;
}
void main() {
var p1 = Point()
..x = 10
..y = 20;
}
```

### k
````

## this

The this keyword means the current instance of the class.

```
class Point {
  int x = 0;
  int y = 0;

  void move(int x, int y) {
    this.x = x;
    this.y = y;
  }

  void show() {
    print('Point($x,$y)');
  }
}
```

## Dart Constructor

A default constructor has the same name as the class name. Also, it has no parameters and returns an instance of the class

_A constructor is special because Dart will automatically call it when you create a new object._

```
class Point {
  int x = 0;
  int y = 0;

  Point(int x, int y) {
    this.x = x;
    this.y = y;
  }
}

void main() {
  var p1 = Point(10, 20);
}
```

Dart calls the following constructor as a long-form constructor:

```
Point(this.x, this.y);
```

### Named constructor

A named constructor is a constructor that has a name. To define a named constructor, you add an identifier to the class name with the following syntax

```
className.constructorName()
```

## Introduction to the Dart private fields

When you define a property for a class, you can access it from the outside of a class. The accessibility of the property is public.

To make the property private, _you need to prefix its name with an underscore (_):\_

```
type _privateVariable;
```

_**Note that a variable of a class is generally called a field. However, if it can be accessed from outside of a class, it is called a property.**_

- Add underscore (\_) to fields to make them private at the library level rather than the class level.

- A library is a source code file in Dart.

## Introduction to the Dart getter & setter

Method overriding allows a method in a child class to override the same method in the parent class.

## Dart Abstract Classes

So far, you have learned how to define classes. These classes are called concrete classes. They’re concrete because you can create new objects out of them. Besides concrete classes, Dart supports abstract classes. An abstract class is a class declared with the abstract keyword:

```
abstract class AbstractClassName
{
}
```

The main purpose of the abstract class is to allow other classes to inherit from it.An abstract class may contain abstract properties and methods. Typically, an abstract class has abstract methods for its child classes to implement
