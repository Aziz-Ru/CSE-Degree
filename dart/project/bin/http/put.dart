import 'dart:convert';

import 'package:http/http.dart' as http;

void main(List<String> arguments) async {
  Uri url = Uri.parse('http://localhost:3000/66f81d8ed756a88494287ee6');

  try {
    // Send a GET request to the server
    http.Response res = await http.put(url,
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          "title": "MU",
          "content": "Chattagram University",
          "pusblished": true
        }));
    Map<String, dynamic> data = jsonDecode(res.body);

    Map<String, dynamic> d = data['todo'];
    print('Title: ${d['title']}');
    print('Content: ${d['content']}');
    print('Published: ${d['published']}');
  } catch (e) {
    print('Error: $e');
  }
}
