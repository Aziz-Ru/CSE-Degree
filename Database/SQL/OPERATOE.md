# Operator

## LIKE OPERATOR

The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

The percent sign (%) represents zero, one, or multiple characters
The underscore sign (\_) represents one, single character

```
SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;

select * from products where product_name like "a%";
```

## IN Operator

The IN operator allows you to specify multiple values in a WHERE clause.

```
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

## BETWEEN Operator

The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.

The BETWEEN operator is inclusive: begin and end values are included.

```
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```
