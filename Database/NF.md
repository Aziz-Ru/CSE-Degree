# Normalization

Database normalization is the process of organizing the attributes of the database to reduce or eliminate data redundancy

## 1 NF

A table is in 1 NF if: 

  -  There are only Single Valued Attributes.
  -  Attribute Domain does not change.
  -  There is a unique name for every Attribute/Column.
  -  The order in which data is stored does not matter.


## 2NF
```
A relation that is in First Normal Form and every non-primary-key attribute is fully functionally dependent on the primary key, then the relation is in Second Normal Form (2NF).
```
### Partial Dependenies
```
If the proper subset of the candidate key determines a non-prime attribute, it is called partial dependency .
The normalization of 1NF relations to 2NF involves the removal of partial dependencies

In other words,

A → B is called a partial dependency if and only if-

    A is a subset of some candidate key
    B is a non-prime attribute.

If any one condition fails, then it will not be a partial dependency.

A partial dependency occurs if a non-prime attribute depends on a part of a composite primary key.
```

**Cnadidate key determine Non prime atributes that is ok. But proper subset of candidate key determine the non prime attributes that is called partial dependency**

#### Partial dependency condition

_LHS should be proper subset of candidate key and RSH shuld be non-prime attributes_

### Rules of checking 2NF
- Finding All Candiate key .
- if candidate key is composite key check individual they are candidate key or not.
- Now check if ck attrbute are on RSH then there become multiole Candidate key
- Prime attribute set
- Non Prime attributes set
- check prime attrtibute can determine non prime attribute or not

## 3NF

 A relation is in the third normal form, if there is no transitive dependency for non-prime attributes as well as it is in the second normal form. A relation is in 3NF if at least one of the following conditions holds in every non-trivial function dependency X –> Y.

    X is a super key.
    Y is a prime attribute (each element of Y is part of some candidate key).

1. Must be 2NF
2. No Transivity dependency in the table non-prime attributes can not determine non prime attribute.

- For Each FD LHS must be candidate key or super key  or RHS prime attribute.
#### Example

```
Consider a relation- R ( A , B , C , D , E ) with functional dependencies-

A → BC

CD → E

B → D

E → A

The possible candidate keys for this relation are-

A , E , CD , BC

 

From here,

    Prime attributes = { A , B , C , D , E }
    There are no non-prime attributes
Thus, we conclude that the given relation is in 3NF.
```
## BCNF

  -  Relation already exists in 3NF.
  -  For each non-trivial functional dependency A → B, A is a super key of the relation.
```
Consider a relation- R ( A , B , C ) with the functional dependencies-

A → B

B → C

C → A

The possible candidate keys for this relation are-

A , B , C

Now, we can observe that RHS of each given functional dependency is a candidate key.

Thus, we conclude that the given relation is in BCNF.
```

## 4NF
1.It should be in the Boyce-Codd Normal Form (BCNF).
2. The table should not have any Multi-valued Dependency.

## 5NF
1. R should be already in 4NF. 
2. It cannot be further non loss decomposed (join dependency).


## Dependency Preserving Decomposition 
Dependency Preserving Decomposition is a property of database normalization where the decomposition of a relation into smaller relations ensures that the original set of functional dependencies (FDs) can still be enforced without the need to join the decomposed relations.

Let a relation R (A, B, C, D ) and functional dependency {AB –> C, C –> D, D –> A}. Relation R is decomposed into R1( A, B, C) and R2(C, D). Check whether decomposition is dependency preserving or not. 

```
R1(A, B, C) and R2(C, D)

Let us find closure of F1 and F2
To find closure of F1, consider all combination of
ABC. i.e., find closure of A, B, C, AB, BC and AC
Note ABC is not considered as it is always ABC 

closure(A) = { A }  // Trivial
closure(B) = { B }  // Trivial
closure(C) = {C, A, D} but D can't be in closure as D is not present R1.
           = {C, A}
C--> A   // Removing C from right side as it is trivial attribute

closure(AB) = {A, B, C, D}
            = {A, B, C}
AB --> C  // Removing AB from right side as these are trivial attributes

closure(BC) = {B, C, D, A}
            = {A, B, C}
BC --> A  // Removing BC from right side as these are trivial attributes

closure(AC) = {A, C, D}
NULL SET


F1 {C--> A, AB --> C, BC --> A}.
Similarly F2 { C--> D }
In the original Relation Dependency { AB --> C , C --> D , D --> A}.
AB --> C is present in F1.
C --> D is present in F2.
D --> A is not preserved.

F1 U F2 is a subset of F. So given decomposition is not dependency preserving
```
## Lossless join
Lossless join decomposition is a decomposition of a relation R into relations R1, and R2 such that if we perform a natural join of relation R1 and R2, it will return the original relation R. This is effective in removing redundancy from databases while preserving the original data. This is effective in removing redundancy from databases while preserving the original data.

```
Decomposition is lossy if R1 ⋈ R2 ⊃ R
Decomposition is lossless if R1 ⋈ R2 = R
```

**Only 1NF,2NF,3NF, and BCNF are valid for lossless join decomposition.**




