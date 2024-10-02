import 'dart:io';

void main(List<String> arguments) async {
  var ip = await getIpAddress();
  print(ip);
}

Future<String?> getIpAddress() async {
  try {
    for (var interface in await NetworkInterface.list()) {
      for (var add in interface.addresses) {
        if (add.type == InternetAddressType.IPv4) {
          return add.address;
        }
      }
    }
  } catch (e) {
    print('Error: $e');
    return null;
  }
}
