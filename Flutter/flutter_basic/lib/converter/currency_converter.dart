import 'package:flutter/material.dart';

class CurrencyConverter extends StatefulWidget {
  const CurrencyConverter({super.key});
  @override
  State<CurrencyConverter> createState() => _CurrencyConverter();
}

class _CurrencyConverter extends State<CurrencyConverter> {
  double _value = 0.0;
  TextEditingController _controller = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Currency Converter',
          style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
        ),
        centerTitle: true,
        backgroundColor: Colors.indigoAccent,
      ),
      body: Container(
        color: Colors.brown,
        width: double.infinity,
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(10),
              child: Text(
                'BD: $_value Taka',
                style:
                    const TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
              ),
            ),
            Container(
              padding: const EdgeInsets.symmetric(vertical: 2, horizontal: 10),
              width: double.infinity,
              child: TextField(
                controller: _controller,
                decoration: InputDecoration(
                    labelText: 'Enter your bd currency',
                    fillColor: Colors.black87,
                    labelStyle:
                        const TextStyle(fontSize: 18, color: Colors.white),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(20),
                      borderSide: const BorderSide(color: Colors.blueGrey),
                    ),
                    focusedBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20),
                        borderSide: const BorderSide(color: Colors.black))),
                keyboardType: TextInputType.number,
                style: const TextStyle(fontSize: 18, color: Colors.white),
              ),
            ),
            Padding(
                padding: const EdgeInsets.all(10),
                child: ElevatedButton(
                    style: ButtonStyle(
                        minimumSize: MaterialStateProperty.all(
                            const Size(double.infinity, 50)),
                        backgroundColor:
                            MaterialStateProperty.all(Colors.indigoAccent)),
                    onPressed: () {
                      setState(() {
                        _value = double.parse(_controller.text) * 117.5;
                      });
                    },
                    child: const Text('Convert',
                        style: TextStyle(fontSize: 20, color: Colors.white))))
          ],
        ),
      ),
    );
  }
}
