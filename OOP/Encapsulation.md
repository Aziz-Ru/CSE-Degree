
Encapsulation refers to the bundling of data (variables) and methods (functions) that operate on that data into a single unit or class.
Additionally, it restricts direct access to some of an object's components, which helps protect the integrity of the data and ensures that
it is only modified in a controlled way.In simple terms, encapsulation is the concept of hiding the internal state of an object and only
allowing access to it through well-defined methods (or properties).

1.Private Fields: You define the fields (variables) of a class as private, so that they cannot be accessed directly from outside the class.
2.Public Methods (Getters and Setters): You provide public methods to control access to the private fields. These methods are commonly known as getters and setters. Getters allow reading the values of fields, while setters control how fields are modified.
3.Data Integrity: Encapsulation helps ensure that the object's data remains in a valid state by enforcing rules when modifying the fields.


```
   class Person
    {
        private string? name; //field
        public string Name{
            //property
            get {return name!;}
            set {name=value;}
        }




    }

```
