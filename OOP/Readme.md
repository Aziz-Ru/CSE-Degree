## OOP
Object-oriented programming aims to implement real-world entities like inheritance, hiding, polymorphism, etc. in programming. The main aim of OOPs is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.

Objects are representations of real-life elements. Each object has a set of attributes that differentiates it from the rest of the objects of the same class, and is capable of a set of actions. A class is the definition of what an object looks like and what it can do, like a pattern for objects.

## Class
A Class is a user-defined blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type. Using classes, you can create multiple objects with the same behavior instead of writing their code multiple times. 
This includes classes for objects occurring more than once in your code. In general, class declarations can include these components in order: 

- Modifiers: A class can be public or have default access (Refer to this for details).
- Class name: The class name should begin with the initial letter capitalized by convention.
- Body: The class body is surrounded by braces, { }.

### Public, Protected,Private

- #### Public

  The member is accessible from anywhere, both inside and outside the class.For members that need to be universally accessible by creating an instance.

- #### Private

The member is only accessible within the class itself. It is not accessible in derived/child classes or outside the class.

- #### protected

The member is accessible within the class and its derived/child classes, but not outside the class. protected properties in object-oriented programming are accessible to child classes through inheritance, but not directly accessible via objects.protected = visible inside the same package + visible to subclasses (even in other packages).

That means:

1. If you are in the same package, protected looks almost like public. You can access it through an instance, no problem.

2. If you are in a different package, you can access a protected member only if your class extends the original class.

## Static properties and methods

static keyword is used to define members (variables or methods) that belong to the class rather than any specific instance of the class

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

