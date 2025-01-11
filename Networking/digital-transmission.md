# Digital Transmission

## DIGITAL-TO-DIGITAL CONVERSION

### Line Coding
Line coding is the process of converting digital data to digital signals. We assume that data, in the form of text, numbers, graphical images, audio, or video, are stored in computer memory as sequences of bits . Line coding converts a sequence of bits to a digital signal.

### Characteristics

#### Signal Element Versus Data Element
In data communications, our goal is to send data elements. A data element is the smallest entity that can represent a piece of information: this is the bit.
In digital data communications, a signal element carries data elements. A signal element is the shortest unit (timewise) of a digital signal.

#### Data Rate Versus Signal Rate
The data rate defines the number of data elements (bits) sent in 1s.The unit is bits per second (bps).The data rate is sometimes called the bit rate.
The signal rate is the number of signal elements sent in 1s.The unit is the baud.the signal rate is sometimes called the pulse rate.

One goal in data communications is to increase the data rate while decreasing the signal rate.

#### Bandwidth
Although the actual bandwidth of a digital signal is infinite, the effective bandwidth is finite.
#### Baseline Wandering
In decoding a digital signal, the receiver calculates a running average of the received signal power. This average is called the baseline.A long string of 0s or 1s can cause a drift in the baseline (baseline wandering) and make it difficult for the receiver to decode correctly. A good line coding scheme needs to prevent baseline wandering.

#### Self-synchronization

A self-synchronizing digital signal includes timing information in the data being transmitted.

### Line Coding Schemes
- Unipolar(NRZ)
- Polar(NRZ,RZ,biphase,)
- BiPolar(AMI,pseudoternary)
- Multilevel(2B/1Q, 8B/6T, and 4D-PAM5)
- Multitransition

### Unipolar Scheme
In a unipolar scheme, all the signal levels are on one side of the time axis,either above or below.

#### NRZ (Non-Return-to-Zero)
a unipolar scheme was designed as a non-return-to-zero (NRZ) scheme in which the positive voltage defines bit 1 and the zero voltage defines bit 0. It is called NRZ because the signal does not return to zero at the middle of the bit.

this scheme is very costly. As we will see shortly, the normalized power (the power needed to send 1 bit per unit line resistance) is double that for polar NRZ.


### Polar Schemes
In polar schemes, the voltages are on both sides of the time axis. For example, the voltage level for 0 can be positive and the voltage level for 1 can be negative.

#### Non-Return-to-Zero (NRZ)
We can have two versions of polar NRZ: NRZ-L and NRZ-I.

#### NRZ-Level
- The level of the voltage determines the value of the bit.

#### NRZ-Invert
- The lack of change in the level of the voltage determines the value of the bit.
- If there is no change, the bit is 0; if there is a change, the bit is 1.

|NRZ-L|NRZ-I|
|-----|-----|
|Voltage level represents the bit value.|the lack of change determine the value 0 and if there change the bit 1|
|Difficult for long strings of 0s/1s.|Easier than NRZ-L due to transitions for 1s.|
|Independent of previous bit.|Dependent on previous bit.|
|No transitions for data change.|Transition occurs only on 1|
|Simpler.|Complex|

**NRZ-L and NRZ-I both have an average signal rate of N/2 Bd.**

**Problems**
- The main problem with NRZ encoding occurs when the sender and receiver clocks are not synchronized.
- The receiver does not know when one bit has ended and the next bit is starting.


#### Return-To-Zero(RZ)
The Solution of NRZ is the Return to zero schema, which uses 3 values:
- 🫸 positive
- 🫸 negative
- 🫸 zero

- In RZ, the signal changes not between bits but **during the bit**.
- The main disadvantage of RZ encoding is that it requires two signal changes to encode a bit and therefore occupies greater bandwidth.


#### Biphase: Manchester and Differential Manchester





