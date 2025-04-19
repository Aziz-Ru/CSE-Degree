# Data Link Layer

The data link layer is responsible for the node-to-node delivery of the message. The main function of this layer is to make sure data transfer is error-free from one node to another, over the physical layer.

Data link layer is responsible for converting data stream to signals bit by bit and to send that over the underlying hardware.

## Funcationality of Data Link Layer

### Framing

Data-link layer takes packets from Network Layer and encapsulates them into Frames.Then, it sends each frame bit-by-bit on the hardware. At receiver end, data link layer picks up signals from hardware and assembles them into frames.

### Addressing

Data link layer provides layer 2 hardware addressing mechanism.

### Error Control

Sometimes signals may have encountered problem in transition and the bits are flipped.These errors are detected and attempted to recover actual data bits. It also provides error reporting mechanism to the sender.

here are three types of techniques available which Data-link layer may deploy to control the errors by Automatic Repeat Requests (ARQ):

1. Stop and Wait ARQ
2. Go Back N ARQ
3. Selective Repeat ARQ

### Flow Control

Data-link layer ensures flow control that enables both machine to exchange data on same speed.What if the speed (hardware/software) of the sender or receiver differs? If sender is sending too fast the receiver may be overloaded, (swamped) and data may be lost. Two types of mechanisms can be deployed to control the flow:

1. Stop and Wait
2. Sliding Window

### Multi Access

Data-link layer provides mechanism such as CSMA/CD to equip capability of accessing a shared media among multiple Systems.

1. Random Access Protocol (ALOHA,CSMA,CSMA/CD,CSMA/CA)
2. Control Access Protocol(Polling,Token Passing)

3. Channelization Protocol

## Framing

### Character Count

This method is rarely used and is generally required to count total number of characters that are present in frame.

```
Byte count framing is when the first byte (or first few bytes) of a frame tells how many bytes are in the entire frame.
```

There is disadvantage also of using this method i.e., if anyhow character count is disturbed or distorted by an error occurring during transmission, then destination or receiver might lose synchronization.

### Byte Stuffing

Character stuffing adds extra (escape) characters into the data to distinguish frame control characters (like start and end flags) from actual data.

```
[Data] = 45 7E 32

```

```
[Frame] = 7E 45 7D 5E 32 7E
```

- A special character (like FLAG = 0x7E) is used to indicate start and end of frame.

- But what if the actual data contains 0x7E? That would confuse the receiver.

_To avoid this, character stuffing is used:_

    - If the data contains 0x7E (the FLAG), insert an ESC (Escape) character, like 0x7D, before it.

    - Also, the 0x7E might be modified slightly (e.g., XORed) to tell the receiver it's part of data, not a real flag.

### Bit Stuffing

Bit Stuffing is a method of framing where extra bits are inserted into the data stream to prevent the flag sequence (used to mark frame start/end) from appearing in the actual data.

Most protocols (like HDLC) use a flag pattern to mark the beginning and end of a frame:

```
FLAG = 01111110 (0x7E)
```

`What if this flag pattern appears inside the data? It might confuse the receiver and make it think the frame ends too early.`
Whenever five consecutive 1’s appear in the data, the sender automatically inserts a 0 after them.

- This prevents 01111110 from appearing accidentally.

- The receiver does the opposite: whenever it sees five 1’s followed by a 0, it removes that 0.

## Error Control

### Error Detection Methods

1. **Parity Bit**

- Adds one extra bit to make the number of 1s either even (even parity) or odd (odd parity).

2. **Checksum**

- Adds all the data segments as binary values.

- Sends the sum (checksum) with the data.

- Receiver does the same and checks if values match.

- Used in IP, TCP, UDP.

3. **Cyclic Redundancy Check (CRC)**

- Very powerful method.

- Sender applies a polynomial division to data → appends the remainder (CRC code).

- Receiver redoes the division → if remainder ≠ 0, there's an error.

- CRC is used in Ethernet, HDLC, USB, etc.

### Error Correction Methods

1.**Hamming Code**

- Adds multiple parity bits at calculated positions.

### Error Handling Protocols

1. **Stop-and-Wait ARQ**

- Sender waits for ACK before sending next frame. If timeout, it resends.

- The sender maintains a timeout counter.

- When a frame is sent, the sender starts the timeout counter.

- If acknowledgement of frame comes in time, the sender transmits the next frame in queue.

- If acknowledgement does not come in time, the sender assumes that either the frame or its acknowledgement is lost in transit. Sender retransmits the frame and starts the timeout counter.

- If a negative acknowledgement is received, the sender retransmits the frame.

2. **Go-Back-N ARQ**

In Go-Back-N ARQ method, both sender and receiver maintain a window. Sender can send multiple frames. If one fails, it resends from the error point.

- The sending-window size enables the sender to send multiple frames without receiving the acknowledgement of the previous ones.

- The receiving-window enables the receiver to receive multiple frames and acknowledge them.

