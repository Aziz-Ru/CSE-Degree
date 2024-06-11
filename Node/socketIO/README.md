# WebSockets

Bidirectional Communication Protocol.

## Socket IO

Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
Diagram of a communication between a server and a client

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

`npm install socket.io`

_Notice that I initialize a new instance of socket.io by passing the server (the HTTP server) object. Then I listen on the connection event for incoming sockets and log it to the console._

## Emitting events

The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.
