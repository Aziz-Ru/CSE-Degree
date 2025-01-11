# Communication Engineering

## DATA COMMUNICATION

Data is a collection of discrete or continuous values that:

• convey information
• describing the quantity, quality, fact, statistics, other basic units of meaning,or
• simply sequences of symbols that may be further interpreted formally.

Data communications are the exchange of data between two devices via some form of transmission medium such as a wire cable.The effectiveness
of a data communications system depends on four fundamental characteristics: 
- delivery:The system must deliver data to the correct destination
- accuracy:The system must deliver the data accurately.
- timeliness:The system must deliver data in a timely manner.
- and jitter:Jitter refers to the variation in the packet arrival time.It is the uneven delay in the delivery of audio or video packets.


### Components

A data communications system has five components.

1. Message: The message is the information (data) to be communicated. Popular forms of information include text, numbers, pictures, audio, and video.
2. Sender: The sender is the device that sends the data message. It can be a computer, workstation, telephone handset, video camera, and so on.
3. Receiver: The receiver is the device that receives the message.
4. Transmission medium: The transmission medium is the physical path by which a message travels from sender to receiver.
5. Protocol: A protocol is a set of rules that govern data communications.It represents an agreement between the communicating devices.

### Data Representation

**Text**
text is represented as a bit pattern, a sequence of bits (0s or 1s). Different sets of bit patterns have been designed to represent text symbols. Each set is called a code, and the process of representing symbols is called coding

**Numbers**
Numbers are also represented by bit patterns.

**Images**
Images are also represented by bit patterns.In its simplest form, an image is composed of a matrix of pixels (picture elements), where each pixel is a small dot.The size of the
pixel depends on the resolution.

**Audio**
Audio refers to the recording or broadcasting of sound or music. Audio is by nature different from text, numbers, or images.

**Video**
Video refers to the recording or broadcasting of a picture or movie.

### Data Flow
Communication between two devices can be simplex, half-duplex, or full-duplex

#### Simplex
In simplex mode, the communication is unidirectional, as on a one-way street.Only one of the two devices on a link can transmit; the other can only receive

#### Half-Duplex
In half-duplex mode, each station can both transmit and receive, but not at the same time.When one device is sending, the other can only receive, and vice versa.


#### Full-Duplex
In full-duplex mode (also called duplex), both stations can transmit and receive simultaneously.

## NETWORKS

A network is the interconnection of a set of devices capable of communication.

### Network Criteria
- Performance:Performance can be measured in many ways, including transit time and response time.Transit time is the amount of time required for a message to travel from one device to another. Response time is the elapsed time between an inquiry and a response.
- Reliability:network reliability is measured by the frequency of failure, the time it takes a link to recover from a failure, and the network’s robustness in a catastrophe.
- Security:Network security issues include protecting data from unauthorized access, protecting data from damage and development, and implementing policies and procedures for recovery from breaches and data losses.

### Physical Structures
#### Connection Type
- Point-to-Point:A point-to-point connection provides a dedicated link between two devices.
- Multipoint:A multipoint (also called multidrop) connection is one in which more than two specific devices share a single link.

#### Physical Topology
The term physical topology refers to the way in which a network is laid out physically.

- Mesh Topology
- Star Topology
- Bus Topology
- Ring Topology


## NETWORK TYPES

- Local Area Network
- Wide Area Network
- Switching
- The Internet

### Accessing the Internet
- Using Telephone Networks : Today most residences and small businesses have telephone service, which means they are connected to a telephone network.
- Using Cable Networks:More and more residents over the last two decades have begun using cable TV services instead of antennas to receive TV broadcasting.
- Using Wireless Networks: Wireless connectivity has recently become increasingly popular. A household or a small business can use a combination of wireless and wired connections to access the Internet.
- Direct Connection to the Internet: A large organization or a large corporation can itself become a local ISP and be connected to the Internet.


## PROTOCOL LAYERING
A protocol defines the rules that both the sender and receiver and all intermediate devices need to follow to be able to communicate effectively.

### TCP/IP PROTOCOL SUITE
we can introduce the TCP/IP (Transmission Control Protocol/Internet Protocol). TCP/IP is a protocol suite (a set of protocols organized in different layers) used in the Internet today.

#### Layered Architecture
- Application
- Transport
- Network
- Data Link
- Physical

### THE OSI MODEL
An ISO standard that covers all aspects of network communications is the Open Systems Interconnection (OSI) model.

- Application
- Presentation
- Session
- Transport
- Network
- Data Link
- Physical

## Introduction to Physical Layer

### DATA AND SIGNALS

Signal refers to any time varying voltage,current or electromagnetic waves that carries information.

