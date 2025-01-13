# SQL Over View
SQL (Structured Query Language) is a language to operate databases; it includes Database Creation, Database Deletion, Fetching Data Rows, Modifying & Deleting Data rows, etc.SQL stands for Structured Query Language which is a computer language for storing, manipulating and retrieving data stored in a relational database. 

## How SQL Works?
There are various components included in this process. These components are -
- Query Dispatcher
- Optimization Engines
- Classic Query Engine
- SQL Query Engine, etc.

<img src="https://github.com/user-attachments/assets/959fd6bd-ddca-48a6-b371-9f81e8cc3745"/>

## What is RDBMS?

RDBMS stands for Relational Database Management System.A Relational database management system (RDBMS) is a database management system (DBMS) that is based on the relational model as introduced by E. F. Codd in 1970.

## What is a Table?
The data in an RDBMS is stored in database objects known as tables. This table is basically a collection of related data entries and it consists of numerous columns and rows.

## What is a Field?
Every table is broken up into smaller entities called fields. A field is a column in a table that is designed to maintain specific information about every record in the table.
## What is a Record or a Row?
A record is also called as a row of data is each individual entry that exists in a table.

## SQL Constraints
Constraints are the rules enforced on data columns on a table.These are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the database.

1. NOT NULL Constraint ->Ensures that a column cannot have a NULL value.
2. DEFAULT Constraint ->Provides a default value for a column when none is specified.
3. UNIQUE Key ->Ensures that all the values in a column are different.
4. PRIMARY Key ->Uniquely identifies each row/record in a database table.
5. FOREIGN Key ->Uniquely identifies a row/record in any another database table.
6. CHECK Constraint ->Ensures that all values in a column satisfy certain conditions.
7. INDEX Constraint ->Used to create and retrieve data from the database very quickly.

## Data Integrity
- Entity Integrity − This ensures that there are no duplicate rows in a table.
- Domain Integrity − Enforces valid entries for a given column by restricting the type, the format, or the range of values.
- Referential integrity − Rows cannot be deleted, which are used by other records.
- User-Defined Integrity − Enforces some specific business rules that do not fall into entity, domain or referential integrity.


## Database Normalization
Database normalization is the process of efficiently organizing data in a database.There are two reasons of this normalization process −
1. Eliminating redundant data, for example, storing the same data in more than one table.
2. Ensuring data dependencies make sense.

   
## SQL Statements
All the SQL statements require a semicolon (;) at the end of each statement. Semicolon is the standard way to separate different SQL statements which allows to include multiple SQL statements in a single line.

### SQL CREATE DATABASE Statement
To store data within a database, you first need to create it. This is necessary to individualize the data belonging to an organization.
```
CREATE DATABASE DATABSE_NAME;
```
### SQL USE Statement
Once the database is created, it needs to be used in order to start storing the data accordingly. 
```
USE DATABSE_NAME;
```

### SQL DROP DATABASE Statement
If a database is no longer necessary, you can also delete it. To delete/drop a database, use the following syntax −
```
DROP DATABASE database_name;
```

### SQL CREATE TABLE Statement
In an SQL driven database, the data is stored in a structured manner, i.e. in the form of tables. To create a table, following syntax is used -
```
CREATE TABLE table_name(
   column1 datatype,
   column2 datatype,
   column3 datatype,
   .....
   columnN datatype,
   PRIMARY KEY( one or more columns )
);
```

### SQL DESC Statement
Every table in a database has a structure of its own. To display the structure of database tables, we use the DESC statements.
```
DESC table_name;
```
### SQL INSERT INTO Statement
The SQL INSERT INTO Statement is used to insert data into database tables.
```
INSERT INTO table_name( column1, column2....columnN)
VALUES ( value1, value2....valueN);
```
### SQL SELECT Statement
In order to retrieve the result-sets of the stored data from a database table, we use the SELECT statement.
```
SELECT column1, column2....columnN FROM table_name;
```
### SQL UPDATE Statement
When the stored data in a database table is outdated and needs to be updated without having to delete the table, we use the UPDATE statement.
```
UPDATE table_name
SET column1 = value1, column2 = value2....columnN=valueN
[ WHERE  CONDITION ];
```
### SQL DELETE Statement
Without deleting the entire table from the database, you can also delete a certain part of the data by applying conditions. This is done using the DELETE FROM statement. Following is the syntax −
```
DELETE FROM table_name WHERE  {CONDITION};
```
### SQL DROP TABLE Statement
To delete a table entirely from a database when it is no longer needed,
```
DROP TABLE table_name;
```
### SQL TRUNCATE TABLE Statement
The TRUNCATE TABLE statement is implemented in SQL to delete the data of the table but not the table itself. When this SQL statement is used, the table stays in the database like an empty table. 

