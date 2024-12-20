# ER DIAGRAM
ER diagram or Entity Relationship diagram is a conceptual model that gives the graphical representation of the logical structure of the database.
It shows all the constraints and relationships that exist among the different components.

## Components of ER diagram
  -  Entity Sets
  -  Attributes
  -  Relationship Set

## Entity Sets
An entity set is a set of same type of entities.

 - Strong Entity Set-
    A strong entity set possess its own primary key.
    It is represented using a single rectangle.
   
### Symbols
-  A single rectangle is used for representing a strong entity set.
-  A diamond symbol is used for representing the relationship that exists between two strong entity sets.
-  A single line is used for representing the connection of the strong entity set with the relationship set.
-  A double line is used for representing the total participation of an entity set with the relationship set.
-  Total participation may or may not exist in the relationship.

 - Weak Entity Set-
    A weak entity set do not possess its own primary key.
    It is represented using a double rectangle.
   
   - A weak entity set is an entity set that does not contain sufficient attributes to uniquely identify its entities.
   - In other words, a primary key does not exist for a weak entity set.
   - However, it contains a partial key called as a discriminator.
   - Discriminator can identify a group of entities from the entity set.
   - Discriminator is represented by underlining with a dashed line.

## Relationship set
   Relationship defines an association among several entities.
   A relationship set is a set of same type of relationships.

   ```
  Degree of a relationship set = Number of entity sets participating in a relationship set
  ```
 There are 4 types of relationship set
    - Unary relationship set: Unary relationship set is a relationship set where only one entity set participates in a relationship set.
    - Binary relationship set:Binary relationship set is a relationship set where two entity sets participate in a relationship set.
    - Ternary relationship set:Ternary relationship set is a relationship set where three entity sets participate in a relationship set.
    - N-ary relationship set
    
   #### Strong Relationship Set-

-    A strong relationship exists between two strong entity sets.
-    It is represented using a diamond symbol.

  #### Weak Relationship Set-
  
  - A weak or identifying relationship exists between the strong and weak entity set.
  - It is represented using a double diamond symbol.
    
## Attributes
Attributes are the properties which describes the entities of an entity set.There are several types of attributes.

## Participation Constraints
Participation constraint defines the least number of relationship instances in which an entity has to necessarily participate.

There are two types of participation constraints-
- Partial participation:Partial participation is represented using a single line between the entity set and relationship set.

- Total participation:Total participation is represented using a double line between the entity set and relationship set.

##  Specialization and Generalization-

  Generalization is a process of forming a generalized super class by extracting the common characteristics from two or more classes.
  
  Specialization is a reverse process of generalization where a super class is divided into sub classes by assigning the specific characteristics of sub classes to them.

    
