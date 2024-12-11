# The MySQL LIMIT Clause

The LIMIT clause is used to specify the number of records to return.

```
SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;
```

```
select * from products where price<50.0 order by id desc  limit 3 ;
```
