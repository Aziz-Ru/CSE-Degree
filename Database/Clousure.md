# Closure
The set of all those attributes which can be functionally determined from an attribute set is called as a closure of that attribute set.Closure of attribute set {X} is denoted as {X}+.


### step-1
Add the attributes contained in the attribute set for which closure is being calculated to the result set.

### step-2
Recursively add the attributes to the result set which can be functionally determined from the attributes already contained in the result set.

Consider a relation R ( A , B , C , D , E , F , G ) with the functional dependencies-
```
A → BC

BC → DE

D → F

CF → G
```
 

Now, let us find the closure of some attributes and attribute sets-

 
Closure of attribute A-

 
```
A+   = { A }

= { A , B , C }                          ( Using A → BC )

= { A , B , C , D , E }               ( Using BC → DE )

= { A , B , C , D , E , F }          ( Using D → F )

= { A , B , C , D , E , F , G }    ( Using CF → G )
```
Thus,
```
A+ = { A , B , C , D , E , F , G }
```

## Finding the Keys Using Closure-

### Super Key-

  If the closure result of an attribute set contains all the attributes of the relation, then that attribute set is called as a super key of that relation.
    Thus, we can say-“The closure of a super key is the entire relation schema.”


### Candidate Key-
If there exists no subset of an attribute set whose closure contains all the attributes of the relation, then that attribute set is called as a candidate key of that relation

