# SQL JOINS

The SQL Join clause is used to combine data from two or more tables in a database. When the related data is stored across multiple tables, joins help you to retrieve records combining the fields from these tables using their foreign keys.

Following is the Basic Syntax:
```
SELECT column_name(s)
FROM table1
JOIN table2;
```

## NATURAL JOIN

A natural join combines rows from two tables based on a common column with the same name in both tables.

## INNER JOIN

Returns records that have matching values in both tables

```
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

```
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
```
### Inner Join with WHERE Clause
Clauses in SQL work with the purpose of applying constraints while retrieving data using SQL queries. The WHERE clause is used to filter the data from tables. This clause specifies a condition to retrieve only those records that satisfy it.
```
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;
```


## LEFT JOIN

Returns all records from the left table, and the matched records from the right table

## RIGHT JOIN

Returns all records from the right table, and the matched records from the left table

## CROSS JOIN

An SQL Cross Join is a basic type of inner join that is used to retrieve the Cartesian product (or cross product) of two individual tables. That means, this join will combine each row of the first table with each row of second table 
```
SELECT column_name(s)
FROM table1
CROSS JOIN table2;
```

### Joining Multiple Tables with Cross Join
```
SELECT column_name(s)
FROM table1
CROSS JOIN table2
CROSS JOIN table3
CROSS JOIN table4
....
....
....
CROSS JOIN tableN;
```

## MySQL Self Join

```
SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;
```

## GROUP BY

The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.

```
  select count(id)
  from students
  group by class_id;
```
