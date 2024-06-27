import 'package:flutter/material.dart';

class TextFieldWidget extends StatelessWidget {
  const TextFieldWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(children: [
          TextField(
            style: const TextStyle(color: Colors.white, fontSize: 20),
            decoration: InputDecoration(
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
                focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                    borderSide:
                        const BorderSide(color: Colors.white, width: 2)),
                filled: true,
                fillColor: Colors.black,
                focusColor: Colors.blueGrey,
                labelText: 'Enter your username',
                labelStyle: const TextStyle(color: Colors.white, fontSize: 20),
                prefixIcon: const Icon(Icons.monetization_on),
                suffixIcon: const Icon(Icons.check_circle)),
            keyboardType: TextInputType.name,
          ),
          const Divider(
            height: 10,
          ),
          TextField(
            style: const TextStyle(color: Colors.white, fontSize: 20),
            decoration: InputDecoration(
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
                focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                    borderSide:
                        const BorderSide(color: Colors.white, width: 2)),
                filled: true,
                fillColor: Colors.black,
                focusColor: Colors.blueGrey,
                labelText: 'Enter your Age',
                labelStyle: const TextStyle(color: Colors.white, fontSize: 20),
                prefixIcon: const Icon(Icons.monetization_on),
                suffixIcon: const Icon(Icons.check_circle)),
            keyboardType: TextInputType.number,
          )
        ]));
  }
}
