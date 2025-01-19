# Networking Protocol


## WebRTC
**Peer-to-peer (P2P) is a network architecture that allows participants to share resources and services with each other without a central server**

WebRTC (Web Real-Time Communication) is a technology that enables Web applications and sites to capture and optionally stream audio and/or video media, as well as to exchange arbitrary data between browsers without requiring an intermediary. 
Connections between two peers are represented by the RTCPeerConnection interface. Once a connection has been established and opened using RTCPeerConnection, media streams (MediaStreams) and/or data channels (RTCDataChannels) can be added to the connection.

Media streams can consist of any number of tracks of media information; tracks, which are represented by objects based on the MediaStreamTrack interface, may contain one of a number of types of media data, including audio, video, and text (such as subtitles or even chapter names). Most streams consist of at least one audio track and likely also a video track, and can be used to send and receive both live media or stored media information (such as a streamed movie).

You can also use the connection between two peers to exchange arbitrary binary data using the RTCDataChannel interface. 

#### RTCPeerConnection
Represents a WebRTC connection between the local computer and a remote peer. It is used to handle efficient streaming of data between the two peers.

#### RTCDataChannel
Represents a bi-directional data channel between two peers of a connection.

#### RTCDataChannelEvent
Represents events that occur while attaching a RTCDataChannel to a RTCPeerConnection. The only event sent with this interface is datachannel.

#### RTCSessionDescription
Represents the parameters of a session. Each RTCSessionDescription consists of a description type indicating which part of the offer/answer negotiation process it describes and of the SDP descriptor of the session.

#### RTCIceCandidate
Represents a candidate Interactive Connectivity Establishment (ICE) server for establishing an RTCPeerConnection.

### Introduction to WebRTC protocols
### ICE (Interactive Connectivity Establishment)
ICE (Interactive Connectivity Establishment) is a framework used in WebRTC (Web Real-Time Communication) to facilitate peer-to-peer connections over the internet. There are many reasons why a straight up connection from Peer A to Peer B won't work. It needs to bypass firewalls that would prevent opening connections, give you a unique address if like most situations your device doesn't have a public IP address, and relay data through a server if your router doesn't allow you to directly connect with peers. ICE uses STUN and/or TURN servers to accomplish this, as described below.ICE helps devices find the best way to establish a direct connection by traversing firewalls and NAT (Network Address Translation) devices. It does this by gathering and testing connection candidates to determine the most effective path for data transfer between two peers.

### STUN (Session Traversal Utilities for NAT):

A protocol used to discover the public IP address and port mappings of the device behind a NAT.The client will send a request to a STUN server on the Internet who will reply with the client's public address and whether or not the client is accessible behind the router's NAT.








