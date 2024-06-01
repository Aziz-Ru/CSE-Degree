# Json Web Token
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

## What is the JSON Web Token structure?
In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

  - Header
  - Payload
  - Signature
### Header
The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.
### Payload

The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

### Signature
To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

### Install
`npm install jsonwebtoken`

## Usage
- jwt.sign(payload, secretOrPrivateKey, [options, callback])
- options:
      -  algorithm (default: HS256)
      -  expiresIn: expressed in seconds or a string describing a time span vercel/ms.
        ```
        Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), otherwise milliseconds unit is used by             default ("120" is equal to "120ms").
          ```
  - *var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });*
  - *jwt.verify(token, secretOrPublicKey, [options, callback])*
  - secretOrPublicKey is a string (utf-8 encoded), buffer, or KeyObject containing either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA. If jwt.verify is called asynchronous, secretOrPublicKey can be a function that should fetch the secret or public key.

  ## Errors & Codes
  - TokenExpiredError

Thrown error if the token is expired.

Error object:

    name: 'TokenExpiredError'
    message: 'jwt expired'
    expiredAt: [ExpDate]

    
