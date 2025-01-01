# Singleton Pattern

The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance.

1.Make the constructor of the class private, so absolutely no one from outside the class can ever instantiate that class.
2. Create a static property named $instance, which will contain an instance of itself—that is, in our Config class, the $instance property will contain an instance of the class Config.
3. Create a static method, getInstance, which will check if $instance is null, and if it is, it will create a new instance using the private constructor. Either way, it will return the $instance property.

```
public class Singleton {
    private static volatile Singleton instance; // volatile ensures proper synchronization

    private Singleton() {
        // Private constructor to prevent instantiation
    }

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

```
