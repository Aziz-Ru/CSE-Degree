## SSL definition

Secure Sockets Layer (SSL) is a security protocol that provides privacy, authentication, and integrity to Internet communications. SSL eventually evolved into Transport Layer Security (TLS).

SSL, or Secure Sockets Layer, is an encryption-based Internet security protocol. It was first developed by Netscape in 1995 for the purpose of ensuring privacy, authentication, and data integrity in Internet communications. 

_A website that implements SSL/TLS has "HTTPS" in its URL instead of "HTTP."_


## How does SSL/TLS work?

- In order to provide a high degree of privacy, SSL encrypts data that is transmitted across the web. This means that anyone who tries to intercept this data will only see a garbled mix of characters that is nearly impossible to decrypt.

- SSL initiates an authentication process called a handshake between two communicating devices to ensure that both devices are really who they claim to be.

- SSL also digitally signs data in order to provide data integrity, verifying that the data is not tampered with before reaching its intended recipient.

## Are SSL and TLS the same thing?

SSL is the direct predecessor of another protocol called TLS (Transport Layer Security). In 1999 the Internet Engineering Task Force (IETF) proposed an update to SSL. Since this update was being developed by the IETF and Netscape was no longer involved, the name was changed to TLS.

## Is SSL still up to date?
SSL has not been updated since SSL 3.0 in 1996 and is now considered to be deprecated.There are several known vulnerabilities in the SSL protocol, and security experts recommend discontinuing its use. In fact, most modern web browsers no longer support SSL at all.


## What is an SSL certificate?
SSL certificates are what enable websites to use HTTPS, which is more secure than HTTP. An SSL certificate is a data file hosted in a website's origin server. SSL certificates make SSL/TLS encryption possible, and they contain the website's public key and the website's identity, along with related information. 

## Why do websites need an SSL certificate?

A website needs an SSL certificate in order to keep user data secure, verify ownership of the website, prevent attackers from creating a fake version of the site, and gain user trust.
- Encryption: SSL/TLS encryption is possible because of the public-private key pairing that SSL certificates facilitate. Clients (such as web browsers) get the public key necessary to open a TLS connection from a server's SSL certificate.

- Authentication: SSL certificates verify that a client is talking to the correct server that actually owns the domain. This helps prevent domain spoofing and other kinds of attacks.

- HTTPS: Most crucially for businesses, an SSL certificate is necessary for an HTTPS web address. 

## Why does Cloudflare offer free SSL certificates?

Cloudflare is able to offer SSL for free because of its globally distributed CDN, with highly efficient proxy servers running in data centers all around the world. The Cloudflare mission is to help make the Internet more secure, and widespread adoption of HTTPS is a huge step towards achieving this. SSL/TLS encryption protects user data, prevents attacks, and makes the Internet a safer place overall.