- The receiver keeps track of incoming frames sequence number.

- When the sender sends all the frames in window, it checks up to what sequence number it has received positive acknowledgement.

- If sender finds that it has received NACK or has not receive any ACK for a particular frame, it retransmits all the frames after which it does not receive any positive ACK.

3. **Selective Repeat ARQ**

Only the lost or corrupted frames are resent. More efficient.

- In Selective-Repeat ARQ, the receiver while keeping track of sequence numbers, buffers the frames in memory and sends NACK for only frame which is missing or damaged.

- The sender in this case, sends only packet for which NACK is received.

## Flow Control

### Stop and Wait

This flow control mechanism forces the sender after transmitting a data frame to stop and wait until the acknowledgement of the data-frame sent is received.

### Sliding Window

In this flow control mechanism, both sender and receiver agree on the number of data-frames after which the acknowledgement should be sent.

## HDLC

HDLC (High-Level Data Link Control) is a bit-oriented protocol used at the Data Link Layer (Layer 2) of the OSI model for error-free and reliable data transmission.

### HDLC Frame Structure

```
| Flag(8 bit) | Address | Control(1 or 2bit) | Data | FCS (CRC) | Flag |
```

### Types of HDLC Frames

- I-frame (Information): Carries user data and sequencing info from the network layer. The first bit of control field of I-frame is 0.

- S-frame (Supervisory): Used for acknowledgments, flow control and error control. The first two bits of control field of S-frame is 10.

- U-frame (Unnumbered): Control info like connection setup/termination.The first two bits of control field of U-frame is 11.

### Modes of Operation

- Normal Response Mode (NRM): A primary station that send commands and secondary station that can respond to received
  commands.
- Asynchronous Balanced Mode (ABM): Peer-to-peer, both stations can send.
- Asynchronous Response Mode (ARM): Unbalanced, but slave can send without permission.

## Multi-Access in the Data Link Layer

Multi-access refers to multiple devices (nodes) sharing the same communication medium (like a bus or wireless channel), and needing rules to access it without collision

### Two Main Functions of Multi-Access:

1. Addressing (Logical Link Control - LLC)

- Ensures the right device receives the right frame.
- Uses MAC (Media Access Control) addresses.
- Helps distinguish between multiple devices on the same network.

2. Medium Access Control (MAC)

- Manages how devices share the communication channel.

- Avoids or resolves data collisions.

### Types of Multi-Access Protocols:

1.  Random Access(ALOHA,Slotted ALOHA,CSMA,CSMA/CD,CSMA/CA)
2.  Controlled Access (Scheduled)(Polling,Token Passing)
3.  Channelization (Divide the medium) (FDMA,TDMA,CDMA)

### ALOHA

Advocates of Linux Open-source Hawaii Association

#### Types of ALOHA

**How ALOHA Works:**

- Send the data.

- Wait for acknowledgment.

- If ACK is received, transmission is successful.

- If no ACK, assume collision → wait a random time and resend.

1. Pure ALOHA

- send anytime without checking medium
- If two frames overlap at all, collision happens.
- Resend after a random delay.

2.  Slotted ALOHA

- Time is divided into equal slots.

- Devices can only send at the beginning of a time slot.

- Reduces chance of collision (no partial overlaps).

### Carrier Sense Multiple Access

It’s a network protocol used in the Data Link Layer to help multiple devices share the same communication channel without clashing (colliding).

To reduce collisions by making each device “listen” to the channel before transmitting.

- Carrier Sense: Listen to the channel.

- If the channel is free → send data.

- If the channel is busy → wait.

- If two devices send at the same time, a collision can still happen.

#### Variants of CSMA

1. CSMA (basic) Just senses the channel. If it's free, send. Collisions can still happen.
2. CSMA/CD (Collision Detection) Used in wired Ethernet. If a collision happens, it's detected, and sending stops. Devices wait and retry.
3. CSMA/CA (Collision Avoidance) Used in Wi-Fi. Tries to avoid collision by waiting random time before sending. No collision detection possible in wireless

### Collision-Free Protocol?

A collision-free protocol is a network communication method where data transmissions from different devices do not interfere or collide with each other — collisions are avoided by design, not handled after they happen.

- Token Ring: A token circulates in the network; only the device holding the token can send.

- TDMA (Time Division Multiple Access): Time is divided into slots, and each device gets a dedicated time slot to send.

- Polling: A central controller asks devices one-by-one if they want to send data.

## Ethernet

Ethernet is the most common wired networking technology used for connecting devices in local area networks.

### Ethernet Frame Structure:

```
| Preamble | Destination MAC | Source MAC | Type | Data | CRC |
```

### Types of Ethernet

- CLASSIC ETHERNET: ran at rates from 3 to 10 Mbps.
- SWITCHED ETHERNET: runs at 100, 1000, and 10,000 Mbps, in
  forms called
  – fast Ethernet,
  – gigabit Ethernet, and
  – 10 gigabit Ethernet
