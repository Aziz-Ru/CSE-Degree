# Node Js

### Why Node JS
Node.js uses asynchronous programming!

Here is how PHP or ASP handles a file request:

  - Sends the task to the computer's file system.
  - Waits while the file system opens and reads the file.
  - Returns the content to the client.
  - Ready to handle the next request.

Here is how Node.js handles a file request:

  - Sends the task to the computer's file system.
  - Ready to handle the next request.
  - When the file system has opened and read the file, the server returns the content to the client.

Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

## What is Core Module 
a module included in Node.js's source, that does not require installing additional resources. Node.js is a Javascript engine (Google's V8 engine for Chrome, written in C++) that allows to run Javascript outside
the browser. While numerous libraries are available for extending Node's functionalities, the engine comes with a
set of core modules implementing basic functionalities. There's currently 34 core modules included in Node:

### Creating A Server

```
const http = require('http'); // Loads the http module
http.createServer((request, response) => {
// 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
response.writeHead(200, {
'Content-Type': 'text/plain'
});
// 2. Write the announced text to the body of the page
response.write('Hello, World!\n');
// 3. Tell the server that all of the response headers and body have been sent
response.end();
}).listen(1337); // 4. Tells the server what port to be on

```

### Basic Routing
```
var routes = {
'/': function index (request, response) {
response.writeHead(200);
response.end('Hello, World!');
},
'/foo': function foo (request, response) {
response.writeHead(200);
response.end('You are now viewing "foo"');
}
}

http.createServer(function (request, response) {
if (request.url in routes) {
return routes[request.url](request, response);
}
response.writeHead(404);
response.end(http.STATUS_CODES[404]);
}).listen(1337);
```

### All core modules at-a-glance

### assert
The assert module provides a simple set of assertion tests that can be used to test invariants. If the condition is true it will output nothing else an assertion error is given by the console.

### buffer
Buffers are an essential concept in Node.js, especially when working with binary data streams such as files, network protocols, or image processing. A buffer is a temporary storage space for binary data. In Node.js, a buffer is a special type of object that allows you to work with raw binary data directly in memory.

Pure JavaScript is great with Unicode-encoded strings, but it does not handle binary data very well. It is not problematic when we perform an operation on data at the browser level but at the time of dealing with TCP stream and performing a read-write operation on the file system is required to deal with pure binary data.

The Buffer class in Node.js is used to perform operations on raw binary data. Generally, Buffer refers to the particular memory location in memory. Buffer and array have some similarities, but the difference is array can be any type, and it can be resizable. Buffers only deal with raw binary data, and it can not be resizable. Each integer in a buffer represents a byte. console.log() function is used to print the Buffer instance.

### c/c++_addons
Node.js Addons are dynamically-linked shared objects, written in C or C++, that can be loaded into Node.js using
the require() function , and used just as if they were an ordinary Node.js module. They are used primarily to
provide an interface between JavaScript running in Node.js and C/C++ libraries.

### cluster

A single instance of Node.js runs in a single thread. To take advantage of multi-core systems the user will
sometimes want to launch a cluster of Node.js processes to handle the load. The cluster module allows you to
easily create child processes that all share server ports.

### console
The console module provides a simple debugging console that is similar to the JavaScript console mechanism
provided by web browsers.

### crypto
The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC,
cipher, decipher, sign and verify functions.

### dns

The dns module contains functions belonging to two diﬀerent categories:
1. Functions that use the underlying operating system facilities to perform name resolution, and that do not
necessarily perform any network communication. This category contains only one function: dns.lookup().
2. Functions that connect to an actual DNS server to perform name resolution, and that always use the network
to perform DNS queries. This category contains all functions in the dns module except dns.lookup().

### Events
Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain
kinds of objects (called "emitters") periodically emit named events that cause Function objects ("listeners") to be
called.

### fs
File I/O is provided by simple wrappers around standard POSIX functions. To use this module do require('fs'). All
the methods have asynchronous and synchronous forms.

### http
The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally
diﬃcult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buﬀer entire
requests or responses--the user is able to stream data.

### https
HTTPS is the HTTP protocol over TLS/SSL. In Node.js this is implemented as a separate module.

### module
Node.js has a simple module loading system. In Node.js, ﬁles and modules are in one-to-one correspondence (each
ﬁle is treated as a separate module).

### net
The net module provides you with an asynchronous network wrapper. It contains functions for creating both
servers and clients (called streams). You can include this module with require('net');.

### os
The os module provides a number of operating system-related utility methods.

### path
The path module provides utilities for working with ﬁle and directory paths.

### querystring
The querystring module provides utilities for parsing and formatting URL query strings.

### readline
The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one
line at a time.

### repl
The repl module provides a Read-Eval-Print-Loop (REPL) implementation that is available both as a standalone
program or includible in other applications.

### string_decoder
The string_decoder module provides an API for decoding Buffer objects into strings in a manner that preserves
encoded multi-byte UTF-8 and UTF-16 characters.

### tls_(ssl)
The tls module provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL)
protocols that is built on top of OpenSSL.

## Web Apps With Express

Express is a minimal and ﬂexible Node.js web application framework, providing a robust set of features for building
web applications.

- ### path
  Speciﬁes the path portion or the URL that the given callback will handle.
- ### middleware
  One or more functions which will be called before the callback. Essentially a chaining of multiple
callback functions. Useful for more speciﬁc handling for example authorization or error
handling
- ### callback
  A function that will be used to handle requests to the speciﬁed path. It will be called like
callback(request, response, next), where request, response, and next are described below.

- ### request
  An object encapsulating details about the HTTP request that the callback is being called to handle.
- ### response
  An object that is used to specify how the server should respond to the request.
- ### nextA
  callback that passes control on to the next matching route. It accepts an optional error object.


## Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the
next middleware function in the application’s request-response cycle.Middleware functions can execute any code, make changes to res and req objects, end response cycle and call next
middleware.

### npx

node package excutor

## Install dev dependenci

- _npm i -D nodemon_

- _npm i -D prisma_

