# Normalization

## 1 NF

A table is in 1 NF if: 

  -  There are only Single Valued Attributes.
  -  Attribute Domain does not change.
  -  There is a unique name for every Attribute/Column.
  -  The order in which data is stored does not matter.


## 2NF

A relation that is in First Normal Form and every non-primary-key attribute is fully functionally dependent on the primary key, then the relation is in Second Normal Form (2NF).

If the proper subset of the candidate key determines a non-prime attribute, it is called partial dependency . The normalization of 1NF relations to 2NF involves the removal of partial dependencies
