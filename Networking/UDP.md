# User Datagram Protocol

User Datagram Protocol (UDP) is a Transport Layer or layer 4 protocol.UDP is a part of the Internet Protocol suite, referred to as UDP/IP suite. Unlike TCP, it is an unreliable and connectionless protocol. Unlike TCP, it is an unreliable and connectionless protocol.UDP is connectionless and does not guarantee delivery, order, or error checking, making it a lightweight and efficient option for certain types of data transmission.

UDP is a standardized method for transferring data between two computers in a network. Compared to other protocols, UDP accomplishes this process in a simple fashion: it sends packets (units of data transmission) directly to a target computer, without establishing a connection first, indicating the order of said packets, or checking whether they arrived as intended. (**UDP packets are referred to as ‘datagrams’.**)


- Layer 4 protocol
- Ability to address process in ahost using ports
- Simple protocol to send and receive data
- UDP headers only 8 bytes only
- 16 bit or  2 byte for source port
- 16 bit or  2 byte for destination port

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240226104635/UDP-header.jpg"/>

### UDP usecases
- Video streaming
- VPN
- DNS
- WebRTC


## How is UDP used in DDoS attacks?

UDP ‘risks’ like packet loss are not a serious problem in most use cases. However, UDP can be exploited for malicious purposes. Since UDP does not require a handshake, attackers can ‘flood’ a targeted server with UDP traffic without first getting that server’s permission to begin communication.

A typical UDP flood attack sends a large number of UDP datagrams to random ports on its target computer. This forces the target to respond with an equally large number of ICMP packets, which indicate those ports were unreachable. The computing resources required to respond to each fraudulent datagram can exhaust the target, resulting in a denial-of-service to legitimate traffic

A UDP flood is a type of denial-of-service attack in which a large number of User Datagram Protocol (UDP) packets are sent to a targeted server with the aim of overwhelming that device’s ability to process and respond. The firewall protecting the targeted server can also become exhausted as a result of UDP flooding, resulting in a denial-of-service to legitimate traffic.
[What is a UDP flood attack?](https://www.cloudflare.com/learning/ddos/udp-flood-ddos-attack/)
