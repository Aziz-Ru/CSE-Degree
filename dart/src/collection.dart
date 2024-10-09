import 'dart:math';

void main(List<String> args) {
  // List
  List<int> numlist = [1, 2, 3, 4, 5];
  print(getRandomElement<int>(numlist));
  List<String> strList = ["Dart", "Java", "Python", "C++"];
  print(getRandomElement<String>(strList));

  // List Properties
  print(numlist.length);
  print(numlist[0]);
  numlist.remove(1);
  print(numlist);
  // numlist.forEach((element) {
  //   print(element);
  // });

  final scores = [];
  scores.add(146);
  print(scores);

  // Set
  Set<int> numSet = {1, 2, 3, 4, 5};
  // print(numSet);
  if (numSet.contains(5)) {
    print("Set contains 3");
  }
  List<String> strList2 = ["Dart", "Java", "Python", "C++", "Dart"];

  Set<String> halogens = {
    "Fluorine",
    "Chlorine",
    "Bromine",
  };
  print(halogens);

  halogens.add("Iodine");

  // halogens.add("Iodine");
  // Duplicate element will not be added

  halogens.addAll(strList2);
  print(halogens.length);
  print(halogens.elementAt(1));
  print(halogens);

  var a = {1, 2, 3};
  var b = {2, 3, 4};
  var c = a.intersection(b);
  print(c);

  // Map
  Map<String, int> map = {
    "one": 1,
    "two": 2,
    "three": 3,
  };
  print(map);
  print(map['one']);
  map['four'] = 4;
  print(map);
  print(map.containsKey('one'));
  print(map.containsValue(1));

  var fruits = {'apple': 1, 'banana': 2, 'orange': 3};
  for (var name in fruits.keys) {
    print('$name: ${fruits[name]}');
  }
  fruits.forEach((key, value) {
    print('$key: $value');
  });
}

T getRandomElement<T>(List<T> list) {
  var random = Random();
  int randomIndex = random.nextInt(list.length);
  return list[randomIndex];
}
