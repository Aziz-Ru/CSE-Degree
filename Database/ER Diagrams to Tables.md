# ER Diagrams to Tables

-  Each entity → Table.
-  Each relationship → Foreign key or new table (for M:N).
-  Weak entities → Table with composite primary key.
-  Multivalued attributes → Separate table.
-  Composite attributes → Break down into columns.
-  Derived attributes → Compute during queries.
-  Generalization/Specialization → Tables based on design choice.

## Binary Relationship With Cardinality Ratio 1:1
<img src="https://www.gatevidyalay.com/wp-content/uploads/2018/04/ER-diagrams-to-Tables-Rule-05-Case-04.png?ezimgfmt=ng:webp/ngcb1"/>


Here, two tables will be required. Either combine ‘R’ with ‘A’ or ‘B’

 
Way-01:

    AR ( a1 , a2 , b1 )
    B ( b1 , b2 )

 

Way-02:

    A ( a1 , a2 )
    BR ( a1 , b1 , b2 )


## Binary Relationship With Cardinality Ratio 1:n


<img src="https://www.gatevidyalay.com/wp-content/uploads/2018/04/ER-diagrams-to-Tables-Rule-05-Case-02.png?ezimgfmt=ng:webp/ngcb1"/>

 two tables will be required-

    A ( a1 , a2 )
    BR ( a1 , b1 , b2 )

NOTE- Here, combined table will be drawn for the entity set B and relationship set R.

## Binary Relationship With Cardinality Ratio m:1
<img src="https://www.gatevidyalay.com/wp-content/uploads/2018/04/ER-diagrams-to-Tables-Rule-05-Case-03.png?ezimgfmt=ng:webp/ngcb1"/>

 two tables will be required-

    AR ( a1 , a2 , b1 )
    B ( b1 , b2 )

## Binary Relationship With Cardinality Ratio m:n

<img src="https://www.gatevidyalay.com/wp-content/uploads/2018/04/ER-diagrams-to-Tables-Rule-05-Case-01.png?ezimgfmt=ng:webp/ngcb1"/>

three tables will be required-

    A ( a1 , a2 )
    R ( a1 , b1 )
    B ( b1 , b2 )



