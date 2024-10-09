import 'dart:convert';

import 'package:http/http.dart' as http;

void main(List<String> arguments) async {
  var url = Uri.parse('http://localhost:3000/');

  try {
    // Send a GET request to the server
    var res = await http
        .post(url, body: {"title": "RU", "content": "Rajshahi University"});
    var data = jsonDecode(res.body);
    print(data);
  } catch (e) {
    print('Error: $e');
  }
}