```
TRUNCATE TABLE table_name;
```
### SQL ALTER TABLE Statement
The ALTER TABLE statement is used to alter the structure of a table. For instance, you can add, drop, and modify the data of a column using this statement.
```
ALTER TABLE table_name 
{ADD|DROP|MODIFY} column_name {data_type};
```
### SQL DISTINCT Clause
The DISTINCT clause in a database is used to identify the non-duplicate data from a column.
```
SELECT DISTINCT column1, column2....columnN FROM   table_name;
```
### SQL WHERE Clause
The WHERE clause is used to filter rows from a table by applying a condition. 
```
SELECT column1, column2....columnN
FROM   table_name
WHERE  CONDITION;
```
### SQL AND/OR Operators
The AND/OR Operators are used to apply multiple conditions in the WHERE clause.
```
SELECT column1, column2....columnN
FROM   table_name
WHERE  CONDITION-1 {AND|OR} CONDITION-2;
```

### SQL IN Clause
The IN Operator is used to check whether the data is present in the column or not, using the WHERE clause. Following is the syntax −

```
SELECT column1, column2....columnN
FROM   table_name
WHERE  column_name IN (val-1, val-2,...val-N);
```
### SQL BETWEEN Clause
The BETWEEN Operator is used to retrieve the values from a table that fall in a certain range, using the WHERE clause. Following is the syntax −

```
SELECT column1, column2....columnN
FROM   table_name
WHERE  column_name BETWEEN val-1 AND val-2;
```
### SQL LIKE Clause
The LIKE Operator is used to retrieve the values from a table that match a certain pattern, using the WHERE clause. 
```
SELECT column1, column2....columnN
FROM   table_name
WHERE  column_name LIKE { PATTERN };
```
### SQL ORDER BY Clause
The ORDER BY Clause is used to arrange the column values in a given/specified order. Following is the syntax −
```
SELECT column1, column2....columnN
FROM   table_name
WHERE  CONDITION
ORDER BY column_name {ASC|DESC};
```
### SQL GROUP BY Clause
The GROUP BY Clause is used to group the values of a column together
```
SELECT SUM(column_name)
FROM   table_name
WHERE  CONDITION
GROUP BY column_name;
```
### SQL COUNT Function
The COUNT Function gives the number of non-null values present in the specified column.
```
SELECT COUNT(column_name)
FROM   table_name
WHERE  CONDITION;
```
### SQL HAVING Clause
The HAVING clause is also used to filter a group of rows by applying a condition. Following is the syntax −
```
SELECT SUM(column_name)
FROM   table_name
WHERE  CONDITION
GROUP BY column_name
HAVING (arithematic function condition);
```
### SQL CREATE INDEX Statement
To create an index on a database table, SQL provides the CREATE INDEX statement. Following is the syntax −
```
CREATE UNIQUE INDEX index_name
ON table_name ( column1, column2,...columnN);
```


## SQL - Data Types

Types of SQL Data Types
There are three main types of SQL data types available in any RDBMS. They are listed below −

- String
- Numeric
- Date and Time

