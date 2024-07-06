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


####
####
####
