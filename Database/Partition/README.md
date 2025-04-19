# Partition

Partition is the idea here is break the table down to smaller peice so we know which which tablw we work with instead of a large set of rules.

Let a table has 1 M rows , we split it into 5 table.

## Vertical Vs Horizontal Partitioning

1. Horizontal partitioning splits row into partition range or list.
2. Vertical partitioning splits column partitions large column that you can store in a slow access drive in it.

## Partioning Types

1. By Range
2. By List
3. By Hash

## Diffrence between Partion and Sharding

- HP splits big table into multiple table in the same database ,so client agnostic.
- Sharding splits big table into multiple table into multiple table across multiple database;
- Hp Table name changes
- Sharding Database Server Changes

# Example

Creating a table 10 M Rows

```
create table grade_org(id serial,g int not null);
insert into grade_org select floor (random()*100) from generate_series(0,10000000);
```

Let It split into 5 Table

#### Creating main table

```
create table grade_part(id serial ,g int not null) partition by range(g);

```

#### Creating splits table

```
create table g0020 (like grade_part including indexes);
create table g2040 (like grade_part including indexes);
create table g4060 (like grade_part including indexes);
create table g6080 (like grade_part including indexes);
create table g80100 (like grade_part including indexes);
```

## Attch split table into main table

```
alter table grade_part attach partition g0020 for values from (0) to (20);
alter table grade_part attach partition g2040 for values from (20) to (40);
alter table grade_part attach partition g4060 for values from (40) to (60);
alter table grade_part attach partition g6080 for values from (60) to (80);
alter table grade_part attach partition g80100 for values from (80) to (100);
```

## Insert Data

```
insert into grade_part select * from grades;
```
