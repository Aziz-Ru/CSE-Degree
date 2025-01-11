# Error Detection and Correction

The term single-bit error means that only 1 bit of a given data unit (such as a byte, character, or packet) is changed from 1 to 0 or from 0 to 1

The term burst error means that 2 or more bits in the data unit have changed from 1 to 0 or from 0 to 1.

The central concept in detecting or correcting errors is redundancy.Redundancy is achieved through various coding schemes.We can divide coding schemes into two broad categories: block coding and convolution coding.

- The correction of errors is more difficult than the detection

An error-detecting code can detect only the types of errors for which it is designed; other types of errors may remain undetected.Error Detection Methods:

- Simple Parity Check
- Two-Dimensional Parity Check
- Checksum
- Cyclic Redundancy Check (CRC)

### Simple Parity Check

Simple-bit parity is a simple error detection method that involves adding an extra bit to a data transmission.A parity-check code can detect an odd number of errors. It works as:

  - 1 is added to the block if it contains an odd number of 1’s, and
  - 0 is added if it contains an even number of 1’s

### Checksum
Checksum error detection is a method used to identify errors in transmitted data.

#### Checksum – Operation at Sender’s Side
 - Firstly, the data is divided into k segments each of m bits.
 - On the sender’s end, the segments are added using 1’s complement arithmetic to get the sum. The sum is complemented to get the checksum.
 - The checksum segment is sent along with the data segments.

#### Checksum – Operation at Receiver’s Side

- At the receiver’s end, all received segments are added using 1’s complement arithmetic to get the sum. The sum is complemented.
- If the result is zero, the received data is accepted; otherwise discarded.


### Cyclic Redundancy Check (CRC)
- Unlike the checksum scheme, which is based on addition, CRC is based on binary division.
- In CRC, a sequence of redundant bits, called cyclic redundancy check bits, are appended to the end of the data unit so that the resulting data unit becomes exactly divisible by a second, predetermined binary number.
- At the destination, the incoming data unit is divided by the same number. If at this step there is no remainder, the data unit is assumed to be correct and is therefore accepted.
A remainder indicates that the data unit has been damaged in transit and therefore must be rejected.

#### CRC Working

We have given dataword of length n and divisor of length k.

Step 1: Append (k-1) zero’s to the original message

Step 2: Perform modulo 2 division

Step 3: Remainder of division = CRC

Step 4: Code word = Data with append k-1 zero’s + CRC









