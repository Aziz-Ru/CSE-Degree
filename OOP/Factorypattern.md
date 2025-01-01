# Factory Pattern
The Factory Pattern is a creational design pattern used in software development to create objects without specifying the exact class of object that will be created. 


```
// Step 1: Define an interface or abstract class
interface Shape {
    void draw();
}

// Step 2: Implement concrete classes
class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing a Circle");
    }
}

class Square implements Shape {
    public void draw() {
        System.out.println("Drawing a Square");
    }
}

// Step 3: Create the Factory Class
class ShapeFactory {
    public static Shape getShape(String shapeType) {
        if (shapeType == null) {
            return null;
        }
        switch (shapeType.toLowerCase()) {
            case "circle":
                return new Circle();
            case "square":
                return new Square();
            default:
                return null;
        }
    }
}

// Step 4: Use the Factory in the Client Code
public class Main {
    public static void main(String[] args) {
        Shape circle = ShapeFactory.getShape("circle");
        circle.draw(); // Output: Drawing a Circle

        Shape square = ShapeFactory.getShape("square");
        square.draw(); // Output: Drawing a Square
    }
}

```
