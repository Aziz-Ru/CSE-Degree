# Internet Protocol(IP)
The Internet Protocol (IP) is a set of rules that allows computers and other devices to communicate over the Internet. It ensures that information sent from one device reaches the correct destination by using a unique set of numbers known as IP addresses.

The Internet Protocol is a fundamental component of the Internet and computer networks, responsible for delivering packets of data from the source host to the destination host based on their IP addresses. It ensures that packets of data get to the right destination from the source device.

The Internet Protocol is a fundamental component of the Internet and computer networks, responsible for delivering packets of data from the source host to the destination host based on their IP addresses. It ensures that packets of data get to the right destination from the source device.

IP works in conjunction with the Internet Control Message Protocol (ICMP) to send error messages and operational information (e.g., destination unreachable, echo requests), which inform senders about issues in packet delivery. Unlike some protocols, IP does not establish a connection before transmitting data, making it a connectionless protocol that allows for more flexible and efficient data transmission
IP works in conjunction with the Internet Control Message Protocol (ICMP) to send error messages and operational information (e.g., destination unreachable, echo requests), which inform senders about issues in packet delivery. Unlike some protocols, IP does not establish a connection before transmitting data, making it a connectionless protocol that allows for more flexible and efficient data transmission

### IP Address:
IP address is referred as a number sticker given to each device that belongs to the network which utilizes Internet Protocol to communicate. It serves two main purposes: host or network interface recognition, identifier or location addressing.

### Packet: 
A packet is a parcel of data that is switched between an origin and a destination via the Internet or some other network that is based on the packet switching mechanism. 
### Router:

A router is a network device that (serves as) a forwarding point for data packets between computer networks. Routers carry out the traffic routing functions through the Internet.

## How Does IP Addressing Work?
IP addressing uniquely identifies each device on a network using IPv4 or IPv6 addresses, assigned either statically or dynamically through DHCP. DNS translates human-readable domain names into these IP addresses, while protocols like ARP (for IPv4) or NDP (for IPv6) map IPs to physical MAC addresses locally. Data is encapsulated into IP packets containing source and destination addresses, which are routed through network devices using routing tables and protocols such as OSPF or BGP to reach their target. In private networks, NAT allows multiple devices to share a single public IP, conserving address space and enhancing security by hiding internal addresses.

## Differences between IPv4 and IPv6
IPv4 and IPv6 are two versions of the Internet Protocol to assign internet protocol addresses to devices that could be connected to the internet.

The older version is IPv4 which uses a 32-bit address that is written in the form of four sets of numbers separated by periods, an example of which is 192.168.1.1. It provides about 4.3 billion unique addresses, sufficient at the time when it was first implemented but now running out due to the countless number of devices that join the internet.

On the other hand, IPv6 was designed to solve this problem. It uses 128-bit addresses, displayed as eight groups of four alphanumeric characters, and can generate almost limitless unique addresses.

## What is an IP Packet?
An IP packets is the basic unit of data transmission in an IP network. It consists of a header and a payload:

Header: The header contains essential control information, such as the source and destination IP addresses, that helps routers determine where to send the packet.
Payload: The payload contains the actual data being transmitted. Once the packet reaches its destination, the data in the payload is delivered to the appropriate application or protocol.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240408150643/IP-Packetdrawio.png"/>

- The Internet Protocol (IP) is a simple, connectionless protocol.
- It forwards packets from source to destination without tracking their state.
- Layer 3 Property
- Can be set automatically
- Network and host portion
- 4 bytes in IPv4 -32 bits

## Network vs Host
- a.b.c.x here x is the network bits other remains are host
- Example:192.168.2540/24
- The first 24 bits are network th rest are the host
- This means we can have 2^24 networks and each network has 155 host also xalled a subnet
### Subnet Mask
- 192.168.254.0/24 is also called a subnet
- The subnet has a mask 255.255.255.0
- subnet mask is used to determine whether an ip is in the same subnet

  ### Default Gateway
  - Most network consist of host and default gateway
  - Host A can talk to B directly if both are int e same subnet
  - Otherwise a send it to someone who might know the gateway
  - The Gateway has an ip address and each host should know its gateway
