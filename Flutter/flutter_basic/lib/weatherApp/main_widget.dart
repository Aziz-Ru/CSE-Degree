import 'dart:ui';

import 'package:flutter/material.dart';

class ShowTemperature extends StatelessWidget {
  final String temp, status;

  const ShowTemperature({super.key, required this.temp, required this.status});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      
      width: double.infinity,
      child: Card(
        elevation: 10,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10),
        ),
        color: Colors.blueGrey[900],
        child: ClipRRect(
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                children: [
                  Text(
                    '$temp °C',
                    style: const TextStyle(
                        fontSize: 32, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 10),
                  const Icon(Icons.cloud, color: Colors.white, size: 50),
                  const SizedBox(height: 10),
                  Text(status,
                      style: TextStyle(color: Colors.white, fontSize: 20)),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
