# Overloading & Overriding
To implement polymorphism in Java, we use two concepts method overloading and method overriding.
## Method Overloading (Compile-Time Polymorphism)
### Definition
- Same method name, but different parameter list inside the same class.
- Also called compile-time polymorphism because the compiler decides which method to call during compilation
```
class MathUtil {
    void sum(int a, int b) {
        System.out.println(a + b);
    }

    void sum(double a, double b) {
        System.out.println(a + b);
    }

    void sum(int a, int b, int c) {
        System.out.println(a + b + c);
    }
}

```
### Method Overriding (Runtime Polymorphism)
- A child class redefines a method from its parent class using the same signature.
- Also called runtime polymorphism because the JVM decides which method to call at runtime (dynamic dispatch).
- Static methods do not override—they hide.
- Private methods are not override, they are hiding
```
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
```
#### What is @Override annotation?
- Tells compiler "I intend to override" → catches mistakes early.


## What is output?
```
class A {
    void show(int a) { System.out.println("A-int"); }
}

class B extends A {
    void show(Integer a) { System.out.println("B-Integer"); }
}

public class Test {
    public static void main(String[] args) {
        B obj = new B();
        obj.show(5);
    }
}
```
Java has two possible methods:
    -  show(int a) → from parent class A
    -  show(Integer a) → from child class B (Integer = wrapper class)
#### Output: A-int

## What is the output?
```
class A {
    void show(Object o) { System.out.println("A-Object"); }
}

class B extends A {
    void show(String s) { System.out.println("B-String"); }
}

public class Test {
    public static void main(String[] args) {
        A obj = new B();
        obj.show("Hello");
    }
}

```
- Reference type = A
- Overloading is based on reference type, not object type
- Class A has: show(Object)
- Class B has: show(String) but reference type does NOT see it
- ✔ Correct: A-Object


## What is output?
```
class A {
    void show(int a) { System.out.println("A-int"); }
}

class B extends A {
    void show(long a) { System.out.println("B-long"); }
}

public class Test {
    public static void main(String[] args) {
        A obj = new B();
        obj.show(5L);
    }
}
```
- The Real Answer: This Code Does NOT Compile!
- Reference type = A → only sees show(int)
- 5L = long → cannot match int → compile error
