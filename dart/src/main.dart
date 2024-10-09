import 'dart:math';

void main() {
  // Variable
  // int? cnt;
  // The ? operator is used to declare a nullable variable.
  // A nullable variable can be assigned a null value.
  // If you try to access a nullable variable without checking for null, a runtime error occurs.

  // Late Variable
  late String lateStr;
  // If you fail to initialize a late variable, a runtime error occurs when the variable is used.
  lateStr = "Late Initialization";

  // Final & const
  // If you never intend to change a variable, use final or const, either instead of var or in addition to a type.

  final name = "Dart";
  // The final keyword is used to declare a variable that can be assigned a value only once.
  // The value of a final variable must be assigned when it is declared or in the constructor.
  const age = 25;
  // The const keyword is used to declare a variable that can't be reassigned.
  // Use const for variables that you want to be compile-time constants.
  var height = 1.75;
  var isStudent = true;
  var isEmployed = false;

  // assert(cnt == null);
  // Production code ignores the assert() call. During development, on the other hand, assert(condition) throws an exception if condition is false.
  print(lateStr);
  print(name.runtimeType);
  print(age.runtimeType);
  print(height.runtimeType);
  print(isStudent.runtimeType);
  print(isEmployed.runtimeType);

  // Function
  print(fibonacci(10));

  // Generics
  List<int> numlist = [1, 2, 3, 4, 5];
  print(getRandomElement<int>(numlist));
  List<String> strList = ["Dart", "Java", "Python", "C++"];
  print(getRandomElement<String>(strList));
}

// Generics
T getRandomElement<T>(List<T> list) {
  var random = Random();
  int randomIndex = random.nextInt(list.length);
  return list[randomIndex];
}

int fibonacci(int n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
