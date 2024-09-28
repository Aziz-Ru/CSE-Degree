import 'class.dart';

void main(List<String> args) {
  List<Person> persons = [
    Person("Aziz", 25),
    Person("Rahman", 24),
    Person("Rahim", 23),
  ];
  print(persons[2]);
  var person = Person("Aziz", 25);
  print(person.name);
}
