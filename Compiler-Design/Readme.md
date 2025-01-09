# Compiler Design

Compiler is program that converts a program written in a high level language to a low level language. The Program written in a high level language is known source code and program converted into a low level language that is known as target code.

There are sevarel stages in the phase in the process of compileing-

- Lexical Analyser
- Syntax Analyser
- Semantic Analyser
- Intermediate Code Generation
- Code Optimizer
- Target Code Generate

## Types Of Compiler

- **Single Pass Compiler:** Where All Phase of the compiler are present inside of a single module it's simply called single pass compiler.
- **Two Pass Compiler:** When all phase of two pass compiler translated into twice one from front end and another from back end that is known as two pass compiler.
- **Multi Pass Compiler:** When several intermediate codes are created in a program and syntax tree is a processed many times it's called multi pass compiler.

## Language Processing System

Pre-Processor -> Compiler -> Assembler -> Linker -> Loader -> Memory

#### Pre Processor

Pre-Processor is a tool that process source code before it's compiled by a compiler. It performs file inclusion,augmentation,macro processing etc.

#### Compiler

Compiler translate source code into target code.

#### Assembler

An assembly program translates assembly code into machine code.

#### Liker

A linker is a tool that is used to link all the parts of a program together for excution.

#### Loader

A Loader loads all of code from memory and then the program is excuted.

#### Cross-compiler

A compiler that runs on platform (A) and is capable of generating executable code for platform (B) is called a cross-compiler.

#### Source-to-source Compiler

A compiler that takes the source code of one programming language and translates it into the source code of another programming language is called a source-to-source compiler.

## Compiler Design - Architecture

A compiler can broadly be divided into two phases based on the way they compile.

- Analysis Phase: Known as the front-end of the compiler, the analysis phase of the compiler reads the source program, divides it into core parts and then checks for lexical, grammar and syntax errors.
- Synthesis Phase:Known as the back-end of the compiler, the synthesis phase generates the target program with the help of intermediate source code representation and symbol table.

## Bootstrapping

Bootstrapping is a technique in compiler design that creates a self-compiling compiler, which is a compiler written in the same programming language it compiles.Bootstrapping is the process of writing a compiler for a programming language using the language itself

## Grammer

a finite set of formal rules that are generating syntactically correct sentences. The formal definition of grammar is that it is defined as four tuples − G=(V,T,P,S) G is a grammar, which consists of a set of production rules. It is used to generate the strings of a language.

Terminal Symbols: Terminal symbols are those that are the components of the sentences generated using grammar

Non-Terminal Symbols: Non-terminal symbols are those symbols that take part in the generation of the sentence but are not the component of the sentence.

## Context-Free Grammar

A context-free grammar (CFG) consisting of a finite set of grammar rules is a quadruple (N, T, P, S) where

- N is a set of non-terminal symbols.

- T is a set of terminals where N ∩ T = NULL.

- P is a set of rules, P: N → (N ∪ T)\*, i.e., the left-hand side of the production rule P does have any right context or left context.

- S is the start symbol.

Context-free grammars (CFGs) are used to describe context-free languages. A context-free grammar is a set of recursive rules used to generate patterns of strings.

## Chomsky Normal Form (CNF)

Chomsky’s Normal Form Stands as CNF.A context free grammar is in CNF, if the production rules satisfy one of the following conditions

- If there is start Symbol generating ε. Example − A-> ε
- If a non-terminal generates two non-terminals. Example − S->AB
- If a non-terminal generates a terminal. Example − S->a

### Steps for converting CFG into CNF

Step 1: Eliminate start symbol from the RHS. If the start symbol T is at the right-hand side of any production, create a new production as:S1 → S

Step 2: In the grammar, remove the null, unit and useless productions

Step 3: Eliminate terminals from the RHS of the production if they exist with other non-terminals or terminals. For example, production S → aA can be decomposed as:

```
    S → RA
    R → a
```

Step 4: Eliminate RHS with more than two non-terminals. For example, S → ASB can be decomposed as:

```
    S → RS
    R → AS
```

## Precedence

Precedence defines the priority of operators in an expression. Operators with higher precedence are evaluated before those with lower precedence.

## Associativity

Associativity determines the order in which operators of the same precedence are evaluated in an expression.
|Operator|Precedence Level|Associativity|
|---|---|---|
|Parentheses ()| Highest| None|
|Exponentiation ^ |High |Right-to-left|
|Multiplication \*, Division / |Medium |Left-to-right|
|Addition +, Subtraction - |Low |Left-to-right|
|Assignment = |Lowest |Right-to-left|

## Phases Of Compiler Design

- Lexical Analysis
- Syntax Analysis
- Semantic Analysis
- Intermediate Code Generation
- Code Generation
- Code Optimization
