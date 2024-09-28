import 'dart:html';

void main(List<String> args) {
  var heading = HeadingElement.h1();
  heading.text = "Hello, Dart!";
  querySelector('#output')!.children.add(heading);
}

// Use the dart:html library to program the browser, manipulate objects and elements in the DOM, and access HTML5 APIs. DOM stands for Document Object Model, which describes the hierarchy of an HTML page.

