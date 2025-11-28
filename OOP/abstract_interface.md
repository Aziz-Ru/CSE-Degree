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




