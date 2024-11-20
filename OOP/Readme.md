## OOP


Objects are representations of real-life elements. Each object has a set of attributes
that differentiates it from the rest of the objects of the same class, and is capable of a
set of actions. A class is the definition of what an object looks like and what it can do,
like a pattern for objects.

### Public, Protected,Private

- #### Public
  
  The member is accessible from anywhere, both inside and outside the class.For members that need to be universally accessible.

- #### Private

The member is only accessible within the class itself. It is not accessible in derived/child classes or outside the class.

- #### protected

The member is accessible within the class and its derived/child classes, but not outside the class.
protected properties in object-oriented programming are accessible to child classes through inheritance, but not directly accessible via objects.

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