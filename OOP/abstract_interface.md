# abstract class
- An abstract class is a class that cannot be instantiated and can contain:
    - Abstract methods (without body)
    - Concrete methods (with body)
    - Fields / variables
    - Constructors
- Cannot create object of abstract class: new Animal() ❌
- Can have constructors → called by child class
- Can have concrete + abstract methods
- Abstract method must be implemented in child class (unless child is also abstract)
- Can have instance and static variables
- Abstract class itself is template
-  is allocated only when child object is created
-  Child object stores all inherited fields and methods

# Interfaces
- Interface is a pure contract for classes
- It defines what methods a class must implement, but usually does not provide implementation
```
interface Vehicle {
    int wheels = 4;   // public static final by default
    void start();     // abstract by default
    void stop();

    default void honk() { // default method
        System.out.println("Beep beep");
    }

    static void info() {
        System.out.println("This is Vehicle interface");
    }
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car started");
    }

    @Override
    public void stop() {
        System.out.println("Car stopped");
    }
}

public class Test {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.start(); // Car started
        v.honk();  // Beep beep
        Vehicle.info(); // This is Vehicle interface
    }
}

```
- Cannot create object of interface: new Vehicle() ❌
- Variables are public static final by default
- Methods are abstract by default (unless default/static)
- Can have multiple interfaces implemented (multiple inheritance)
- Interfaces do not have constructors

## Advanced / Tricky Points

- Abstract class can implement interface → can provide some method implementation
- Interface can extend another interface → multiple inheritance supported
- Class can implement multiple interfaces → solves “diamond problem”
- Default method can be overridden in implementing class
- Static interface method can be called only by interface name, not object
| Feature          | Abstract Class                   | Interface                                                        |
| ---------------- | -------------------------------- | ---------------------------------------------------------------- |
| Instantiation    | ❌ cannot                         | ❌ cannot                                                         |
| Methods          | Abstract + concrete              | Abstract + default + static                                      |
| Variables        | Any type                         | public static final only                                         |
| Inheritance      | Single inheritance               | Multiple inheritance possible                                    |
| Constructor      | Allowed                          | ❌ Not allowed                                                    |
| Access Modifiers | Any                              | Only public for abstract methods, fields are public static final |
| When to use      | Partial abstraction, common code | Full abstraction, contract, multiple inheritance                 |


## 1
```
abstract class A {
    abstract void show();
}

abstract class B extends A {
    void show() { System.out.println("B"); }
}

class C extends B {}

public class Test {
    public static void main(String[] args) {
        A a = new C();
        a.show();
    }
}

```
- Output: B

## 2
```
interface X {
    default void test() { System.out.println("X"); }
}

interface Y {
    default void test() { System.out.println("Y"); }
}

class Z implements X, Y {}

public class Test {
    public static void main(String[] args) {
        new Z().test();
    }
}
```
- Multiple default methods conflict → MUST override.

## 3

```
interface A {
    int x = 10;
}

class B implements A {
    void print() {
        x = 20;
        System.out.println(x);
    }
}

```
- Compile error – cannot assign value to x

## 4
```
abstract class A {
    A() { System.out.println("A"); }
    abstract void show();
}

class B extends A {
    B() { System.out.println("B"); }
    void show() {}
}

public class Test {
    public static void main(String[] args) {
        A a = new B();
    }
}

```

- Constructor call order:
     -    Parent constructor → prints A
     -    Child constructor → prints B

## 5
```
interface I {
    void a();
}

abstract class A implements I {
    public void a() { 
        System.out.println("A"); 
    }
}

class B extends A { }   // ← B doesn't override anything!

public class Test {
    public static void main(String[] args) {
        I i = new B();
        i.a();
    }
}
```
- Output: A

## What is output?
```
interface A {
    static void show() { 
        System.out.println("A"); 
    }
}

class B implements A {
    void test() {
        show();        // ← What happens here?
    }
}

public class Test {
    public static void main(String[] args) {
        B b = new B();
        b.test();
    }
}
```

- Why? Because static methods in interfaces are NOT inherited!
- static methods belong to the interface, not the object. They are not part of the instance and are never inherited.

## 6
```
abstract class A {
    int x = 10;
    abstract void show();
}

class B extends A {
    int x = 20;
    void show() { System.out.println(x); }
}

public class Test {
    public static void main(String[] args) {
        A a = new B();
        System.out.println(a.x);
    }
}
```
- Fields (variables) are NOT overridden in Java Only methods are overridden
- So x in class B does NOT override x in class A → It hides it (called variable hiding or shadowing)


```
Output:
textA
Why? Perfect Step-by-Step Explanation (Senior-Level Interview Ready)
Javainterface A {
    default void show() { 
        System.out.println("A"); 
    }
}

class B implements A {
    public void show(int x) {           // ← Different parameter!
        System.out.println("B"); 
    }
}

public class Test {
    public static void main(String[] args) {
        A a = new B();      // Reference = A, Object = B
        a.show();           // ← Which show() is called?
    }
}
```
- This is NOT Overriding → This is Overloading!
- The method show(int x) in class B has a different parameter list, so it does not override the default show() from interface A.
- Therefore, when we call a.show() through an A reference, Java finds the default implementation in the interface and executes it → prints 'A'.
- Default methods are only suppressed when properly overridden with the exact same signature."

