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

## Problems

<img src="https://www.gatevidyalay.com/wp-content/uploads/2018/06/ER-Diagrams-to-Tables-Problem-05.png?ezimgfmt=ng:webp/ngcb1"/>

Applying the rules that we have learnt, minimum 6 tables will be required-

    Account (Ac_no , Balance , b_name)
    Branch (b_name , b_city , Assets)
    Loan (L_no , Amt , b_name)
    Borrower (C_name , L_no)
    Customer (C_name , C_street , C_city)
    Depositor (C_name , Ac_no)


Find the minimum number of tables required to represent the given ER diagram in relational model-

<imd src="https://www.gatevidyalay.com/wp-content/uploads/2018/06/ER-Diagrams-to-Tables-Problem-03.png?ezimgfmt=ng:webp/ngcb1"/>

Applying the rules, minimum 5 tables will be required-

    BR1R4R5 (b1 , b2 , a1 , c1 , d1)
    A (a1 , a2)
    R2 (a1 , c1)
    CR3 (c1 , c2 , d1)
    D (d1 , d2)
