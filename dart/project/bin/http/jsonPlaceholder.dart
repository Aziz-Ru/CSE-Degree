import 'dart:convert';

import 'package:http/http.dart' as http;

void main(List<String> arguments) async {
  var url = Uri.parse('https://jsonplaceholder.typicode.com/todos/1');

  try {
    // Send a GET request to the server
    var res = await http.get(url);
    var data = jsonDecode(res.body);
    print('Title: ${data['title']}');
    print('Completed: ${data['completed']}');
    print('ID: ${data['id']}');
    print('User ID: ${data['userId']}');
  } catch (e) {
    print('Error: $e');
  }
}