## 7
```
interface A {
    private void test() {}
    default void show() { test(); }
}

class B implements A {}

public class Test {
    public static void main(String[] args) {
        new B().show();
    }
}
```
- NO OUT PUT

## 8
```
abstract class A {
    A() { 
        show();         // ← DANGER: Calls abstract method during construction!
    }
    abstract void show();
}

class B extends A {
    int x = 10;         // ← Instance variable initialized AFTER constructor body
    void show() { 
        System.out.println(x); 
    }
}

public class Test {
    public static void main(String[] args) {
        new B();        // ← Just creating object → what gets printed?
    }
}
```
#### Output: 0
- When you do new B():
    - B's instance variables are set to default values → x = 0 (int default)
    - Superclass (A) constructor is called
    - Inside A() constructor → show() is called (dynamic dispatch!)
    - show() is overridden in B → so B.show() runs
    - But at this moment, x is still 0 → prints 0
    - After A() finishes → B's instance initializers run → x = 10
    - Too late! Already printed 0

## 9
```
interface X {
    default void m() { System.out.println("X"); }
}

interface Y extends X {
    default void m() { System.out.println("Y"); }   // ← overrides X.m()
}

class Z implements Y { }    // ← Z inherits from Y

public class Test {
    public static void main(String[] args) {
        new Z().m();        // → What prints?
    }
}
```
- All print Y — because the most specific overriding default method wins

## 10

```
interface A {
    static void test() { System.out.println("A"); }
}

class B implements A {
    static void test() { System.out.println("B"); }   // ← This is NOT overriding!
}

public class Test {
    public static void main(String[] args) {
        A.test();   // → "A"
        B.test();   // → "B"
    }
}
```
- A B
- Static methods in interfaces are not inherited and cannot be overridden — they belong to the interface itself.

## 11
```
interface I {
    default void m() { System.out.println("I"); }
}

class A {
    public void m() { System.out.println("A"); }
}

class B extends A implements I { }   // ← B does nothing

public class Test {
    public static void main(String[] args) {
        new B().m();    // → What prints?
    }
}
```
- Output : A
- When a class inherits a concrete method from a superclass and a default method from an interface with the same name and signature, the class method always wins

## 12
```
abstract class A {
    abstract void m();
    void m(int x) { System.out.println("A"); }
}

class B extends A {
    void m() { System.out.println("B"); }
    void m(double d) { System.out.println("B2"); }
}

public class Test {
    public static void main(String[] args) {
        A a = new B();
        a.m(5.5);
    }
}

```
#### Why Compile Error?

- Reference type is A
- Through A, only two methods are visible:
            - m() → no parameters
            - m(int x) → takes int

- You are calling a.m(5.5) → passing a double
    - Java checks:
    - Can double → match m()? → No
    - Can double → match m(int)? → No (would require narrowing conversion, not allowed without cast)

## 13
```
interface A {
    default void m() { System.out.println("A"); }
}

interface B {
    default void m() { System.out.println("B"); }
}

class C implements A, B {
    public void m() { System.out.println("C"); }   // ← C overrides both!
}

public class Test {
    public static void main(String[] args) {
        A a = new C();
        a.m();        // → What prints?
    }
}
```
#### Output : C
- When a class implements two interfaces with conflicting default methods (the classic Diamond Problem), Java requires the class to explicitly override the method.
- Once overridden, the class version wins completely — regardless of reference type.
- So even when called through an A reference, C.m() is executed → prints 'C'.

## 14
```
abstract class A {
    final void m() { System.out.println("A"); }
}

class B extends A {
    void m(int x) { System.out.println("B"); }
}

public class Test {
    public static void main(String[] args) {
        A a = new B();
        a.m();
    }
}

```
- Ouput : A
- m() in class A is final → it cannot be overridden
- m(int x) in class B has different parameters → this is overloading, not overriding
- So B.m(int x) is a completely separate method
- When you call a.m() (no argument) → only one method matches: the final m() from class A

## 15
```
interface A {
    int x = 10;
}

class B implements A {
    int x = 20;
}

public class Test {
    public static void main(String[] args) {
        A a = new B();
        System.out.println(a.x);
    }
}

```
#### Why 10 and NOT 20?
- Because interface variables are public static final — they belong to the interface, not the object!
- Interface fields are static → resolved at compile time based on reference type. They are NOT polymorphic → never depend on the actual object


## 16
```
abstract class A {
    abstract Number show();
}

class B extends A {
    Integer show() { return 5; }
}

public class Test {
    public static void main(String[] args) {
        A a = new B();
        System.out.println(a.show());
    }
}

```
- Output: 5
- you can override a method with a more specific (subclass) return type → Called Covariant Return Type

