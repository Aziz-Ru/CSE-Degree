class Person {
  late String name;
  // Private property
  int _age;
  //To reference the current object inside a class, you use the this keyword. The this keyword means the current instance of the class.
  Person(this.name, this._age);
  void showOutput() {
    print(name);
    print(_age);
  }
}
// _age is a private property. It can only be accessed within the class and this library.
