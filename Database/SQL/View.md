

# Mysql Views

In SQL, a view is a virtual table based on the result-set of an SQL statement.**A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.**a virtual table that is based on the result of a SELECT query.**: A view doesn't store data itself; it displays data stored in one or more tables based on a query**

**Views can restrict the data that a user can access. For example, you can create a view that only shows certain columns or rows, without granting direct access to the underlying tables.**

## CREATE VIEW Syntax
```
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

## DROP VIEW Syntax
```
DROP VIEW view_name;
```

