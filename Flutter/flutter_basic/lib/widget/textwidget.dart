import 'package:flutter/material.dart';

class TextWidget extends StatelessWidget {
  // text;
  const TextWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(10, 5, 10, 5),
      margin: const EdgeInsets.all(10),
      color: Colors.lightBlue,
      child: const Text(
        'Hello, World!',
        style: TextStyle(
            color: Colors.deepPurple,
            fontSize: 24,
            fontWeight: FontWeight.bold),
      ),
    );
  }
}
