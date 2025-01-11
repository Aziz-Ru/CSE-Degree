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


### Biphase: Manchester and Differential Manchester

#### Manchester
The idea of RZ (transition at the middle of the bit) and the idea of NRZ-L are combined into the Manchester scheme.Manchester encoding, the duration of the bit is divided into two halves. The voltage remains at one level during the first half and moves to the other level in the second half. The transition at the middle of the bit provides synchronization.

#### Differential Manchester
Differential Manchester, on the other hand, combines the ideas of RZ and NRZ-I. There is always a transition at the middle of the bit, but the bit values are determined at the beginning of the bit.If the next bit is 0, there is a transition; if the next bit is 1, there is none.

The only drawback is the signal rate. The signal rate for Manchester and differential Manchester is double that for NRZ. The reason is that there is always one transition at the middle of the bit and maybe one transition at the end of each bit.

### Bipolar Schemes

two variations of bipolar encoding: AMI and pseudoternary

#### Alternate mark inversion (AMI)
A common bipolar encoding scheme is called bipolar alternate mark inversion (AMI).So AMI means alternate 1 inversion. A neutral zero voltage represents binary 0. Binary 1s are represented by alternating positive and negative voltages.

#### pseudoternary
A variation of AMI encoding is called pseudoternary in which the 1 bit is encoded as a zero voltage and the 0 bit is encoded as alternating positive and negative voltages.


The bipolar scheme was developed as an alternative to NRZ. The bipolar scheme has the same signal rate as NRZ, but there is no DC component. The NRZ scheme has most of its energy concentrated near zero frequency, which makes it unsuitable for transmission over channels with poor performance around this frequency. The concentration of the energy in bipolar encoding is around frequency N/2.

### Multilevel Schemes
The goal is to increase the number of bits per baud by encoding a pattern of m data elements into a pattern of n signal elements.

We only have two types of data elements (0s and 1s), which means that a group of m data elements can produce a combination of 2m data patterns. We can have different types of signal elements by allowing different signal levels. If we have L different levels, then we can produce Ln combinations of signal patterns. If 2m = Ln, then each data pattern is encoded into one signal pattern. If 2m < Ln, data patterns occupy only a subset of signal patterns. The subset can be carefully designed to prevent baseline wandering, to provide synchronization, and to detect errors that occurred during data transmission. Data encoding is not possible if 2 m > Ln because some of the data patterns cannot be encoded.

The code designers have classified these types of coding as mBnL, where m is the length of the binary pattern, B means binary data, n is the length of the signal pattern, and L is the number of levels in the signaling

**In mBnL schemes, a pattern of m data elements is encoded as a pattern of n signal elements in which 2m ≤ Ln.**

#### 2B1Q
The first mBnL scheme we discuss, two binary, one quaternary (2B1Q), uses data patterns of size 2 and encodes the 2-bit patterns as one signal element belonging to a four level signal.

Rules: 00->-3, 01->-1, 10 ->+3 ,11->+1

#### 8B6T
A very interesting scheme is eight binary, six ternary (8B6T).The idea is to encode a pattern of 8 bits as a pattern of six signal elements, where the signal has three levels (ternary).In this type of scheme, we can have 28 = 256 different data patterns and 36 = 729 different signal patterns. The mapping table is shown in Appendix F. There are 729 − 256 = 473 redundant signal elements that provide synchronization and error detection.redundancy is also used to provide DC balance. Each signal pattern has a weight of 0 or +1 DC values. This means that there is no pattern with the weight −1. 

To make the whole stream DC-balanced, the sender keeps track of the weight. If two groups of weight 1 are encountered one after another, the first one is sent as is, while the next one is totally inverted to give a weight of −1.

## Block Coding

We need redundancy to ensure synchronization and to provide some kind of inherent error detecting. Block coding can give us this redundancy and improve the performance of line coding.In general, block coding changes a block of m bits into a block of n bits, where n is larger than m. Block coding is referred to as an mB/nB encoding technique.


Block coding normally involves three steps: division, substitution, and combination. In the division step, a sequence of bits is divided into groups of m bits. For example, in 4B/5B encoding, the original bit sequence is divided into 4-bit groups. **The heart of block coding is the substitution step**. In this step, we substitute an m-bit group with an n-bit group. For example, in 4B/5B encoding we substitute a 4-bit group with a 5-bit group. Finally, the n-bit groups are combined to form a stream. The new stream has more bits than the original bits. 


### 4B/5B
NRZ-I has a good signal rate, one-half that of the biphase, but it has a synchronization problem.A long sequence of 0s can make the receiver clock lose synchronization.The 4B/5B scheme achieves this goal. The block-coded stream does not have more that three consecutive 0s.

**In 4B/5B, the 5-bit output that replaces the 4-bit input has no more than one leading zero (left bit) and no more than two trailing zeros**. So when different groups are combined to make a new sequence, there are never more than three consecutive 0s.


A group of 4 bits can have only 16 different combinations while a group of 5 bits can have 32 different combinations. This means that there are 16 groups that are not used for 4B/5B encoding. Some of these unused groups are used for control purposes; the others are not used at all. The latter provide a kind of error detection.

## Scrambling
Biphase schemes that are suitable for dedicated links between stations in a LAN are not suitable for long-distance communication because of their wide bandwidth requirement.The combination of block coding and NRZ line coding is not suitable for long-distance encoding either, because of the DC component.

We are looking for a technique that does not increase the number of bits and does provide synchronization. We are looking for a solution that substitutes long zero-level pulses with a combination of other levels to provide synchronization. One solution is called scrambling.

### Bipolar with 8-zero substitution(B8ZS)

IN this technique, eight consecutive zero-level voltages are replaced by the sequence *000VB0VB*.
The V in the sequence denotes violation; this is a nonzero voltage that breaks an AMI rule of encoding (opposite polarity from the previous). The B in the sequence denotes bipolar, which means a nonzero level voltage in accordance with the AMI rule.


### High-density bipolar 3-zero (HDB3)

four consecutive zero-level voltages are replaced with a sequence of 000V or B00V.The reason for two different substitutions is to maintain the even number of nonzero pulses after each substitution.

1. If the number of nonzero pulses after the last substitution is odd, the substitution pattern will be 000V, which makes the total number of nonzero pulses even.
2. If the number of nonzero pulses after the last substitution is even, the substitution pattern will be B00V, which makes the total number of nonzero pulses even.

# ANALOG-TO-DIGITAL CONVERSION

## Pulse Code Modulation (PCM)
The most common technique to change an analog signal to digital data (digitization) is called pulse code modulation (PCM). A PCM encoder has three processes

1. The analog signal is sampled.
2. The sampled signal is quantized.
3. The quantized values are encoded as streams of bits.












