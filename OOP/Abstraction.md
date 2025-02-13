# Abstraction

Hiding the implementation exposing only feature.

An abstract class is a class that cannot be instantiated directly. It may contain both abstract methods (without implementation) and concrete methods (with implementation). 

## Abstract class
It is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).

## Abstract method

It can only be used in an abstract class, and it does not have a body. The body is provided by the derived class (inherited from).


```
public abstract class Vehicle
{
    public string Brand { get; set; }

    public abstract void Start(); // Abstract method without implementation

    public void Stop() // Concrete method with implementation
    {
        Console.WriteLine("Vehicle stopped");
    }
}

public class Car : Vehicle
{
    public override void Start() // Implementing abstract method
    {
        Console.WriteLine("Car started");
    }
}

public class Bike : Vehicle
{
    public override void Start() // Implementing abstract method
    {
        Console.WriteLine("Bike started");
    }
}

```
