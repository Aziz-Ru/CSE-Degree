# WebSockets

Bidirectional Communication Protocol.

## Socket IO

Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
Diagram of a communication between a server and a client.`npm install socket.io`

Socket.IO is composed of two parts:

- A server that integrates with (or mounts on) the Node.JS HTTP Server (the socket.io package)
- A client library that loads on the browser side (the socket.io-client package)

The Socket.IO connection can be established with different low-level transports:

    - HTTP long-polling
    - WebSocket
    - WebTransport

Socket.IO will automatically pick the best available option, depending on:

    the capabilities of the browser (see here and here)
    the network (some networks block WebSocket and/or WebTransport connections)

## Features
- **HTTP long-polling fallback:**The connection will fall back to HTTP long-polling in case the WebSocket connection cannot be established.
- **Automatic reconnection:** Under some particular conditions, the WebSocket connection between the server and the client can be interrupted with both sides being unaware of the broken state of the link.
That's why Socket.IO includes a heartbeat mechanism, which periodically checks the status of the connection.
- **Packet buffering:** The packets are automatically buffered when the client is disconnected, and will be sent upon reconnection.


### Socket.IO provides a convenient way to send an event and receive a response:
 **_Sender_**
 ```
socket.emit("hello", "world", (response) => {
  console.log(response); // "got it"
});
```
 **_Receiver_**
 ```
 socket.on("hello", (arg, callback) => {
  console.log(arg); // "world"
  callback("got it");
});
 ```
### Broadcasting
On the server-side, you can send an event to all connected clients or to a subset of clients:
```
// to all connected clients
io.emit("hello");

// to all connected clients in the "news" room
io.to("news").emit("hello");

```
### Multiplexing
```
io.on("connection", (socket) => {
  // classic users
});

io.of("/admin").on("connection", (socket) => {
  // admin users
});
```



_Notice that I initialize a new instance of socket.io by passing the server (the HTTP server) object. Then I listen on the connection event for incoming sockets and log it to the console._

## Emitting events

The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.
