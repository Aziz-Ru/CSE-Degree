import 'package:flutter/material.dart';

class CustomCard extends StatelessWidget {
  final String temperature;
  final IconData icon;
  final String time;
  const CustomCard(
      {super.key,
      required this.temperature,
      required this.icon,
      required this.time});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      child: Container(
        width: 100,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
        ),
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            Text(
              temperature,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 5),
            Icon(icon, color: Colors.white, size: 30),
            const SizedBox(height: 5),
            Text(
              time,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
          ],
        ),
      ),
    );
  }
}
