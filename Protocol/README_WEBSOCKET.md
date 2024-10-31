## Web Socket 
WebSocket is a realtime technology that enables bidirectional, full-duplex communication between web clients and web servers over persistent connections.
WebSocket is a computer communications protocol, providing a simultaneous two-way communication channel over a single Transmission Control Protocol (TCP) connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011.
WebSocket "is designed to work over HTTP ports 443 and 80 as well as to support HTTP proxies and intermediaries", thus making it compatible with HTTP.  To achieve compatibility, the WebSocket handshake uses the HTTP Upgrade header to change from the HTTP protocol to the WebSocket protocol. 

|Type|Name| Description|
--------------------------------
|Constructor| ws new Websocket(Url,[protocol])|Start opening handshake with a WebSocket server|

|method|ws.send(data),ws.close(),ws.onopen(event),ws.onmessage(event),ws.onclose(event)|
ws|


### What are the advantages of WebSockets? 
1. _Minimal data transmission overhead:_Unlike HTTP-based realtime mechanisms (such as HTTP long polling), the WebSocket protocol uses persistent connections rather than a continuous HTTP request/response cycle. WebSockets require less bandwidth and provide lower latency compared to HTTP, reducing the load on both the client and the server.
2. _WebSocket is an event-driven technology:_data is pushed as soon as it becomes available, without any need for polling. This characteristic is desirable in scenarios where the client needs to react quickly to an event (especially ones it cannot predict, such as a fraud alert).

### What are the disadvantages and limitations of WebSockets?
1. WebSockets are not optimized for streaming audio and video data. A technology like WebRTC is better suited in these scenarios.
2. WebSockets don’t automatically recover when connections are terminated – this is something you need to implement yourself, and is part of the reason why there are many WebSocket client-side libraries in existence.
3. Certain environments (such as corporate networks with proxy servers) will block WebSocket connections. 
