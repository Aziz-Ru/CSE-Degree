# Load Balancing
Load balancing is a crucial component of System Design, as it helps distribute incoming requests and traffic evenly across multiple servers. The main goal of load balancing is to ensure high availability, reliability, and performance by avoiding overloading a single server and avoiding downtime.
Typically a load balancer sits between the client and the server accepting incoming network and application traffic and distributing the traffic across multiple backend servers using various algorithms. 


How Load Blancer Works:
    - The load balancer receives a request from a client or user.
    - The load balancer evaluates the incoming request and determines which server or resource should handle the request. This is done based on a predefined load-balancing algorithm that takes into account factors such as server capacity, server response time, number of active connections, and geographic location.
    - The load balancer forwards the incoming traffic to the selected server or resource.
    - The server or resource processes the request and sends a response back to the load balancer.
    - The load balancer receives the response from the server or resource and sends it to the client or user who made the request.

## Load Balancing Algorithms
A load balancing algorithm is a method used by a load balancer to distribute incoming traffic and requests among multiple servers or resources. The primary purpose of a load balancing algorithm is to ensure efficient utilization of available resources, improve overall system performance, and maintain high availability and reliability.

### Round Robin
This algorithm distributes incoming requests to servers in a cyclic order. It assigns a request to the first server, then moves to the second, third, and so on, and after reaching the last server, it starts again at the first.

### Least Connections
The Least Connections algorithm is a dynamic load balancing technique that assigns incoming requests to the server with the fewest active connections at the time of the request. 

### Weighted Round Robin
Weighted Round Robin (WRR) is an enhanced version of the Round Robin load balancing algorithm. It assigns weights to each server based on their capacity or performance, distributing incoming requests proportionally according to these weights.

### Weighted Least Connections
Weighted Least Connections is an advanced load balancing algorithm that combines the principles of the Least Connections and Weighted Round Robin algorithms. It takes into account both the current load (number of active connections) on each server and the relative capacity of each server (weight). This approach ensures that more powerful servers handle a proportionally larger share of the load, while also dynamically adjusting to the real-time load on each server

### IP Hash
IP Hash load balancing is a technique that assigns client requests to servers based on the client's IP address. The load balancer uses a hash function to convert the client's IP address into a hash value, which is then used to determine which server should handle the request. This method ensures that requests from the same client IP address are consistently routed to the same server, providing session persistence.

## Uses of Load Balancing
- Improving website performance
- Ensuring high availability and reliability
-  Scalability
-  Redundancy
-  Network optimization
-  Geographic distribution
-  Application performance
-  Security
-  Cost savings
-  Content caching

## Challenges of Load Balancers
-  Single Point of Failure
-  Configuration Complexity
-  Scalability Limitations
-  Latency
-   Sticky Sessions
-   Cost
-   Health Checks and Monitoring






