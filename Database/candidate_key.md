# Candidate Key

A minimal super key is called as a candidate key.

  - It is possible to have multiple candidate keys.
  - There exists no general formula to find the total number of candidate keys of a given relation.
  
  We can determine the candidate keys of a given relation using the following steps**

### Step-01
  - Determine all essential attributes of the given relation.
  - Essential attributes are those attributes which are not present on RHS of any functional dependency.
  - Essential attributes are always a part of every candidate key.
  - This is because they can not be determined by other attributes.
  - The remaining attributes of the relation are non-essential attributes.
  - This is because they can be determined by using essential attributes.
    
  #### Examaple
  
  Let R(A, B, C, D, E, F) be a relation scheme with the following functional dependencies-
  ```
A → B

C → D

D → E
```
Here, the attributes which are not present on RHS of any functional dependency are A, C and F.

So, essential attributes are- A, C and F.

### Case-01

If all essential attributes together can determine all remaining non-essential attributes, then-
  
  - The combination of essential attributes is the candidate key.
  - It is the only possible candidate key.


### Example
Let R = (A, B, C, D, E) be a relation scheme with the following dependencies-

```
AB → C

C → D

B → E
```
Determine the total number of candidate keys and super keys.

**Solve**
```
{ AB }+

= { A , B }

= { A , B , C }                     ( Using AB → C )
Advertisements
Ezoic

= { A , B , C , D }               ( Using C → D )

= { A , B , C , D , E }          ( Using B → E )
```
Thus, AB is the only possible candidate key of the relation.

There are total 5 attributes in the given relation of which

  -  There are 2 essential attributes- A and B.
  -  Remaining 3 attributes are non-essential attributes.
  -  Essential attributes will be definitely present in every key.
  -  Non-essential attributes may or may not be taken in every super key.

Thus, total number of super keys possible = 8.
    









  

