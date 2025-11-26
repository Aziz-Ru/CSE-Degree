## OOP
Object-oriented programming aims to implement real-world entities like inheritance, hiding, polymorphism, etc. in programming. The main aim of OOPs is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.

Objects are representations of real-life elements. Each object has a set of attributes that differentiates it from the rest of the objects of the same class, and is capable of a set of actions. A class is the definition of what an object looks like and what it can do, like a pattern for objects.

## Class & Objects
### Class
- A class is a blueprint, template, or design.
- It defines how something should look and behave, but it is not the actual thing.
- class contains:
    - Properties/attributes (data)
    - Methods/functions (behaviors)
```
  class Car {
    String color;
    int speed;

    void drive() { ... }
}
```
### Object
- An object is created from a class.
- It is the real instance you can use.
- It has actual values stored inside the properties

| Class                             | Object                         |
| --------------------------------- | ------------------------------ |
| Blueprint or template             | Real instance of the blueprint |
| Defines properties & methods      | Has actual data stored         |
| Exists only in code during design | Exists in memory at runtime    |
| No memory allocated for data      | Memory allocated for variables |
| One class can create many objects | Each object is unique          |

```
Car myCar = new Car();
myCar.color = "Red";
myCar.speed = 120;
```
## What will be output?
```
Animal a1 = new Animal();
Animal a2 = new Animal();
System.out.println(a2 == a1);
```
#### false
### Why?
- a1 and a2 are two different objects.
- new Animal() creates a new memory location each time.
- The == operator checks whether both references point to the same object in memory.
- Since they are created separately, they point to different memory addresses → so the result is false.

### Does a class occupy memory?
Yes — but two different kinds of memory.

- Class metadata (methods, bytecode info, static fields) is loaded into memory by the JVM/class loader when the class is loaded.

- Instance (object) memory is allocated on new for each object’s fields. So the class data exists in memory once the class is loaded; each object has its own allocated memory when created.

### Difference between declaring a reference and creating an object?
- Animal a; — declare a reference variable (no object; a holds no object yet).
- a = new Animal(); — create an object and assign its reference to a.
Declaration ≠ allocation; new does allocation.

## static
- static variables belong to the class, not the instance.
- All objects share the same static variable.
- Changing it through any object changes it for all objects.
- Only one copy exists in memory, no matter how many objects are created.
- Static variables → stored in Method Area / Class Area (JVM memory)
- final static variables are constants, shared by all objects but immutable.
- Can only directly access static variables and other static methods.
- Cannot use this keyword because there is no instance context.
### Where are static variables stored?
- Your Answer: In the Method Area (Java 7 and below) or Metaspace (Java 8+). Only one copy exists per class.
### Where are instance variables stored?
- Your Answer: On the heap, inside each object. Every new object gets its own copy.
### Public, Protected,Private

- #### Public

  The member is accessible from anywhere, both inside and outside the class.For members that need to be universally accessible by creating an instance.

- #### Private

The member is only accessible within the class itself. It is not accessible in derived/child classes or outside the class.

- #### What is protected?

- protected is an access modifier in Java.
- It controls access to variables, methods, and constructors.
- Rules:
    1. Accessible within the same class.
    2. Accessible within the same package.
    3. Accessible in subclasses even if they are in different packages.
       
## Constructor
- A constructor is a special method in a class that is automatically called when an object is created using the new keyword. Its purpose is to initialize the object.
- Name is exactly the same as the class name
- Has no return type (not even void)
- Can be overloaded
- Can have access modifiers (public, private, protected)
- If you don’t write any constructor → Java provides a default constructor automatically

  |Type|Syntax Example|,When Used|
  |----|---------------|---------|
  |No-arg / Default|public Animal() { }|When you want default values|
  |Parameterized|"public Animal(String name, int age) { ... }"|When you want to pass values at creation time|
  |Private,"Used in Singleton| Factory| Builder patterns"|To prevent direct instantiation|

  ### Constructor Overloading
 ```
  class Animal {
    String name;
    int age;
    String owner;

    public Animal() {                          // 1
        this("Unknown", 0);
    }

    public Animal(String name) {               // 2
        this(name, 0);
    }

    public Animal(String name, int age) {      // 3
        this(name, age, "No Owner");
    }

    public Animal(String name, int age, String owner) {  // 4
        this.name = name;
        this.age = age;
        this.owner = owner;
    }
}
```
### this() — Constructor Chaining
- Used to call another constructor in the same class.
- Rules:
  - Must be the first statement in the constructor
  - Prevents code duplication
```
  public class Animal {
    String name;
    int age;
    String owner;

    public Animal() {
        this("Tom", 3);                    // Calls parameterized constructor
    }

    public Animal(String name, int age) {
        this(name, age, "Jerry");          // Calls 3-param constructor
    }

    public Animal(String name, int age, String owner) {
        this.name = name;                  // Only real initialization here
        this.age = age;
        this.owner = owner;
        System.out.println("Object created: " + name);
    }
}
```
- All initialization logic in one place → DRY principle

### super() — Calling Parent Constructor
  - Every constructor calls super() implicitly if not written


|Question|Your Answer|
|-------|------------|
|Can a constructor be private?|"Yes! Used in Singleton pattern: private static final MyClass instance = new MyClass();"|
|Can constructor be static?|"No! Constructors are for objects, static is for class"|
|Can we use return in constructor?|"You can write return;, but no return type allowed"|
|What if constructor throws exception?|Object creation fails → object is not created|
|Difference between constructor and method?|"No return type, same name as class, called only with new|
|Why constructor overloading?|Flexibility — create objects with different initial data|


| Feature  | this()                                    | super()                                         |
| -------- | ----------------------------------------- | ----------------------------------------------- |
| Calls    | Another constructor in the **same class** | Constructor of **parent class**                 |
| Must be  | First statement in constructor            | First statement in constructor                  |
| Optional | Only if you want to chain constructors    | Automatically added if omitted (default no-arg) |
| Usage    | Avoid duplicate code in same class        | Initialize parent class part of object          |

## Encapsulation

It is the concept of bundling the data (attributes) and the methods (functions) that operate on that data into a single unit, typically a class.

```
class BankAccount {
    private double balance; // Private variable

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    // Public method to get the balance
    public double getBalance() {
        return balance;
    }

    // Public method to deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    // Public method to withdraw money
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Invalid withdrawal amount");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        account.deposit(500);
        account.withdraw(200);
        System.out.println("Balance: " + account.getBalance());
    }
}

```

- Method Overriding: A child class overrides a method of its parent class.

- Method Overloading (simulated): A function behaves differently based on the number or type of its arguments.


