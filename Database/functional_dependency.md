# Functional Dependency

A dependency function (FD) is a database constraint that determines the relationship of one attribute to another in a database management system (DBMS).

## Types Of Functional Dependencies-

1.Trivial Functional Dependencies: A functional dependency X → Y is said to be trivial if and only if Y ⊆ X.
2. Non-trivial Functional Dependencies:A functional dependency X → Y is said to be non-trivial if and only if Y ⊄ X.


## Inference Rules

### Reflexivity-

If B is a subset of A, then A → B always holds.
 
### Transitivity-

If A → B and B → C, then A → C always holds.

### Augmentation-

If A → B, then AC → BC always holds.

 
### Decomposition-

If A → BC, then A → B and A → C always holds.

 
### Composition-

If A → B and C → D, then AC → BD always holds.

 
### Additive-

If A → B and A → C, then A → BC always holds.


