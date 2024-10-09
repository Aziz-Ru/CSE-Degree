void main(List<String> args) {
  greet(
    "Dart",
    (String name) => print("Hello $name"),
    2021,
  );

  // Dart Named Parameters
  connectToDb(host: "localhost", username: "aziz", password: "123456");

  // Dart Anonymous Function
  var add = (int a, int b) => a + b;
  print(add(10, 20));
}

// Dart Named Parameters
void connectToDb(
    {required String host,
    required String username,
    required String password}) {
  print("Host: $host");
  print("Username: $username");
  print("Password: $password");
}

void greet(String name, Function sayHello, [int? year, int? month]) {
  //Use the square brackets [] to make one or more parameters optional.
  sayHello(name);
  if (year != null) {
    print("Year: $year");
  }
  if (month != null) {
    print("Month: $month");
  }
}
