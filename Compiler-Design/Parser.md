# Parser

The way the production rules are implemented (derivation) divides parsing into two types : top-down parsing and bottom-up parsing.

## Top-down Parsing

When the parser starts constructing the parse tree from the start symbol and then tries to transform the start symbol to the input, it is called top-down parsing.

The process of constructing the parse tree which starts from the root and goes down to the leaf is Top-Down Parsing. 

  - Top-Down Parsers constructs from the Grammar which is free from ambiguity and left recursion.
  - Top-Down Parsers use leftmost derivation to construct a parse tree.
  - It does not allow Grammar With Common Prefixes.

### Classification of Top-Down Parsing

<img src="https://www.tutorialspoint.com/compiler_design/images/top_down_parsing.jpg"/>

## Recursive Descent Parsing

Recursive descent is a top-down parsing technique that constructs the parse tree from the top and the input is read from left to right. 
This parsing technique recursively parses the input to make a parse tree, which may or may not require back-tracking.
But the grammar associated with it (if not left factored) cannot avoid back-tracking. 
A form of recursive-descent parsing that does not require any back-tracking is known as predictive parsing.

### Backtracking 
It means, if one derivation of a production fails, the syntax analyzer restarts the process using different rules of same production. 

### Predictive Parser:
Predictive parser is a recursive descent parser, which has the capability to predict which production is to be used to replace the input string. 
The predictive parser does not suffer from backtracking.To accomplish its tasks, the predictive parser uses a look-ahead pointer, which points to the next input symbols.
To make the parser back-tracking free, the predictive parser puts some constraints on the grammar and accepts only a class of grammar known as LL(k) grammar .

### LL Parser
An LL Parser accepts LL grammar.
LL parser is denoted as LL(k). The first L in LL(k) is parsing the input from left to right, the second L in LL(k) stands for left-most derivation and k itself represents the number of look aheads. 

## Bottom-up Parsing

Bottom-up parsing starts with the input symbols and tries to construct the parse tree up to the start symbol.

<img src="https://www.tutorialspoint.com/compiler_design/images/bottom_up_parsing.jpg">


### Shift-Reduce Parsing
Shift-reduce parsing uses two unique steps for bottom-up parsing. These steps are known as shift-step and reduce-step.

### LR Parser
LR parsers are also known as LR(k) parsers, where L stands for left-to-right scanning of the input stream; R stands for the construction of right-most derivation in reverse, and k denotes the number of lookahead symbols to make decisions.


## LR vs LL
|LL|LR|
|-|-|
|Does a leftmost derivation.|Does a rightmost derivation in reverse.|
|Starts with the root nonterminal on the stack.| 	Ends with the root nonterminal on the stack.|
|Ends when the stack is empty. |	Starts with an empty stack.|
|Uses the stack for designating what is still to be expected.| 	Uses the stack for designating what is already seen.|
|Builds the parse tree top-down.| 	Builds the parse tree bottom-up.|
|Expands the non-terminals. 	|Reduces the non-terminals.|
|Reads the terminals when it pops one off the stack. 	|Reads the terminals while it pushes them on the stack.|
|Pre-order traversal of the parse tree. 	|Post-order traversal of the parse tree.|















