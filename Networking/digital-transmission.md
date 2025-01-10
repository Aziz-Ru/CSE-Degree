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

#### Baseline Wandering
In decoding a digital signal, the receiver calculates a running average of the received signal power. This average is called the baseline.


### Line Coding Schemes
- Unipolar(NRZ)
- Polar(NRZ,RZ,biphase,)
- BiPolar(AMI,pseudoternary)
- Multilevel(2B/1Q, 8B/6T, and 4D-PAM5)
- Multitransition

#### Unipolar Scheme
In a unipolar scheme, all the signal levels are on one side of the time axis,either above or below.

#### NRZ (Non-Return-to-Zero)
a unipolar scheme was designed as a non-return-to-zero (NRZ) scheme in which the positive voltage defines bit 1 and the zero voltage defines bit 0. It is called
NRZ because the signal does not return to zero at the middle of the bit.










  
