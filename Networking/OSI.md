# OSI 

OSI stands for Open Systems Interconnection. The OSI Model (Open Systems Interconnection Model) is a conceptual framework used to understand and standardize how different networking protocols and technologies interact in a network. It is a 7-layer architecture with each layer having specific functionality to perform. All these 7 layers work collaboratively to transmit the data from one person to another across the globe. 

## Physical Layer – Layer 1
Deals with the physical connection between devices and the transmission of raw bits over a physical medium.
The lowest layer of the OSI reference model is the physical layer. It is responsible for the actual physical connection between the devices. The physical layer contains information in the form of bits. It is responsible for transmitting individual bits from one node to the next. When receiving data, this layer will get the signal received and convert it into 0s and 1s and send them to the Data Link layer, which will put the frame back together.
### Examples:
  - Cables (e.g., Ethernet, fiber optics)
  - Hubs, repeaters
  - Wireless signals (e.g., Wi-Fi, Bluetooth)

## Data Link Layer (DLL) – Layer 2

The data link layer is responsible for the node-to-node delivery of the message. The main function of this layer is to make sure data transfer is error-free from one node to another, over the physical layer. When a packet arrives in a network, it is the responsibility of the DLL to transmit it to the Host using its MAC address. 
### Examples:

  - Ethernet switches
  - MAC (Media Access Control) addresses
  - Protocols: Ethernet, PPP (Point-to-Point Protocol)

## Network Layer – Layer 3
 Handles routing and forwarding of data packets between devices across different networks.
The network layer works for the transmission of data from one host to the other located in different networks. It also takes care of packet routing i.e. selection of the shortest path to transmit the packet, from the number of routes available. The sender & receiver’s IP addresses are placed in the header by the network layer. 
### Examples:

  - Routers
  - IP (Internet Protocol) addresses
  - Protocols: IP, ICMP, ARP

# Transport Layer – Layer 4
Ensures reliable data transfer between end systems, including error recovery and flow control.
The transport layer provides services to the application layer and takes services from the network layer. The data in the transport layer is referred to as Segments. It is responsible for the end-to-end delivery of the complete message. The transport layer also provides the acknowledgment of the successful data transmission and re-transmits the data if an error is found.

At the sender’s side: The transport layer receives the formatted data from the upper layers, performs Segmentation, and also implements Flow and error control to ensure proper data transmission. It also adds Source and Destination port numbers in its header and forwards the segmented data to the Network Layer.
*The sender needs to know the port number associated with the receiver’s application. Generally, this destination port number is configured, either by default or manually. For example, when a web application requests a web server, it typically uses port number 80, because this is the default port assigned to web applications. Many applications have default ports assigned. At the receiver’s side: Transport Layer reads the port number from its header and forwards the Data which it has received to the respective application. It also performs sequencing and reassembling of the segmented data.*

### Examples:

  - TCP (Transmission Control Protocol)
  - UDP (User Datagram Protocol)

# Session Layer – Layer 5
This layer is responsible for the establishment of connection, maintenance of sessions, and authentication, and also ensures security.

### Examples:

  - NetBIOS
  - RPC (Remote Procedure Call)

### Key Concepts:
Session management, synchronization.

# Presentation Layer – Layer 6
The presentation layer is also called the Translation layer. The data from the application layer is extracted here and manipulated as per the required format to transmit over the network. serialized the data.
Translates data between the application layer and the network format, ensuring data is in a readable format.

### Examples:

  - Encryption (e.g., SSL/TLS)
  - Data compression
  - Encoding (e.g., JSON, XML)
    
# Application Layer – Layer 7
At the very top of the OSI Reference Model stack of layers, we find the Application layer which is implemented by the network applications. These applications produce the data to be transferred over the network. This layer also serves as a window for the application services to access the network and for displaying the received information to the user. 

### Examples:

  - HTTP/HTTPS (web browsing)
  - FTP (file transfer)
  - SMTP (email)
  - DNS (domain name resolution)

    Sender:

    -   Application Layer: User sends an email.
    -   Presentation Layer: Email is encrypted and formatted.
    -   Session Layer: A session is established with the email server.  
    -   Transport Layer: Data is broken into segments and prepared for transmission.
    -   Network Layer: Segments are packaged into packets with IP addresses.
    -   Data Link Layer: Packets are framed with MAC addresses.
    -   Physical Layer: Frames are converted into bits and sent over the network.

    Receiver:

    - Physical Layer: Bits are received and converted into frames.
    - Data Link Layer: Frames are checked for errors and forwarded.
    - Network Layer: Packets are routed to the correct device.
    - Transport Layer: Segments are reassembled into data.
    - Session Layer: The session is maintained.
    - Presentation Layer: Data is decrypted and formatted.
    - Application Layer: The email is displayed to the user.
