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
