# MySQL JOINS

A JOIN clause is used to combine rows from two or more tables, based on a related column between them.

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

## LEFT JOIN

Returns all records from the left table, and the matched records from the right table

## RIGHT JOIN

Returns all records from the right table, and the matched records from the left table

## CROSS JOIN

Returns all records from both tables

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
