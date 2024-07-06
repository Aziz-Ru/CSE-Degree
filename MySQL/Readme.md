# MySQL Basic to Advance

#### Creating a database in MySQL 

`CREATE DATABASE mydb;`

#### Show list of existing databases

`SHOW databases;`

#### Using the created database mydb
`USE mydb;`

#### Creating a table in MySQL

```
CREATE TABLE mytable
(
id int unsigned NOT NULL auto_increment,
username varchar(100) NOT NULL,
email varchar(100) NOT NULL,
PRIMARY KEY (id)
);
```

####

`SHOW tables;`

#### Inserting a row into a MySQL table
```
INSERT INTO mytable ( username, email ) VALUES ( "myuser", "myuser@example.com" );
```

#### Updating a row into a MySQL table

`UPDATE mytable SET username="myuser" WHERE id=8; `

#### Deleting a row into a MySQL table

`DELETE FROM mytable WHERE id=8;`

#### Selecting rows based on conditions in MySQL

`SELECT * FROM mytable WHERE username = "myuser";`

#### Show all the ﬁelds of a table

`DESCRIBE tableName;`

####  Creating user

First, you need to create a user and then give the user permissions on certain databases/tables. While creating the
user, you also need to specify where this user can connect from.

`CREATE USER 'user'@'localhost' IDENTIFIED BY 'some_password';`

#### Adding privileges

`GRANT SELECT, INSERT, UPDATE ON databaseName.* TO 'userName'@'localhost';`

## Data Types

#### CHAR(n)
CHAR(n) is a string of a ﬁxed length of n characters. If it is CHARACTER SET utf8mb4, that means it occupies exactly
4*n bytes, regardless of what text is in it.Most use cases for CHAR(n) involve strings that contain English characters, hence should be CHARACTER SET ascii.`country_code CHAR(2) CHARACTER SET ascii;`.

#### DATE, DATETIME, TIMESTAMP, YEAR, and TIME
- The DATE datatype comprises the date but no time component. Its format is 'YYYY-MM-DD' with a range of
'1000-01-01' to '9999-12-31'.

- The DATETIME type includes the time with a format of 'YYYY-MM-DD HH:MM:SS'. It has a range from '1000-01-01
00:00:00' to '9999-12-31 23:59:59'.

- The TIMESTAMP type is an integer type comprising date and time with an eﬀective range from '1970-01-01 00:00:01'
UTC to '2038-01-19 03:14:07' UTC.

- The YEAR type represents a year and holds a range from 1901 to 2155.

#### VARCHAR(255) -- or not
The VARCHAR data type stores character strings of varying length that contain single-byte and (if the locale supports them) multibyte characters, where m is the maximum size (in bytes) of the column and r is the minimum number of bytes reserved for that column.The size of the maximum size (m) parameter of a VARCHAR column can range from 1 to 255 bytes. If you are placing an index on a VARCHAR column, the maximum size is 254 bytes. You can store character strings that are shorter, but not longer, than the m value that you specify.

#### INT as AUTO_INCREMENT
Any size of INT may be used for AUTO_INCREMENT. UNSIGNED is always appropriate.

#### Implicit / automatic casting
To make the multiplication with 2 MySQL automatically converts the string 123 into a number.

`select '123' * 2;` 

return value 246

The conversion to a number starts from left to right. If the conversion is not possible the result is 0

`select '123ABC' * 2`

return value 246

`select 'ABC123' * 2`

return value 0

#### Integer Types

|Type|Storage(Bytes)|Minimum Value(Signed)|Maximum Value(Signed)|Maximum Value(Unsigned)|
|------|------|-|-|-|
|TINYINT|1| -2^7|2^7 -1| 2^8 -1|
|SMALLINT|2| -2^15|2^15 -1| 2^16 -1|
|MEDIUMINT|3| -2^23|2^23 -1| 2^24 -1|
|INT|4| -2^31|2^31 -1| 2^32 -1|
|BIGINT|8| -2^63|2^63 -1| 2^64 -1|


#### Fixed Point Types
MySQL's DECIMAL and NUMERIC types store exact numeric data values. It is recommended to use these types to
preserve exact precision, such as for money.

- Decimal `salary DECIMAL(5,2)`
5 represents the precision and 2 represents the scale. For this example, the range of values that can be stored in
this column is -999.99 to 999.99  

## Select
SELECT is used to retrieve rows selected from one or more tables.
The DISTINCT clause after SELECT eliminates duplicate rows from the result set.

```
CREATE TABLE `car`
(
`car_id` INT UNSIGNED NOT NULL PRIMARY KEY,
`name` VARCHAR(20),
`price` DECIMAL(8,2)
);
INSERT INTO CAR (`car_id`, `name`, `price`) VALUES (1, 'Audi A1', '20000');
INSERT INTO CAR (`car_id`, `name`, `price`) VALUES (2, 'Audi A1', '15000');
INSERT INTO CAR (`car_id`, `name`, `price`) VALUES (3, 'Audi A2', '40000');
INSERT INTO CAR (`car_id`, `name`, `price`) VALUES (4, 'Audi A2', '40000');
SELECT DISTINCT `name`, `price` FROM CAR;
```
DISTINCT works across all columns to deliver the results, not individual columns. The latter is often a misconception
of new SQL developers. In short, it is the distinctness at the row-level of the result set that matters, not distinctness
at the column-level. To visualize this, look at "Audi A1" in the above result set.

#### SELECT all columns (*)
`SELECT * FROM stack;`

Best Practice Do not use * unless you are debugging or fetching the row(s) into associative arrays, otherwise
schema changes (ADD/DROP/rearrange columns) can lead to nasty application errors. Also, if you give the list of
columns you need in your result set, MySQL's query planner often can optimize the query

#### SELECT by column name
`SELECT id FROM stack;`
 
#### SELECT with LIKE (%)
- "adm" anywhere:
 `SELECT * FROM stack WHERE username LIKE "%adm%";`

- Begins with "adm":
  `SELECT * FROM stack WHERE username LIKE "adm%";`
- Ends with "adm":
  `SELECT * FROM stack WHERE username LIKE "%adm";`

#### SELECT with a LIMIT clause
`SELECT * FROM Customers ORDER BY CustomerID LIMIT 3;`
- Always use ORDER BY when using LIMIT; otherwise the rows you will get will be unpredictable.

#### SELECT with BETWEEN
You can use BETWEEN clause to replace a combination of "greater than equal AND less than equal" conditions.

`SELECT * FROM stack WHERE id >= 2 and id <= 5;`

`SELECT * FROM stack WHERE id BETWEEN 2 and 5;`

####
