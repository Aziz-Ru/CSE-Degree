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
 






  