#### Analog and Digital Data
-  analog data refers to information that is continuous(ontinuous refers to something that is unbroken and can take on any value within a specified range.).
-  digital data refers to information that has discrete states.(Discrete refers to something that is countable and consists of distinct, separate elements or values.)

- An analog signal has infinitely many levels of intensity over a period of time.
- A digital signal, on the other hand, can have only a limited number of defined values.

#### Periodic and Nonperiodic
Both analog and digital signals can take one of two forms: periodic or nonperiodic.

- A periodic signal completes a pattern within a measurable time frame, called a period, and repeats that pattern over subsequent identical periods.
- A nonperiodic signal changes without exhibiting a pattern or cycle that repeats over time.

**In data communications, we commonly use periodic analog signals and nonperiodic digital signals.**

- Period refers to the amount of time, in seconds, a signal needs to complete 1 cycle.
- Frequency refers to the number of periods in 1 s.Frequency is the rate of change with respect to time.

**Frequency and period are the inverse of each other.**

- Phase: Phase describes the position of the waveform relative to time 0.
- Wavelength is another characteristic of a signal traveling through a transmission medium.

  ```
  Wavelength 5 (propagation speed) 3 period
  ```

### Composite Signals
A single-frequency sine wave is not useful in data communications; we need to send a composite signal, a signal made of many simple sine waves.

Any composite signal is a combination of simple sine waves with different frequencies, amplitudes, and phases.If the composite signal is periodic, the decomposition gives a series of signals with discrete frequencies; if the composite signal is nonperiodic, the decomposition gives a combination of sine waves with continuous frequencies.

### Bandwidth
The range of frequencies contained in a composite signal is its bandwidth.if a composite signal contains frequencies between 1000 and 5000, its bandwidth is 5000 − 1000, or 4000.**The bandwidth of a composite signal is the difference between the highest and the lowest frequencies contained in that signal.**

Frequency domain is a way to analyze signals or mathematical functions in terms of frequency, instead of time.

### DIGITAL SIGNALS
- information can also be represented by a digital signal.
- A 1 can be encoded as a positive voltage and a 0 as zero voltage.

A digital signal has eight levels. How many bits are needed per level? We calculate the number
of bits from the following formula. Each signal level is represented by 3 bits.

```
Number of bits per level 5 log28 5 3
```
#### Bit Rate
The bit rate is the number of bits sent in 1s, expressed in bits per second (bps). 

Question:Assume we need to download text documents at the rate of 100 pages per second. What is the required bit rate of the channel?

Solve:A page is an average of 24 lines with 80 characters in each line. If we assume that one character
requires 8 bits, the bit rate is:100*24 * 80 * 8 = 1,536,000 bps= 1.536 Mbps.

Question:A digitized voice channel, as we will see in Chapter 4, is made by digitizing a 4-kHz bandwidth
analog voice signal. We need to sample the signal at twice the highest frequency (two samples per hertz). We assume that each sample requires 8 bits. What is the required bit rate?

solve: 2 * 4000 * 8 = 64,000 bps = 64 kbps

### Transmission of Digital Signals

We can transmit a digital signal by using one of two different approaches: 
- baseband transmission:Baseband transmission means sending a digital signal over a channel without changing the digital signal to an analog signal.Exm:Ethernet networks (e.g., LANs).Baseband transmission requires that we have a low-pass channel, a channel with a bandwidth that starts from zero.
  In baseband transmission, the required bandwidth is proportional to the bit rate; if we need to send bits faster, we need more bandwidth.

  
- broadband transmission:Broadband transmission or modulation means changing the digital signal to an ana-
log signal for transmission. If the available channel is a bandpass channel, we cannot send the digital signal directly to the channel; we need to convert the digital signal to an analog signal before transmission.


## TRANSMISSION IMPAIRMENT
Signals travel through transmission media, which are not perfect. The imperfection causes signal impairment.This means that the signal at the beginning of the medium is not the same as the signal at the end of the medium.Three causes of impairment are attenuation, distortion, and noise

#### Attenuation
Attenuation means a loss of energy. When a signal, simple or composite, travels through a medium, it loses some of its energy in overcoming the resistance of the medium.To show that a signal has lost or gained strength, engineers use the unit of the decibel. The decibel (dB) measures the relative strengths of two signals or one signal at two different points.

```
dB =10 log  (p2/p1)
          10
```

#### Distortion
Distortion means that the signal changes its form or shape.Distortion can occur in a composite signal made of different frequencies. Each signal component has its own propagation speed (see the next section) through a medium and, therefore, its own delay in arriving at the final destination. Differences in delay may create a difference in phase if the delay is not exactly the same as the period duration.

#### Noise
Noise is another cause of impairment.Several types of noise, such as thermal noise, induced noise, crosstalk, and impulse noise, may corrupt the signal.
