# HTTP
HTTP stands for HyperText Transfer Protocol. It is the main way web browsers and servers communicate to share information on the internet.It is a set of rules for sharing data on the World Wide Web (WWW).
HTTP helps web browsers and servers communicate, allowing people to access and share information over the internet.

## Working of HTTP
First of all, whenever we want to open any website we first open a web browser after that we will type the URL of that website (e.g., www.facebook.com ). This URL is now sent to the Domain Name Server (DNS).
Then DNS first checks records for this URL in their database, and then DNS will return the IP address to the web browser corresponding to this URL. Now the browser is able to send requests to the actual server. 

## What is an HTTP Request?
HTTP request is simply termed as the information or data that is needed by Internet browsers for loading a website. This is simply known as HTTP Request.

There is some common information that is generally present in all HTTP requests. These are mentioned below.

- HTTP Version 
- URL
- HTTP Method
- HTTP Request Headers
- HTTP Body

### HTTP Request Headers
HTTP Request Headers generally store information in the form of key-value and must be present in each HTTP Request.The use of this Request Header is to provide core information about the client’s 
information, etc.

### HTTP Request Body
HTTP Request Body simply contains the information that has to be transferred. HTTP Request has the information or data to be sent to these browsers. 
### HTTP Methods
HTTP Methods are simply HTTP Verb. In spite of being present so many HTTP Methods, the most common HTTP Methods are HTTP GET and HTTP POST. These two are generally used in HTTP cases. In HTTP GET, 
the information is received in the form of a website.

### What is an HTTP Status Code?
- Informational
- Successful
- Re-directional 
- Client-Error
- Server-Error
  
## History

- HTTP version 0.9: This was the first version of HTTP which was introduced in 1991. 
- HTTP version 1.0: In 1996, RFC 1945 (Request For Comments) was introduced in HTTP version 1.0. 
- HTTP version 1.1: In January 1997, RFC 2068 was introduced in HTTP version 1.1. Improvements and updates to the HTTP version 1.1 standard were released under RFC 2616 in June 1999. 
- HTTP version 2.0: The HTTP version 2.0 specification was published as RFC 7540 on May 14, 2015. 
- HTTP version 3.0: HTTP version 3.0 is based on the previous RFC draft. It is renamed as Hyper-Text Transfer Protocol QUIC which is a transport layer network protocol developed by Google.


## HTTP/1.1 — Pipelining and Head-of-Line Blocking

The first response that a client receives on an HTTP GET request is often not the fully rendered page. Instead, it contains links to additional resources needed by the requested page. The client discovers that the full rendering of the page requires these additional resources from the server only after it downloads the page. Because of this, the client will have to make additional requests to retrieve these resources. In HTTP/1.0, the client had to break and remake the TCP connection with every new request, a costly affair in terms of both time and resources.

```
HTTP/1.1 takes care of this problem by introducing persistent connections and pipelining. With persistent connections, HTTP/1.1 assumes that a TCP connection should be kept open unless directly told to close. This allows the client to send multiple requests along the same connection without waiting for a response to each, greatly improving the performance of HTTP/1.1 over HTTP/1.0.
```

## What is HTTP/2?

In 2015, a new version of HTTP called HTTP/2 was created. HTTP/2 solves several problems that the creators of HTTP/1.1 did not anticipate. In particular, HTTP/2 is much faster and more efficient than 
HTTP/1.1. One of the ways in which HTTP/2 is faster is in how it prioritizes content during the loading process.

### What is prioritization?
In the context of web performance, prioritization refers to the order in which pieces of content are loaded. Suppose a user visits a news website and navigates to an article. Should the photo at the
top of the article load first? Should the text of the article load first? Should the banner ads load first?

Prioritization affects a webpage's load time. For example, certain resources, like large JavaScript files, may block the rest of the page from loading if they have to load first. More of the page can 
load at once if these render-blocking resources load last.

```
HTTP/2 offers a feature called weighted prioritization. This allows developers to decide which page resources will load first, every time. In HTTP/2, when a client makes a request for a webpage,
 the server sends several streams of data to the client at once, instead of sending one thing after another.

This method of data delivery is known as multiplexing. Developers can assign each of these data streams a different weighted value, and the value tells the client which data stream to render first.
```

```
Unfortunately, there is a natural bottleneck to this optimization strategy. Since multiple data packets cannot pass each other when traveling to the same destination, there are situations in which a request at the head of the queue that cannot retrieve its required resource will block all the requests behind it. This is known as head-of-line (HOL) blocking, and is a significant problem with optimizing connection efficiency in HTTP/1.1. Adding separate, parallel TCP connections could alleviate this issue, but there are limits to the number of concurrent TCP connections possible between a client and server, and each new connection requires significant resources.
```

## Diffrence between HTTP1.1/HTTP2

- Multiplexing:
  HTTP/1.1 loads resources one after the other, so if one resource cannot be loaded, it blocks all the other resources behind it.
  In contrast, HTTP/2 is able to use a single TCP connection to send multiple streams of data at once so that no one resource blocks any other resource.
  HTTP/2 does this by splitting data into binary-code messages and numbering these messages so that the client knows which stream each binary message belongs to.

- Server push:
  Typically, a server only serves content to a client device if the client asks for it. However, this approach is not always practical for modern webpages, which often involve several
  dozen separate resources that the client must request. HTTP/2 solves this problem by allowing a server to "push" content to a client before the client asks for it. 

- Header compression:
  Small files load more quickly than large ones. To speed up web performance, both HTTP/1.1 and HTTP/2 compress HTTP messages to make them smaller.



## What is HTTP/3?
HTTP/3 is the next proposed version of the HTTP protocol. HTTP/3 does not have wide adoption on the web yet, but it is growing in usage. The key difference between HTTP/3 and previous versions 
of the protocol is that HTTP/3 runs over QUIC instead of TCP. QUIC is a faster and more secure transport layer protocol that is designed for the needs of the modern Internet.









