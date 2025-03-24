# Database Management System

A database management system is a collection of interrelated data and a set of programs to manage those data.

### Database Languages
-  Data Definition Language
-  Data Manipulation Language
-  Data Control Language
-  Transactional Control Language

###  Data Definition Language
DDL is the short name for Data Definition Language, which deals with database schemas and descriptions, of how the data should reside in the database.

- CREATE: to create a database and its objects like (table, index, views, store procedure, function, and triggers)
- ALTER: alters the structure of the existing database
- DROP: delete objects from the database
- TRUNCATE: remove all records from a table, including all spaces allocated for the records are removed
- COMMENT: add comments to the data dictionary
- RENAME: rename an object

### Data Manipulation Language (DML)

DML is the short name for Data Manipulation Language which deals with data manipulation and includes most common SQL statements such SELECT, INSERT, UPDATE, DELETE, etc., and it is used to store, modify, retrieve, delete and update data in a database.

-  SELECT: retrieve data from a database
-  INSERT: insert data into a table
-  UPDATE: updates existing data within a table
-  DELETE: Delete all records from a database table
-  MERGE: UPSERT operation (insert or update)
-  CALL: call a PL/SQL or Java subprogram
-  EXPLAIN PLAN: interpretation of the data access path
-  LOCK TABLE: concurrency Control

### Transactional Control Language (TCL)

TCL is short for Transactional Control Language which acts as an manager for all types of transactional data and all transactions. Some of the command of TCL are

-   Roll Back: Used to cancel  or Undo changes made in the database 
-   Commit: It is used to apply or save changes in the database
-   Save Point: It is used to save the data on the temporary basis in the database

## Diffrence Between DBMS and File System
- Redundancy of Data
- Inconsistency
- Difficult DaData Independence

Data independence means a change of data at one level should not affect another level.ta Access
- Unauthorized Access
- No Concurrent Access
- Integrity Problems
- Automicity Problems

## View of Data
A major purpose of a database system is to provide users with an abstract view of the data.

Physical level. The lowest level of abstraction describes how the data are actually stored. The physical level describes complex low-level data structures in detail.

Logical level. The next-higher level of abstraction describes what data are stored in the database, and what relationships exist among those data.

## Data Independence

Data independence means a change of data at one level should not affect another level.

View level. The highest level of abstraction describes only part of the entire database.

The collection of information stored in the database at a particular moment is called an instance
of the database. 

The overall design of the database is called the database schema.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20231031152106/Data-Abstraction-and-Data-Independence.webp"/>

## ER Model
The Entity Relationship Model is a model for identifying entities to be represented in the database and representation of how those entities are related.

An entity is a “thing” or “object” in the real world that is distinguishable from all other objects.

#### Attributes
An entity set is a set of entities of the same type that share the same properties, or attributes.

**A relationship may also have attributes called descriptive attributes.**

- Simple and composite attributes.Simple attributes are not divided in subparts. Composite attributes are divided into subparts.
  
- Single-valued and multivalued attributes. An attribute that can have only one value for a given entity that is called Single-valued attribute. An attribute that can have more than one value for a single entity that is called Multivalued attributes.
  
- Derived attribute. The value for this type of attribute can be derived from the values of other related attributes or entities.

#### Constraint 
constraint is a rule or restriction applied to database tables to ensure the integrity, accuracy, and validity of the data.

- ER diagrams represent the E-R model in a database, making them easy to convert into relations (tables).
- ER diagrams provide the purpose of real-world modeling of objects which makes them intently useful.

## Symbols Used in ER Model 

  -  Rectangles: Rectangles represent Entities in the ER Model.
  -  Ellipses: Ellipses represent Attributes in the ER Model.
  -  Diamond: Diamonds represent Relationships among Entities.
  -  Lines: Lines represent attributes to entities and entity sets with other relationship types.
  -  Double Ellipse: Double Ellipses represent Multi-Valued Attributes.
  -  Double Rectangle: Double Rectangle represents a Weak Entity.
  -  Dashed lines link attributes of a relationship set to the relationship set.
  -  Double lines indicate total participation of an entity in a relationship set.
  -  Double diamonds represent identifying relationship sets linked to weak
  -  entity sets (we discuss identifying relationship sets and weak entity sets later,

## Mapping Cardinalities

Mapping cardinalities (or cardinality ratios) define the number of entities in one entity set that can be associated with entities in another entity set through a relationship.

An entity set that does not have sufficient attributes to form a primary key is termed a weak entity set.

An entity set that has a primary key is termed a strong entity set.

