

# What is SQL View

A view in SQL is a virtual table that is stored in the database with an associated name. It is actually a composition of a table in the form of a predefined SQL query. A view can contain rows from an existing table (all or selected). A view can be created from one or many tables. Unless indexed, a view does not exist in a database.

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
## UPDATE View
Unlike CREATE VIEW and DROP VIEW there is no direct statement to update the records of an existing view. We can use the SQL UPDATE Statement to modify the existing records in a table or a view.

```
UPDATE view_name
SET column1 = value1, column2 = value2...., columnN = valueN
WHERE [condition];
```
