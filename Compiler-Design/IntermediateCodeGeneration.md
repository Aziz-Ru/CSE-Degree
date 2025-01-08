# Intermediate Code Generation

In the analysis-synthesis model of a compiler, the front end of a compiler translates a source program into an independent intermediate code, then the back end of the compiler uses this intermediate code to generate the target code (which can be understood by the machine).

- If a compiler translates the source language to its target machine language without having the option for generating intermediate code, then for each new machine, a full native compiler is required.
- Intermediate code eliminates the need of a new full compiler for every unique machine by keeping the analysis portion same for all the compilers.
- The second part of compiler, synthesis, is changed according to the target machine.
- It becomes easier to apply the source code modifications to improve code performance by applying code optimization techniques on the intermediate code.

## Three-Address Code
A three address statement involves a maximum of three references, consisting of two for operands and one for the result.A three-address code has at most three address locations to calculate the expression. 

There are 3 ways to represent a Three-Address Code in compiler design: 
i) Quadruples
ii) Triples
iii) Indirect  Triples

Example-1: Convert the expression a * – (b + c) into three address codes.

```
t1=b+c
t2=uminus t1
t3 = a*t2

```

Example-2: Convert the expression a = b * – c + b * – c.  into three address codes.
```
t1 = uminus c   (Unary minus operation on c)
t2 = b * t1 
t3 = uminus c (Another unary minus operation on c)
t4 = b * t3 
t5 = t2 + t4 
a = t5  (Assignment of t5 to a)
```



## Quadruples
Each instruction in quadruples presentation is divided into four fields: operator, arg1, arg2, and result.

For Example 2:

|#|Op|Arg1|Arg2|Result|
|-|-|-|-|-|
|(0)|uminus||c|t1|
|(1)|*|b|t1|t2|
|(2)|uminus||c|t3|
|(3)|*|b|t3|t4|
|(4)|+|t2|t4|t5|
|(5)|=|t5||a|

## Triples

This representation doesn’t make use of extra temporary variable to represent a single operation instead when a reference to another triple’s value is needed, a pointer to that triple is used. 

For Example 2:

|#|Op|arg1|arg2|
|-|-|-|-|
|(0)|uminus||c|
|(1)|*|b|(0)|
|(2)|uminus||c|
|(3)|*|b|(2)|
|(4)|+|(1)|(3)|
|(5)|=|a|(4)|


## Indirect Triples
This representation is an enhancement over triples representation. It uses pointers instead of position to store results.









