# What is Coupling and Cohesion?

## Coupling
Coupling refers to the degree of interdependence between software modules. A good software will have low coupling. 


- High coupling means that modules are closely connected and changes in one module may affect other modules.

- Low coupling means that modules are independent, and changes in one module have little impact on other modules.

### Data Coupling
If the dependency between the modules is based on the fact that they communicate by passing only data, then the modules are said to be data coupled

### Stamp Coupling 
In stamp coupling, the complete data structure is passed from one module to another module.

### Control coupling
Two modules are called control-coupled if one of them decides the function of the other module or changes its flow of execution.

### Common coupling
When multiple modules have read and write access to some global data, it is called common or global coupling.

### Content coupling
When a module can directly access or modify or refer to the content of another module, it is called content level coupling.




## Cohesion

Cohesion is a measure that defines the degree of intra-dependability within elements of a module.A good software design will have high cohesion.

- High cohesion means that elements are closely related and focused on a single purpose
- low cohesion means that elements are loosely related and serve multiple purposes.

Both coupling and cohesion are important factors in determining the maintainability, scalability, and reliability of a software system.

**low coupling and high cohesion make a system easier to maintain and improve.**

### Co-incidental cohesion

It is unplanned and random cohesion, which might be the result of breaking the program into smaller modules for the sake of modularization.

### Logical cohesion

When logically categorized elements are put together into a module, it is called logical cohesion.The elements are logically related and not functionally.The elements are not related(unrelated). The elements have no conceptual relationship other than location in source code. 

### Temporal Cohesion
When elements of module are organized such that they are processed at a similar point in time, it is called temporal cohesion.
The elements are related by their timing involved. 

### Procedural cohesion

When elements of module are grouped together, which are executed sequentially in order to perform a task, it is called procedural cohesion.
Elements of procedural cohesion ensure the order of execution.

### Communicational cohesion

When elements of module are grouped together, which are executed sequentially and work on same data (information), it is called communicational cohesion.
Two elements operate on the same input data or contribute towards the same output data.

### Sequential cohesion 
When elements of module are grouped because the output of one element serves as input to another and so on, it is called sequential cohesion.

### Functional cohesion
It is considered to be the highest degree of cohesion, and it is highly
expected.
