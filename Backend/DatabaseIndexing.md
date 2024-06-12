## Indexing in Databases 

Indexing improves database performance by minimizing the number of disc visits required to fulfill a query. It is a data structure technique used to locate and quickly access data in databases. Several database fields are used to generate indexes. The main key or candidate key of the table is duplicated in the first column, which is the Search key. To speed up data retrieval, the values are also kept in sorted order. It should be highlighted that sorting the data is not required. The second column is the Data Reference or Pointer which contains a set of pointers holding the address of the disk block where that particular key value can be found.

`explain analyze select * from Student where ROLL=3;`



If you need only a single table row, an index scan is much faster than a sequential scan. If you need the whole table, a sequential scan is faster than an index scan.
