# final keyword

- Used to prevent change.
- You cannot change the value once assigned.
- A method that cannot be overridden by child classes.
- A class that cannot be inherited.

```
final int x = 10;
x = 20; // ❌ error

```

```
class A {
    final void show() {}
}

class B extends A {
    void show() {} // ❌ error
}

```
