# Semantic Analysis
Semantic Analysis is the third phase of Compiler. Semantic Analysis makes sure that declarations and statements of program are semantically correct.


Semantics of a language provide meaning to its constructs, like tokens and syntax structure. Semantics help interpret symbols, their types, and their relations with each other. 
Semantic analysis judges whether the syntax structure constructed in the source program derives any meaning or not.

## SDT (Syntax Directed Translation)
Syntax Directed Translation (SDT) is a method in compiler design where the translation of a programming language's source code is driven by the grammar of the language.

```
E → E1 + T { print("+") }
```

Example:
```
E → E1 + T   { E.val = E1.val + T.val }
E → T        { E.val = T.val }
T → id       { T.val = lookup(id) }
```



SDT with Embedded Actions:Semantic actions are embedded directly within the production rules.


## Syntax-Directed Definitions (SDD)
Focuses on the association of attribute rules with grammar productions without embedding actions.

```
CFG + semantic rules = Syntax Directed Definitions
```
For example:

```
int a = “value”;
```
should not issue an error in lexical and syntax analysis phase, as it is lexically and structurally correct, but it should generate a semantic error as the type of the assignment differs. These rules are set by the grammar of the language and evaluated in semantic analysis. 

The following tasks should be performed in semantic analysis:
- Scope resolution
- Type checking
- Array-bound checking

## Semantic Errors

- Type mismatch
- Undeclared variable
- Reserved identifier misuse.
- Multiple declaration of variable in a scope.
- Accessing an out of scope variable.

## Attribute Grammar
Attribute grammar is a special form of context-free grammar where some additional information (attributes) are appended to one or more of its non-terminals in order to provide context-sensitive information. 

```
E → E + T { E.value = E.value + T.value }
```
The right part of the CFG contains the semantic rules that specify how the grammar should be interpreted. Here, the values of non-terminals E and T are added together and the result is copied to the non-terminal E.

Semantic attributes may be assigned to their values from their domain at the time of parsing and evaluated at the time of assignment or conditions. Based on the way the attributes get their values, they can be broadly divided into two categories : 

- synthesized attributes:These attributes get values from the attribute values of their child nodes.
-  inherited attributes: inherited attributes can take values from parent and/or siblings. As in the following production,

## What are Annotated Parse Trees?

The parse tree containing the values of attributes at each node for given input string is called annotated or decorated parse tree. 


```
S → ABC
```
If S is taking values from its child nodes (A,B,C), then it is said to be a synthesized attribute, as the values of ABC are synthesized to S.

A can get values from S, B and C. B can take values from S, A, and C. Likewise, C can take values from S, A, and B.

## Expansion
When a non-terminal is expanded to terminals as per a grammatical rule

## Reduction
When a terminal is reduced to its corresponding non-terminal according to grammar rules.

Semantic analyzer receives AST (Abstract Syntax Tree) from its previous stage (syntax analysis).Semantic analyzer attaches attribute information with AST, which are called Attributed AST.

Attributes are two tuple value, <attribute name, attribute value>


## S-attributed SDT

If an SDT uses only synthesized attributes, it is called as S-attributed SDT. These attributes are evaluated using S-attributed SDTs that have their semantic actions written after the production (right hand side).

## L-Attributed SDT
ttributes in an L-attributed SDT can be inherited attributes or synthesized attributes.