|Data Types|Description|
|--|---|---|
|CHAR(size)|A FIXED length string (can contain letters, numbers, and special characters). The size parameter specifies the column length in characters - can be from 0 to 255. Default is 1|
|VARCHAR(size)|A VARIABLE length string (can contain letters, numbers, and special characters). The size parameter specifies the maximum column length in characters - can be from 0 to 65535|
|BINARY(size)|Equal to CHAR(), but stores binary byte strings. The size parameter specifies the column length in bytes. Default is 1|
|TINYTEXT|Holds a string with a maximum length of 255 characters|
|TEXT(size)|Holds a string with a maximum length of 65,535 bytes|
|BLOB(size)|For BLOBs (Binary Large OBjects). Holds up to 65,535 bytes of data|
|LONGTEXT|Holds a string with a maximum length of 4,294,967,295 characters|
|LONGBLOB|This represents a large BLOBs (Binary Large Objects). Holds up to 4,294,967,295 bytes of data|



## Numeric Data Types
|Data Types|Description|
|----------|-----------|
|INT| the allowable range is from -2147483648 to 2147483647|
|TINYINT|If signed, the allowable range is from -128 to 127. If unsigned, the allowable range is from 0 to 255|
|SMALLINT|If signed, the allowable range is from -32768 to 32767. If unsigned, the allowable range is from 0 to 65535.|
|MEDIUMINT|allowable range is from -8388608 to 8388607.|
|BIGINT|9223372036854775808 to 9223372036854775807|



## MySQL Date Data Types

DATE - format YYYY-MM-DD
DATETIME - format: YYYY-MM-DD HH:MI:SS
TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
YEAR - format YYYY or YY

# Mysql Constraints

SQL constraints are used to specify rules for the data in a table.Constraints are used to limit the type of data that can go into a table

- NOT NULL - Ensures that a column cannot have a NULL value

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Age int
);
-- To create a NOT NULL constraint on the "Age" column when the "Persons" table is -- -- already created, use the following SQL
ALTER TABLE Persons
MODIFY Age int NOT NULL;
```

- UNIQUE - Ensures that all values in a column are different

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    UNIQUE (ID)
);

ALTER TABLE Persons
ADD UNIQUE (ID);

-- To name a UNIQUE constraint, and to define a UNIQUE constraint on multiple columns, -- use the following SQL syntax:

ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID,LastName);

-- DROP a UNIQUE Constraint

ALTER TABLE Persons
DROP INDEX UC_Person;
```

- PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);

-- To create a PRIMARY KEY constraint on the "ID" column when the table is already -- -- created, use the following SQL:

ALTER TABLE Persons
ADD CONSTRAINT PRIMARY KEY (ID);
 -- DROP a PRIMARY KEY Constraint
ALTER TABLE Persons
DROP PRIMARY KEY;


```

- FOREIGN KEY - Prevents actions that would destroy links between tables
- CHECK - Ensures that the values in a column satisfies a specific condition

### CHECK on CREATE TABLE

The following SQL creates a CHECK constraint on the "Age" column when the "Persons" table is created. The CHECK constraint ensures that the age of a person must be 18, or older:

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);
```

To allow naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns, use the following SQL syntax:

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);
```

## CHECK on ALTER TABLE

To create a CHECK constraint on the "Age" column when the table is already created, use the following SQL:

```
ALTER TABLE Persons
ADD CHECK (Age>=18);
```

## DROP a CHECK Constraint

To drop a CHECK constraint, use the following SQL:

```
ALTER TABLE Persons
DROP CHECK CHK_PersonAge;
```

- DEFAULT - Sets a default value for a column if no value is specified

## DEFAULT on CREATE TABLE

The following SQL sets a DEFAULT value for the "City" column when the "Persons" table is created:

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255) DEFAULT 'Sandnes'
);
```

The DEFAULT constraint can also be used to insert system values, by using functions like CURRENT_DATE():

```
CREATE TABLE Orders (
    ID int NOT NULL,
    OrderNumber int NOT NULL,
    OrderDate date DEFAULT CURRENT_DATE()
);
```

- CREATE INDEX - Used to create and retrieve data from the database very quickly

## CREATE INDEX Syntax

Creates an index on a table. Duplicate values are allowed:

```
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

# MySQL AUTO INCREMENT Field

Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.By default, the starting value for AUTO_INCREMENT is 1, and it will increment by 1 for each new record.

```
CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);
```

To let the AUTO_INCREMENT sequence start with another value, use the following SQL statement:

```
ALTER TABLE Persons AUTO_INCREMENT=100;
```
