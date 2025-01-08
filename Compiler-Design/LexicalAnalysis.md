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
 
