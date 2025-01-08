# Syntax Analysis
 Its primary goal is to verify the syntactical correctness of the source code. It takes the tokens generated by the lexical analyzer and attempts to build a Parse Tree or Abstract Syntax Tree (AST), representing the program’s structure.
During this phase, the syntax analyzer checks whether the input string adheres to the grammatical rules of the language using context-free grammar.


## Parsing Algorithms Used in Syntax Analysis

- **LL parsing**: This is a top-down parsing algorithm that starts with the root of the parse tree and constructs the tree by successively expanding non-terminals. LL parsing is known for its simplicity and ease of implementation. 
- **LR parsing**: This is a bottom-up parsing algorithm that starts with the leaves of the parse tree and constructs the tree by successively reducing terminals.LR parsing is more powerful than LL parsing and can handle a larger class of grammars.
- LR(1) parsing: This is a variant of LR parsing that uses lookahead to disambiguate the grammar.
- LALR parsing: This is a variant of LR parsing that uses a reduced set of lookahead symbols to reduce the number of states in the LR parser.

## FIRST AND FOLLOW SET

### FIRST():
First is a function that gives a set of terminal that begin the strings derived from production rule.
Some Examples:
|Production Rule|First set|
|-|-|
|A->aB|{a}|
|A->a\|ε|{a, ε}|
|A->(aB)\| ε|{(, ε}|
|A->Ta,T->*FT'|{*}|
|A->Ta</br>T->*FT'\|ε|{*,a}|

### FOLLOW()
Follow is a function that gives a set of terminal that follows a non-terminal in process of derivation.

**Rules of finding Follow set:**
- If S is the start symbol, FOLLOW (S) ={$}
- If production is of form A → α B β, β ≠ ε.
   - If FIRST (β) does not contain ε then, FOLLOW (B) = {FIRST (β)}
   - If FIRST (β) contains ε (i. e. , β ⇒* ε), then

        FOLLOW (B) = FIRST (β) − {ε} ∪ FOLLOW (A)

∵ when β derives ε, then terminal after A will follow B.

- If production is of form A → αB, then Follow (B) ={FOLLOW (A)}.

Example 1:
|Production Rule|First|Follow|
|---------------|-----|------|
|E->TE'|{id,(}|{$,)}|
|E'->+TE'\|ε|{+,ε}|Follow(E)=>{$,)}|
|T->FT'|{id,(}|{+,$,)}
|T'->*FT'\|ε|{*,ε}|{+,$,)}
|F->id\|(E)|{id,(}|{*,+,$,)}|

## Construction of LL(1) Parsing Table

### Conditions for an LL(1) Grammar
  - No Left Recursion: Avoid recursive definitions like A -> A + b.
  - Unambiguous Grammar: Ensure each string can be derived in only one way.
  - Left Factoring: Make the grammar deterministic, so the parser can proceed without guessing.