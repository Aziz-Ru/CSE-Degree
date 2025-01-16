# Backend Communication Pattern

Discussing All Backend Communication Patter.How server handle client.

## Synchronous & Asynchronous

Synchronous processing is done sequentially and in a specific order, while asynchronous processing is done in concurrently or parrallel.

### Synchronous IO

- Caller sends a request and block
- Caller cannot execute any code meanwhile
- Receiver responds, Caller unblockes
- Caller and Receiver are in synch

### Asynchronous IO

- Caller sends a request
- Caller can work until it gets a response
- Caller either:
- Checks if the response is ready
- Receiver calls back when it's done

## Push

- Client connects to a server
- Server sends data to the client
- Client does'nt have to request anything

### Pros

- Real Time

### Const

- Client must be Online
- Client might not be able to handle(what heappend server sends tons of notification,how this handle by client)

Push is used By RabbitMQ .In RabbitMQ When you submit a message the queue system and RabbitMQ client consumes RabbitMQ push the content

## Short Polling

## Long Polling

## Server Sent Events

## Publish Subscribe

One Publisher and many Readers

### Pros

- Scale multiple reveivers
- Great for microservices
- Loose Coupling
- Works while clients not running

### Cons
- Complexity- Message Delivery Issues 