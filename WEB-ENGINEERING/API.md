# Application Programming Interface
An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other.

- Web APIs (HTTP APIs)
- Library APIs
- Operating System APIs
- Database APIs

## Based on Architecture

### REST API (Representational State Transfer):
- REST is an architectural style for building APIs based on stateless interactions.
- It uses standard HTTP methods like GET, POST, PUT, DELETE.
- REST APIs are resource-based, and each endpoint represents a resource.

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
