# What is Exception?

An exception is an unwanted event that stops the normal flow of a program.
- Divide by zero
- File not found
- Null pointer
- Array out of bounds

## Why Exception Handling?

- To prevent your program from crashing and to handle errors gracefully.

## 3. Exception Types
### Checked Exceptions

- Compiler checks them → you MUST handle with try-catch or throws.
- Examples:IOException,SQLException,FileNotFoundException

### Unchecked Exceptions

- Compiler does NOT force you to handle.
- They happen during runtime
- Examples: NullPointerException,ArithmeticException,ArrayIndexOutOfBoundsException

### Errors

- Not recoverable.
- Examples: StackOverflowError,OutOfMemoryError

|Keyword|Used For|
|------|--------|
|try|Block that might throw|
|catch|Handle specific exception|
|finally|Always runs,not run if JVM shuts down|
|throw|Manually throw|
|throws|Declare in method|
|try-with-resources|Auto-close resources|
## try-catch
```try {
    int a = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
}
try {
    String s = null;
    System.out.println(s.length());
} catch (NullPointerException e) {
    System.out.println("Null object");
} catch (Exception e) {
    System.out.println("Other error");
}
```

## finally block

- Runs always, even if exception happens or not.

```
try {
    int a = 10 / 2;
} catch (Exception e) {
    System.out.println("Error");
} finally {
    System.out.println("Always runs");
}

```

## throws Keyword
- Used in method signature → says “this method may throw exception”.
```
void readFile() throws IOException {
    FileReader fr = new FileReader("abc.txt");
}

```
- You want caller to handle the exception
- You don’t want to try-catch inside method

## throw Keyword

- Used to manually throw an exception.
```
  throw new ArithmeticException("Division not allowed");
```
### 1
```
try {
    throw new NullPointerException();
} catch (ArithmeticException e) {
    System.out.print("A");
} finally {
    System.out.print("F");
}

```
- Exception + F

### 2
```
try {
    throw new RuntimeException();
} catch (NullPointerException e) {
    System.out.print("N");
} finally {
    System.out.print("F");
}
System.out.print("E");

```
- Finally prints F, but runtime exception thrown → code after finally (E) never executes. Output: F + crash

### 3
```
try {
    String s = null;
    System.out.print(s.length());
} catch (NullPointerException e) {
    System.out.print("NPE");
} finally {
    System.out.print("F");
}

```
- ouput: NPEF
- finally may not run if JVM shuts down


