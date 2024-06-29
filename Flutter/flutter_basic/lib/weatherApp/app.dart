import 'package:flutter/material.dart';
import 'package:flutter_basic/weatherApp/forecast.dart';
import 'package:flutter_basic/weatherApp/info_card.dart';
import 'package:flutter_basic/weatherApp/main_widget.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;

class WeatherApp extends StatefulWidget {
  const WeatherApp({super.key});

  @override
  State<WeatherApp> createState() => _WeatherAppState();
}

class _WeatherAppState extends State<WeatherApp> {
  Future getWeather() async {
    final res = await http.get(Uri.parse(
        'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${dotenv.env['OPEN_WEATHER_API_KEY']}'));
    print(res.body);
  }

  @override
  void initState() {
    super.initState();
    getWeather();
  }

  // Never call asychornous function in  buld function
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: const Text('Weather App'),
          titleTextStyle: const TextStyle(
              color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
          centerTitle: true,
          actions: [
            IconButton(
              onPressed: () {},
              icon: const Icon(Icons.refresh),
            )
          ]),
      body: const Padding(
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 4),
        child: Column(
          children: [
            const ShowTemperature(
              temp: '22.50',
              status: 'cloud',
            ),
            const SizedBox(height: 10),
            const Align(
              alignment: Alignment.centerLeft,
              child: Text(
                'Weather Forcast',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
            ),
            const SizedBox(height: 2),
            const SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  CustomCard(
                    icon: Icons.cloud,
                    temperature: '32.06',
                    time: '9:00',
                  ),
                  CustomCard(
                    icon: Icons.sunny,
                    temperature: '38.06',
                    time: '12:00',
                  ),
                  CustomCard(
                    icon: Icons.cloud,
                    temperature: '30.06',
                    time: '03:00',
                  ),
                  CustomCard(
                    icon: Icons.cloud,
                    temperature: '28.06',
                    time: '06:00',
                  ),
                  CustomCard(
                    icon: Icons.cloud,
                    temperature: '24.90',
                    time: '09:00',
                  ),
                  CustomCard(
                    icon: Icons.cloud_done,
                    temperature: '24.90',
                    time: '12:00',
                  ),
                ],
              ),
            ),
            const SizedBox(height: 10),
            const Align(
              alignment: Alignment.centerLeft,
              child: Text(
                'Additional Info',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
            ),
            const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                AdditionalInfo(
                  icon: Icons.wind_power,
                  title: 'Humidity',
                  value: '24.5',
                ),
                AdditionalInfo(
                  icon: Icons.water_drop,
                  title: 'Humidity',
                  value: '24.5',
                ),
                AdditionalInfo(
                  icon: Icons.water_drop,
                  title: 'pressure',
                  value: '24.5',
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
