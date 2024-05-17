# Dart's core libraries
Dart has a rich set of core libraries that provide essentials for many everyday programming tasks such as working on collections of objects (dart:collection), making calculations (dart:math), and encoding/decoding data (dart:convert). 

## dart:core

  Built-in types, collections, and other core functionality. This library is automatically imported into every Dart program.
## dart:async
  Support for asynchronous programming, with classes such as Future and Stream.
## dart:math
  Mathematical constants and functions, plus a random number generator.
## dart:convert
  Encoders and decoders for converting between different data representations, including JSON and UTF-8.
## dart:io
  I/O for programs that can use the Dart VM, including Flutter apps, servers, and command-line scripts.
## dart:html
  DOM and other APIs for browser-based apps.
# dart:core
The dart:core library (API reference) provides a small but critical set of built-in functionality.
## Printing to the console
The top-level print() method takes a single argument (any Object) and displays that object's string value (as returned by toString()) in the console.
## Numbers
The dart:core library defines the num, int, and double classes, which have some basic utilities for working with numbers.You can convert a string into an integer or double with the parse() methods of int and double, respectively Use the toString() method to convert an int or double to a string.:
```
assert(int.parse('42') == 42);
assert(int.parse('0x42') == 66);
assert(double.parse('0.50') == 0.5);
```
## Strings and regular expressions
The String class defines such methods as split(), contains(), startsWith(), endsWith(), and more.
Searching inside a string contains(), startsWith(), endsWith(),indexOf() methods.
- Converting to uppercase or lowercase toUpperCase(),toLowerCase() method.
- Trimming and empty strings trim(),isEmpty,isNotEmpty
# URIs
```
void main(List<String> args) {
  String uri = 'https://example.org/api?foo=some message';
  String encoded = Uri.encodeFull(uri);
  String decoded = Uri.decodeFull(encoded);
  print(encoded);
  print(decoded);
}
ooutput:
https://example.org/api?foo=some%20message
https://example.org/api?foo=some message
```
# Parsing URIs
If you have a Uri object or a URI string, you can get its parts using Uri fields such as path. To create a Uri from a string, use the parse() static method:
```
var uri = Uri.parse('https://example.org:8080/foo/bar#frag');

assert(uri.scheme == 'https');
assert(uri.host == 'example.org');
assert(uri.path == '/foo/bar');
assert(uri.fragment == 'frag');
assert(uri.origin == 'https://example.org:8080');
```
