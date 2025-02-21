# Transmission Control Protocol (TCP)
Transmission Control Protocol (TCP) is a communications standard that enables application programs and computing devices to exchange messages over a network. It is designed to send packets across the 
internet and ensure the successful delivery of data and messages over networks.

It is one of the main protocols of the TCP/IP suite. In OSI model, it operates at the transport layer(Layer 4). It lies between the Application and Network Layers which are used in providing 
reliable delivery services. The Internet Protocol (IP), which establishes the technique for sending data packets between computers, works with TCP.

TCP is one of the basic standards that define the rules of the internet and is included within the standards defined by the Internet Engineering Task Force (IETF). It is one of the most commonly used 
protocols within digital network communications and ensures end-to-end data delivery.

TCP organizes data so that it can be transmitted between a server and a client. It guarantees the integrity of the data being communicated over a network. Before it transmits data, TCP establishes a connection
between a source and its destination, which it ensures remains live until communication begins. It then breaks large amounts of data into smaller packets, while ensuring data integrity is in place throughout 
the process.

As a result, high-level protocols that need to transmit data all use TCP Protocol.  Examples include peer-to-peer sharing methods like File Transfer Protocol (FTP), Secure Shell (SSH), and Telnet. It is also used 
to send and receive email through Internet Message Access Protocol (IMAP), Post Office Protocol (POP), and Simple Mail Transfer Protocol (SMTP), and for web access through the Hypertext Transfer Protocol (HTTP).


 TCP can be an expensive network tool as it includes absent or corrupted packets and protects data delivery with controls like acknowledgments, connection startup, and flow control. 


- TCP establishes a reliable connection between sender and receiver using the three-way handshake (SYN, SYN-ACK, ACK) and it uses a four-step handshake (FIN, ACK, FIN, ACK) to close connections properly.
- It ensures error-free, in-order delivery of data packets.
- It uses acknowledgments (ACKs) to confirm receipt.
- It prevents data overflow by adjusting the data transmission rate according to the receiver’s buffer size.
- It prevents network congestion using algorithms like Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery.
- TCP header uses checksum to detect corrupted data and requests retransmission if needed.
- It is used in applications requiring reliable and ordered data transfer, such as web browsing, email, and remote login.

## Internet Protocol (IP)
Internet Protocol (IP) is a method that is useful for sending data from one device to another from all over the internet. It is a set of rules governing how data is sent and received over the internet. 
It is responsible for addressing and routing packets of data so they can travel from the sender to the correct destination across multiple networks. Every device contains a unique IP Address that helps 
it communicate and exchange data across other devices present on the internet.

## Features of TCP

### Segment Numbering System: 
TCP keeps track of the segments being transmitted or received by assigning numbers to each and every single one of them
### Connection Oriented: 
It means sender and receiver are connected to each other till the completion of the process
### Full Duplex:
In TCP data can be transmitted from receiver to the sender or vice – versa at the same time. It increases efficiency of data flow between sender and receiver. 
### Flow Control
Flow control limits the rate at which a sender transfers data. This is done to ensure reliable delivery.
### Error Control: 
TCP implements an error control mechanism for reliable data transfer. Error control is byte-oriented. Segments are checked for error detection. 
### Congestion Control: 
TCP takes into account the level of congestion in the network. Congestion level is determined by the amount of data sent by a sender.
