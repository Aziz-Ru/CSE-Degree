# Application Programming Interface
An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other.


- Web APIs (HTTP APIs)
- Library APIs
- Operating System APIs
- Database APIs

## Web API
A Web API, or Web Application Programming Interface, is a set of rules and protocols allowing different software applications to communicate over the Internet in a distributed environment.


## Based on Architecture

### REST API (Representational State Transfer):
REST (stands for Representational State Transfer) is an Architectural Design Pattern used for Exchanging Data over a Distributed Environment. With Rest, there is something called a Client and a Server, and the data will be exchanged between the client and server over a distributed environment. 


The REST Architectural Pattern treats Each Service as a Resource, and a client can consume these resources (perform CRUD Operations) by using HTTP Protocol Methods (GET, POST, PUT, DELETE) and URIs. 
- REST is an architectural style for building APIs based on stateless interactions.
- It uses standard HTTP methods like GET, POST, PUT, DELETE.
- REST APIs are resource-based, and each endpoint represents a resource.

#### What are the REST Principles?
##### Client Server Architecture
A RESTful system must have a clear separation of concerns between the client (responsible for the user interface) and the server (responsible for data storage, processing, and application logic). The client and server communicate through a standardized interface (usually HTTP).

- It allows both client-side and server-side components to be developed and deployed independently.
- Changes in the client’s UI do not require changes in the server’s architecture, and vice versa.

##### Stateless
The stateless constraint specifies that client-server communication must be stateless between requests. That means the server should not store any information, i.e., session state related to the client on the server. Each request from the client to the server must contain all the necessary information so that the server can identify the client and process that request

##### Cacheable
In real-time applications, some data provided by the server is not changed that frequently, like the list of Countries, States, Cities, Products, etc. RESTful APIs can take advantage of HTTP caching mechanisms. Responses from the server should indicate whether a resource is cacheable by the client and, if so, for how long. Caching improves performance and reduces server load by allowing clients (and intermediaries) to reuse responses.


### SOAP API (Simple Object Access Protocol):

- SOAP is a protocol for exchanging structured information in the implementation of web services.
- It uses XML messages and is more rigid and complex compared to REST.
- SOAP APIs are highly standardized and offer features like security (WS-Security), transaction management, and ACID compliance.

### GraphQL:

  - GraphQL is a query language for APIs and a runtime for executing those queries.
  - Unlike REST, GraphQL allows clients to request only the data they need, reducing the amount of data transferred over the network.
  - It provides more flexibility by allowing clients to specify exactly what data they want in a single query.
### gRPC (Google Remote Procedure Call):

  - gRPC is an open-source RPC (Remote Procedure Call) framework developed by Google.
  - It uses HTTP/2 for faster communication and supports multiple programming languages.
  - gRPC allows for communication between client and server using predefined services and method calls.
