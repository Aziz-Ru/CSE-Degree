import 'package:socket_io_client/socket_io_client.dart' as IO;

void main(List<String> args) {
  IO.Socket socket = IO.io('http://localhost:3000', <String, dynamic>{
    'transports': ['websocket'], //use websockket
    'autoConnect': false, //disable auto connect
  });
  socket.connect();

  socket.on('connect', (_) {
    print('Connect Server');
    socket.emit('message', 'Hello from Dart');
  });
  socket.on('message', (data) {
    print(data);
  });
  

  socket.on('disconnect', (_) => print('Disconnected from the server'));
}
