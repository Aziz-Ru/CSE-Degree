# Digital Signal Processing

Digital signal processing, also referred to as DSP, is an engineering technique of converting real-world signals into digital form, analyzing them using algorithms, improve and manipulate them.A common example of digital signal processing that you experience in your daily life is using a noise-cancelling headphone or streaming a high-definition video on a social media platform.

It is because it allows us to process real-world signals with great precision to use in various applications across different fields. The following applications highlights the importance of digital signal processing in our life −

   - Processing of audio and voice signals
   - Audio and video signal compression
   - Noise reduction
   - Processing of images like JPEG, PNG, etc.
   - Telecommunication signal processing such as modulation, error correction, etc.
   - Analysis of biomedical signals like ECG, EEG, etc.


## Components of Digital Signal Processing


  -  Input/Output − Connects the outside world with the digital signal processing system.
  -  Compute Engine − It is the core element of a DSP system and performs functions like mathematical processing, program access and execution, data access and processing.
  -  Program Memory − Memory component that stores programs required for digital signal processing.
  -  Data Memory − Memory component that stores input data and processed information.


#### Signal

An electrical quantity like current, voltage, or electromagnetic wave which is used for conveying information from one point to another is referred to as a signal. There are two types of signals namely, analog signals (also called continuous-time signals) and digital signals (also called discrete-time signals).

#### Digital Signal
A digital signal is one that represents information in the form of a sequence of discrete values. Digital signals are the backbone of digital signal processing (DSP).

#### Sampling
The process of converting real-world analog signals into digital form by taking samples of their amplitude at regular intervals is known as sampling. The intervals at which samples are taken are called sampling rate.

#### Quantization
Quantization is an important step in analog to digital conversion. It is defined as the process of mapping and approximating a large set of infinite sampled values of amplitude to a smaller set of discrete finite values.

#### Fourier Transform
Fourier Transform (FT) is a mathematical technique for converting time-domain signals into frequency-domain representation. It is used in DSP to perform operations like filtering, compression, and signal analysis.

#### Discrete Fourier Transform (DFT)
Discrete Fourier Transform (DFT) is a mathematical technique for converting a discrete sequence from time-domain to its equivalent frequency domain. It is used in DSP for spectral analysis, numerical analysis, filtering, etc.

#### Fast Fourier Transform (FFT)
Fast Fourier Transform (FFT) is nothing but computation of discrete Fourier Transform in an algorithmic format, where the computational part will be reduced. In other words, FFT is a mathematical tool for calculating Discrete Fourier Transform of a digital signal by using a computer with reduced number of calculations.

#### Convolution
Convolution is an important mathematical operation widely used in digital signal processing. It is used for combining two functions to produce a third function. Convolution is defined as the integral of the product of the two functions. It is used in DSP for filtering, image processing or audio processing.

#### Z-Transform
Z-Transform is a mathematical tool used for converting discrete-time signals into complex-valued frequency domain signal. It allows to analyze the discrete-time signals in the frequency domain. This transformation theory is mainly used to study system stability and design digital filters.

#### FIR Filter (Finite Impulse Response)
FIR filter is a type of digital filter that uses a finite set of input values and produces a limited duration impulse response. It is used as a fundamental component in many digital signal processing applications.

#### IIR Filter (Infinite Impulse Response)
IIR filter is also a type of digital filter. It is a feedback-based filter, hence it produces an impulse response by using past inputs and past outputs. It is widely used for efficient filtering in DSP applications.

#### Nyquist Theorem
Nyquist Theorem is one of the important principles in digital signal processing and it defines the essential condition for accurate analog to digital conversion. According this theorem, the sampling rate must be at least twice (double) of the bandwidth of the signal. It is essential for avoiding aliasing, a type of distortion.

#### Aliasing
Aliasing is a type of distortion in reconstructed signals that occurs when a signal is sampled at a rate lower than the required Nyquist rate. It degrades the quality of audio, video, or communication signals.

#### Impulse Response
Impulse response is defined as the output produced by a system when an impulse signal is applied to it as the input. An impulse signal is a type of signal whose amplitude is 1 at t = 0 and 0 at any other time.

#### Time-Invariant Systems
A time invariant system is a type of system whose response does not change with time. Thus, the response of a time invariant system to an input is independent of the time.
#### Stability
Stability is a property of a system which states that the output of the system remains bounded for a given bounded input. Thus, a stable system satisfies the condition of BIBO (Bounded Input and Bounded Output).
