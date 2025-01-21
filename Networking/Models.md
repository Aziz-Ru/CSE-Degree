![image](https://github.com/user-attachments/assets/70c15d2f-546c-4bb9-9320-299961e3218d)# Network Model
Networking engineering is a complicated task, which involves software, firmware, chip level engineering, hardware, and electric pulses. To ease network engineering, the whole networking concept is divided into multiple layers. Each layer is involved in some particular task and is independent of all other layers.

## OSI Model
Open System Interconnect is an open standard for all communication systems. OSI model is established by International Standard Organization (ISO). This model has seven layers

1. Application Layer: This layer is responsible for providing interface to the application user. This layer encompasses protocols which directly interact with the user.
2. Presentation Layer: This layer defines how data in the native format of remote host should be presented in the native format of host.
3. Session Layer: This layer maintains sessions between remote hosts. For example, once user/password authentication is done, the remote host maintains this session for a while and does not ask for authentication again in that time span.
4. Transport Layer: This layer is responsible for end-to-end delivery between hosts.
5. Network Layer: This layer is responsible for address assignment and uniquely addressing hosts in a network.
6. Data Link Layer: This layer is responsible for reading and writing data from and onto the line. Link errors are detected at this layer.
7. Physical Layer: This layer defines the hardware, cabling wiring, power output, pulse rate etc.

## Internet Model
Internet uses TCP/IP protocol suite, also known as Internet suite. This defines Internet Model which contains four layered architecture. 

1.Application Layer: This layer defines the protocol which enables user to interact with the network.For example, FTP, HTTP etc.
2.Transport Layer: This layer defines how data should flow between hosts. Major protocol at this layer is Transmission Control Protocol (TCP). This layer ensures data delivered between hosts is in-order and is responsible for end-to-end delivery.
3.Internet Layer: Internet Protocol (IP) works on this layer. This layer facilitates host addressing and recognition. This layer defines routing.
4.Link Layer: This layer provides mechanism of sending and receiving actual data.Unlike its OSI Model counterpart, this layer is independent of underlying network architecture and hardware.
