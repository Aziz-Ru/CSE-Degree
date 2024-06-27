import 'package:flutter/material.dart';

class TextWidget extends StatelessWidget {
    // text;
  const TextWidget({super.key});

  @override
  Widget build(BuildContext context) {

    return const Text(
      'Hello, World!',
      style: TextStyle(
          color: Colors.deepPurple, fontSize: 24, fontWeight: FontWeight.bold),
    );
  }
}
