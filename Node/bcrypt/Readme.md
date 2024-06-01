# Bcrypt Js
Optimized bcrypt in JavaScript with zero dependencies. Compatible to the C++ bcrypt binding on node.js and also working in the browser.
## Usage
### To Hash Password (async (recommended))
` const hashPassword = await bcrypt.hash(req.body.password, 10);`
```
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
```
 hash(data, salt, cb)

data - [REQUIRED] - the data to be encrypted.
salt - [REQUIRED] - the salt to be used to hash the password. if specified as a number then a salt will be generated with the specified number of rounds and used (see example under Usage).
cb - [OPTIONAL] - a callback to be fired once the data has been encrypted. uses eio making it asynchronous. If cb is not specified, a Promise is returned if Promise support is available.
        err - First parameter to the callback detailing any errors.
        encrypted - Second parameter to the callback providing the encrypted form.
        
### To Compare Hash Password
```
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});
bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    // result == false
});
```
 compare(data, encrypted, cb)

data - [REQUIRED] - data to compare.
encrypted - [REQUIRED] - data to be compared to.
cb - [OPTIONAL] - a callback to be fired once the data has been compared. uses eio making it asynchronous. If cb is not specified, a Promise is returned if Promise support is available.
        err - First parameter to the callback detailing any errors.
        same - Second parameter to the callback providing whether the data and encrypted forms match [true | false].





### Why is async mode recommended over sync mode?

We recommend using async API if you use bcrypt on a server. Bcrypt hashing is CPU intensive which will cause the sync APIs to block the event loop and prevent your application from servicing any inbound requests or events. The async version uses a thread pool which does not block the main event loop.

