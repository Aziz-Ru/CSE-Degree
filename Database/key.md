# Keys

A key is a set of attributes that can identify each tuple uniquely in the given relation.

There are 10 diffrenet kinds of key

  1. Super key
  2. Candidate key
  3. Primary key
  4. Alternate key
  5. Foreign key
  6. Partial key
  7. Composite key
  8. Unique key
  9. Surrogate key
  10. Secondary key
    
### Super key
A super key is a set of attributes that can identify each tuple uniquely in the given relation.
Thus, a super key may consist of any number of attributes.

### Candidate key
A minimal super key is called as a candidate key.
- All the attributes in a candidate key are sufficient as well as necessary to identify each tuple uniquely.
- Removing any attribute from the candidate key fails in identifying each tuple uniquely.
- The value of candidate key must always be unique.
- The value of candidate key can never be NULL.
- It is possible to have multiple candidate keys in a relation.
- Those attributes which appears in some candidate key are called as prime attributes.

 ### Primary Key
 A primary key is a candidate key that the database designer selects while designing the database.

  -  The value of primary key can never be NULL.
  -  The value of primary key must always be unique.
  -  The values of primary key can never be changed i.e. no updation is possible.
  -  The value of primary key must be assigned when inserting a record.
  - A relation is allowed  to have only one primary key.
    
