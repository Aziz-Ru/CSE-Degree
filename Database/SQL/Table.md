# CREATE Table
In RDBMS, Database tables are used to store the data in the form of some structures (fields and records). Here, a field is a column defining the type of data to be stored in a table and record is a row containing actual data. In simple words, we can say a Table is a combination of rows and columns.


## The SQL CREATE TABLE Statement
SQL provides the CREATE TABLE statement to create a new table in a given database. An SQL query to create a table must define the structure of a table. The structure consists of the name of a table and names of columns in the table with each column's data type.

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

## Verification
Once your table is created, you can check if it has been created successfully or not. You can use SQL DESC table_name command to list down the description of the table as follows:
```
DESC table_name;
```

## SQL CREATE TABLE IF NOT EXISTS
```
CREATE TABLE IF NOT EXISTS table_name(
   column1 datatype,
   column2 datatype,
   column3 datatype,
   .....
   columnN datatype,
   PRIMARY KEY( one or more columns )
);
```

## Creating a Table from an Existing Table
Instead of creating a new table every time, one can also copy an existing table and its contents including its structure, into a new table.
```
CREATE TABLE NEW_TABLE_NAME AS
SELECT [column1, column2...columnN]
FROM EXISTING_TABLE_NAME
WHERE Condition;
```

# Show Tables 
## MySQL - Listing Tables
You can use SQL SHOW TABLES statements in MySQL to list down all the tables available in a selected database.
```
SHOW TABLES
```

## Rename Table

SQL provides two ways to rename an MySQL table. You can use either SQL RENAME TABLE or ALTER TABLE statement to change a table name in MySQL RDBMS.

```
RENAME TABLE table_name TO new_table_name;
```
### The SQL ALTER TABLE Statement

```
ALTER TABLE table_name RENAME [TO|AS] new_table_name
```
# TRUNCATE TABLE
SQL provides command to TRUNCATE a table completely in one go instead of deleting table records one by one which will be very time consuming and cumbersome process.The SQL TRUNCATE TABLE command is used to empty a table. 

The basic syntax of a TRUNCATE TABLE command is as follows.
```
TRUNCATE TABLE table_name;
```

## TRUNCATE vs DELETE

|Delete|Truncate|
|---|----|
|The DELETE command in SQL removes one or more rows from a table based on the conditions specified in a WHERE Clause.|SQL's TRUNCATE command is used to remove all of the rows from a table, regardless of whether or not any conditions are met.|
|It is a DML(Data Manipulation Language) command.|It is a DDL(Data Definition Language) command.|
|There is a need to make a manual COMMIT after making changes to the DELETE command|When you use the TRUNCATE command, the modifications made to the table are committed automatically.|

# Clone Tables
There may be a situation when you need an exact copy of a table with the same columns, attributes, indexes, default values and so forth.SQL Cloning Operation allows to create the exact copy of an existing table along with its definition. There are three types of cloning possible using SQL in various RDBMS; they are listed below −

- Simple Cloning
- Shallow Cloning
- Deep Cloning

## Simple Cloning in MySQL
Simple cloning operation creates a new replica table from the existing table and copies all the records in newly created table.

```
CREATE TABLE new_table SELECT * FROM original_table;
```
## Shallow Cloning in MySQL
Shallow cloning operation creates a new replica table from the existing table but does not copy any data records into newly created table, so only new but empty table is created.

```
CREATE TABLE new_table LIKE original_table;
```
## Deep Cloning in MySQL

Deep cloning operation is a combination of simple cloning and shallow cloning. It not only copies the structure of the existing table but also its data into the newly created table. Hence, the new table will have all the contents from existing table and all the attributes including indices and the AUTO_INCREMENT definitions.

```
CREATE TABLE new_table LIKE original_table;
INSERT INTO new_table SELECT * FROM original_table;
```

# Temporary Tables
Temporary tables are pretty much what their name describes: they are the tables which are created in a database to store temporary data. We can perform SQL operations similar to the operations on permanent tables like CREATE, UPDATE, DELETE, INSERT, JOIN, etc. But these tables will be automatically deleted once the current client session is terminated.

```
CREATE TEMPORARY TABLE table_name(
   column1 datatype,
   column2 datatype,
   column3 datatype,
   .....
   columnN datatype,
   PRIMARY KEY( one or more columns )
);
```

## Dropping Temporary Tables in MySQL
```
DROP TEMPORARY TABLE table_name;
```

# ALTER TABLE
The SQL ALTER TABLE command is a part of Data Definition Language (DDL) and modifies the structure of a table.
The ALTER TABLE command can add or delete columns, create or destroy indexes, change the type of existing columns, or rename columns or the table itself.

## ALTER TABLE − ADD Column
```
ALTER TABLE table_name ADD column_name datatype;
```
## ALTER TABLE − DROP COLUMN

```
ALTER TABLE table_name DROP COLUMN column_name;
```
## ALTER TABLE − ADD PRIMARY KEY
```
ALTER TABLE table_name 
ADD CONSTRAINT constraint_name
PRIMARY KEY (column1, column2...);
```
## ALTER TABLE − DROP PRIMARY KEY
```
ALTER TABLE table_name DROP PRIMARY KEY;
```
## ALTER TABLE − ADD CONSTRAINT
```
ALTER TABLE table_name 
ADD CONSTRAINT constraint_name 
UNIQUE(column1, column2...);
```
# INSERT QUERY

## The SQL INSERT INTO Statement
The SQL INSERT INTO Statement is used to add new rows of data into a table in the database. Almost all the RDBMS provide this SQL query to add the records in database table.

```
INSERT INTO TABLE_NAME (column1, column2...columnN) 
VALUES (value1, value2...valueN);
```
# SELECT Query

SQL SELECT Statement is used to fetch the data from a database table which returns this data in the form of a table.

```
SELECT column1, column2, columnN FROM table_name;
```
# UPDATE Query

SQL UPDATE Statement is used to modify the existing records in a table. This statement is a part of Data Manipulation Language (DML), as it only modifies the data present in a table without affecting the table's structure.

```
UPDATE table_name
SET column1 = value1, column2 = value2,..., columnN = valueN
WHERE [condition];
```
# DELETE Query
SQL DELETE Statement is used to delete the records from an existing table. In order to filter the records to be deleted (or, delete particular records), we need to use the WHERE clause along with the DELETE statement.
```
DELETE FROM table_name WHERE [condition];
```

# SORTING Results
SQL ORDER BY clause is used to sort the data in ascending or descending order, based on one or more columns. By default, some databases sort the query results in an ascending order.

```
SELECT column-list 
FROM table_name 
[WHERE condition] 
[ORDER BY column1, column2, .. columnN] [ASC | DESC];
```






