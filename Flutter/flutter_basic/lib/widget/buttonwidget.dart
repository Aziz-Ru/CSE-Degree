import 'package:flutter/material.dart';

class ButtonWidget extends StatelessWidget {
  const ButtonWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextButton(
                onPressed: () {
                  debugPrint('Text Button Pressed');
                },
                style: const ButtonStyle(
                    shape: MaterialStatePropertyAll(RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(10)))),
                    elevation: MaterialStatePropertyAll(10),
                    backgroundColor: MaterialStatePropertyAll(Colors.yellow),
                    minimumSize:
                        MaterialStatePropertyAll(Size(double.infinity, 50))),
                child: const Text('Text Button',
                    style: TextStyle(fontSize: 16, color: Colors.black))),
          ),
          TextButton(
              style: TextButton.styleFrom(
                  backgroundColor: Colors.lightGreen,
                  minimumSize: const Size(double.infinity, 20),
                  elevation: 50,
                  foregroundColor: Colors.black,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10))),
              onPressed: () {},
              child: const Text(
                'Clikc mE',
                style: TextStyle(fontSize: 18),
              )),
          ElevatedButton(
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('Button Pressed'),
                ),
              );
            },
            child: const Text('Press Me'),
          ),
        ],
      ),
    );
  }
}
