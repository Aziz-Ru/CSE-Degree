## Variables

Variables are "containers" for storing information.In PHP, a variable starts with the $ sign, followed by the name of the variable

#### PHP is a Loosely Typed Language

PHP automatically associates a data type to the variable, depending on its value. Since the data types are not set in a strict sense, you can do things like adding a string to an integer without causing an error.

### Get the Type

To get the data type of a variable, use the var_dump() function.

## PHP Variables Scope

In PHP, variables can be declared anywhere in the script.The scope of a variable is the part of the script where the variable can be referenced/used.

PHP has three different variable scopes:

- local

- global

- static

## Global and Local Scope

A variable declared outside a function has a GLOBAL SCOPE and can only be accessed outside a function

A variable declared within a function has a LOCAL SCOPE and can only be accessed within that function

### PHP The global Keyword

The global keyword is used to access a global variable from within a function.

To do this, use the global keyword before the variables (inside the function)

```
$x = 5;
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
}

myTest();
echo $y;
```

PHP also stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable. This array is also accessible from within functions and can be used to update global variables directly.

### PHP The static Keyword

Normally, when a function is completed/executed, all of its variables are deleted. However, sometimes we want a local variable NOT to be deleted. We need it for a further job.

## Print & Echo

With PHP, there are two basic ways to get output: echo and print.

echo and print are more or less the same. They are both used to output data to the screen.

The differences are small: echo has no return value while print has a return value of 1 so it can be used in expressions. echo can take multiple parameters (although such usage is rare) while print can take one argument. echo is marginally faster than print.

### Data Type

The var_dump() function returns the data type and the value

### String

There is a big difference between double quotes and single quotes in PHP.

Double quotes process special characters, single quotes does not.

- The PHP strlen() function returns the length of a string.

- The PHP str_word_count() function counts the number of words in a string.

The PHP strpos() function searches for a specific text within a string.

If a match is found, the function returns the character position of the first match. If no match is found, it will return FALSE.

- The strtoupper() function returns the string in upper case

- The strtolower() function returns the string in lower case

- The PHP str_replace() function replaces some characters with some other characters in a string.

```
$x = "Hello World!";
echo str_replace("World", "Dolly", $x);
```

- The PHP strrev() function reverses a string.

- The trim() removes any whitespace from the beginning or the end

The PHP explode() function splits a string into an array.

```
$x = "Hello World!";
$y = explode(" ", $x);
print_r($y);

```

- To concatenate, or combine, two strings you can use the . operator:

```
$x = "Hello";
$y = "World";
$z = $x . $y;
echo $z;
```

#### slicing

You can return a range of characters by using the substr() function.

Specify the start index and the number of characters you want to return.

```
$x = "Hello World!";
echo substr($x, 6, 5);
```

### Int

PHP has the following functions to check if the type of a variable is integer:

is_int()

### Constant

To create a constant, use the define() function. You can also create a constant by using the const keyword.

`define(name, value);`

```
define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;
```

```
const cannot be created inside another block scope, like inside a function or inside an if statement.
define can be created inside another block scope.
```

### Magic Constants

PHP has nine predefined constants that change value depending on where they are used, and therefor they are called "magic constants".

**\_\_CLASS\_\_** If used inside a class, the class name is returned.

**\_\_DIR\_\_** The directory of the file.

**\_\_FILE\_\_** The file name including the full path.

**\_\_FUNCTION\_\_** If inside a function, the function name is returned.

**\_\_LINE\_\_** The current line number.

**\_\_METHOD\_\_** If used inside a function that belongs to a class, both class and function name is returned.

**\_\_NAMESPACE\_\_** If used inside a namespace, the name of the namespace is returned.

**\_\_TRAIT\_\_** If used inside a trait, the trait name is returned.

## Superglobals

Some predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special.

```
$GLOBALS
$\_SERVER
$_REQUEST
$\_POST
$_GET
$\_FILES
$_ENV
$\_COOKIE
$\ _SESSION

```

### $GLOBALS

`$GLOBALS` is an array that contains all global variables.Global variables are variables that can be accessed from any scope.

### $\_SERVER

`$_SERVER` is a PHP super global variable which holds information about headers, paths, and script locations.

```
echo $_SERVER['PHP_SELF'];  //Returns the filename of the currently executing script
echo $_SERVER['SERVER_NAME'];//Returns the name of the host server
echo $_SERVER['HTTP_HOST']; // Returns the Host header from the current request
echo $_SERVER['HTTP_REFERER'];
echo $_SERVER['HTTP_USER_AGENT'];
echo $_SERVER['SCRIPT_NAME'];
```

### $\_REQUEST

`$_REQUEST` is a PHP super global variable which contains submitted form data, and all cookie data.In other words, `$_REQUEST` is an array containing data from `$_GET`, `$_POST`, and `$_COOKIE`.

### $\_POST

`$_POST` contains an array of variables received via the HTTP POST method.

There are two main ways to send variables via the HTTP Post method:

HTML forms
JavaScript HTTP requests

### htmlspecialchars()

htmlspecialchars() makes sure any characters that are special in html are properly encoded so people can't inject HTML tags or Javascript into your page.

## PHP Arrays

In PHP, there are three types of arrays:

- Indexed arrays - Arrays with a numeric index
- Associative arrays - Arrays with named keys
- Multidimensional arrays - Arrays containing one or more arrays

### Array Functions

The real strength of PHP arrays are the built-in array functions, like the count() function for counting array items

```
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);
```

#### Access Indexed Arrays

To access an array item you can refer to the index number.

```
$cars = array("Volvo", "BMW", "Toyota");
echo $cars[0];

$cars = array("Volvo", "BMW", "Toyota");
foreach ($cars as $x) {
  echo "$x <br>";
}
```

`And if you use the array_push() function to add a new item,`

### PHP Associative Arrays

Associative arrays are arrays that use named keys that you assign to them.

```
$car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964);
var_dump($car);

foreach ($car as $x => $y) {
  echo "$x: $y <br>";
}

unset($cars[1]); //remove  elements from array
```

#### Using the array_diff Function

You can also use the array_diff() function to remove items from an associative array.

#### Remove the Last Item

The array_pop() function removes the last item of an array.

## PHP - Sort Functions For Arrays

- sort() - sort arrays in ascending order
- rsort() - sort arrays in descending order
- asort() - sort associative arrays in - -
- ascending order, according to the value
- ksort() - sort associative arrays in - -
- ascending order, according to the key
- arsort() - sort associative arrays in
- descending order, according to the value
- krsort() - sort associative arrays in - -
- descending order, according to the key
