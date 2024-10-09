import 'dart:convert';

import 'package:http/http.dart' as http;

Future<void> main(List<String> arguments) async {
  List<Map<String, dynamic>> todos = await getTodos();
  for (var todo in todos) {
    print("Title: ${todo['title']}");
    print("Content: ${todo['content']}");
  }
}

Future<List<Map<String, dynamic>>> getTodos() async {
  Uri url = Uri.parse('http://localhost:3000/');

  try {
    // Send a GET request to the server
    http.Response res = await http.get(url);
    Map<String, dynamic> decodEddata = jsonDecode(res.body);
    List<Map<String, dynamic>> todos =
        List<Map<String, dynamic>>.from(decodEddata['todos']);
    return todos;
  } catch (e) {
    print('Error: $e');
    return [];
  }
}
