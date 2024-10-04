import 'dart:io';

void main(List<String> args) async {
  String data = await ReadFile();
  print(data);
}

Future<String> ReadFile() async {
  Directory current = Directory.current;
  File file = File("${current.path}/bin/io/a.txt");
  var fileContent = await file.readAsString();
  return fileContent;
}
