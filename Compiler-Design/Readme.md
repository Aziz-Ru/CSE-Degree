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
- **Two Pass Compiler:** When all phase of two pass compiler translated into twice one from front end and another from back end  that is known as two pass compiler.
- **Multi Pass Compiler:** When several intermediate codes are created in a program and syntax tree is a processed  many times it's called multi pass compiler.

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

## Lexical Analysis
Lexical analysis is the first phase of a compiler. It takes modified source code from language preprocessors that are written in the form of sentences. The lexical analyzer breaks these syntaxes into a series of tokens, by removing any whitespace or comments in the source code.Lexical analysis is the process of breaking down the source code of the program into smaller parts, called tokens, such that a computer can easily understand.These tokens can be individual words or symbols in a sentence, such as keywords, variable names, numbers, and punctuation. It is also known as a **scanner**. Lexical Analysis can be implemented with the **Deterministic Finite Automata**. The output generated from Lexical Analysis are a sequence of tokens sent to the parser for syntax analysis.

### Lexemes
The sequence of characters matched by a pattern to form the corresponding token or a sequence of input characters that comprises a single token is called a lexeme.eg- “float”, “abs_zero_Kelvin”, “=”, “-”, “273”, “;” . 

### Tokens
A lexical token is a sequence of characters that can be treated as a unit in the grammar of the programming languages.Keywords; Examples - for, while, if etc.Identifier; Examples -Variable name, function name, etc.Operators; Examples '+', '++', '-' etc.Separators; Examples ',' ';' etc

### How Lexical Analyzer Works?
- #### Input preprocessing:
  This stage involves cleaning up the input text and preparing it for lexical analysis. This may include removing comments, whitespace, and other non-essential characters from the input text.

- #### Tokenization:
  This is the process of breaking the input text into a sequence of tokens.
  
- #### Token classification:
  In this stage, the lexer determines the type of each token. For example, in a programming language, the lexer might classify keywords, identifiers, operators, and punctuation symbols     as separate token types.
- #### Token validation:
   In this stage, the lexer checks that each token is valid according to the rules of the programming language.
- #### Output generation:
- In this final stage, the lexer generates the output of the lexical analysis process, which is typically a list of tokens

 ### Representation of Token and Lexemes
 |Lexeme|Token|Lexeme|Token|
 |---|---|---|---|
 |while|WHILE|a|IDENTIEFIER|
  | ( |	LAPREN| 	= |	ASSIGNMENT|
|>= 	|COMPARISON 	|– 	|ARITHMETIC|
| ) 	|RPAREN 	|; 	|SEMICOLON|
 

## Syntax Analysis
Syntax analysis (parsing) is the second phase of the compilation process, following lexical analysis. Its primary goal is to verify the syntactical correctness of the source code.
It takes the tokens generated by the lexical analyzer and attempts to build a Parse Tree or Abstract Syntax Tree (AST), representing the program’s structure. During this phase, the syntax analyzer checks whether the input string adheres to the grammatical rules of the language using context-free grammar. If the syntax is correct, the analyzer moves forward; otherwise, it reports an error.

But a lexical analyzer cannot check the syntax of a given sentence due to the limitations of the regular expressions. Regular expressions cannot check balancing tokens, such as parenthesis. Therefore, this phase uses context-free grammar (CFG), which is recognized by push-down automata.

### Context Free Grammer
A context free grammers is a set of recursive rules used to generate patterns.  The grammar has four tuples: (V,T,P,S).
- V:finite set of non-terminal
- T:Terminal Symbol
- P:Production Rule
- S:Start Symbol


#### A grammar is said to be the Context-free grammar if every production is in the form of :
```
G -> (V∪T)*, where G ∊ V
```
  - the left-hand side of the G, here in the example, can only be a Variable, it cannot be a terminal.
  - But on the right-hand side here it can be a Variable or Terminal or both combination of Variable and Terminal.
    
#### Limitations of Context-Free Grammar
- Context-Free Grammar can be ambiguous means we can generate multiple parse trees of the same input.
- Context-Free Grammar can be less efficient because of the exponential time complexity.
  
### Push-Down Automata
Pushdown Automata is a finite automata with extra memory called stack which helps Pushdown automata to recognize Context Free Languages. 

### Derivation
A derivation is basically a sequence of production rules, in order to get the input string. 
During parsing, we take two decisions for some sentential form of input:

- Deciding the non-terminal which is to be replaced.
- Deciding the production rule, by which, the non-terminal will be replaced.

There are two types of derivation: 
**Leftmost derivation:** The process of deriving a string by expanding the leftmost non-terminal at each step
**Rightmost derivation:** The process of deriving a string by expanding the rightmost non-terminal at each step

Production Rules:
```
E → E + E
E → E * E
E → id 
```

The left-most derivation is:

```
E → E * E
E → E + E * E
E → id + E * E
E → id + id * E
E → id + id * id
```
Notice that the left-most side non-terminal is always processed first.

The right-most derivation is:

```
E → E + E
E → E + E * E
E → E + E * id
E → E + id * id
E → id + id * id
```

## Parse Tree
A parse tree is a graphical depiction of a derivation. It is convenient to see how strings are derived from the start symbol. 
In a parse tree:
    - All leaf nodes are terminals.
    - All interior nodes are non-terminals.
    - In-order traversal gives original input string.

## Ambiguity

A grammar G is said to be ambiguous if it has more than one parse tree (left or right derivation) for at least one string.

## Left Recursion
A grammar becomes left-recursive if it has any non-terminal ‘A’ whose derivation contains ‘A’ itself as the left-most symbol. A Grammar G (V, T, P, S) is left recursive if it has a production in the form.

A → A α |β.

Top-down parsers start parsing from the Start symbol, which in itself is non-terminal. So, when the parser encounters the same non-terminal in its derivation, it becomes hard for it to judge when to stop parsing the left non-terminal and it goes into an infinite loop.

### Removal of Left Recursion
The production
```
A => Aα | β
```
is converted into following productions
```
A => βA'
A'=> αA' | ε
```

Let The Production Rule:
```
S => Aα | β 
A => Sd
```
after applying the above algorithm, should become
```
S => Aα | β 
A => Aαd | βd
A  => βdA'
A' => αdA' | ε
```

## Left Factoring
If more than one grammar production rules has a common prefix string, then the top-down parser cannot make a choice as to which of the production it should take to parse the string in hand.

If a top-down parser encounters a production like
```
A ⟹ αβ | α𝜸 | …
```

Then it cannot determine which production to follow to parse the string as both productions are starting from the same terminal (or non-terminal). To remove this confusion, we use a technique called left factoring.

Left factoring transforms the grammar to make it useful for top-down parsers. In this technique, we make one production for each common prefixes and the rest of the derivation is added by new productions.

```
A => αA'
A'=> β | 𝜸 | … 
```
