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
  
