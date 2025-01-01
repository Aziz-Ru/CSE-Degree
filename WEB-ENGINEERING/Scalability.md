# Scalability
Scalability can be defined as a system's ability to adjust in a cost-effective manner in order to fulfill the demands of that system. This "cost" is not always monetary - it can include time investment, the amount of maintenance required (automation versus manual), as well as the human resources needed to keep the system running successfully.

A system needs to be able to grow to adequately handle more users, process more data, and handle more transactions or client requests without affecting the overall user experience. A well-scaled system should also allow scaling down. Although scaling down is mostly less important than scaling up, it is important to save costs and not use more than what is required.

most scalability issues can be categorized into these 3 areas
- Ability to serve more users
As users of an application increase, more pressure is put on the system to serve each user accordingly. Users operate on the software in isolation from one another, which makes it difficult for them to hear the excuse that other users are causing their experience to worsen. A properly scaled application should be ready to handle an increasing number of concurrent users using the application without affecting each user's experience.

- Ability to process more data
Imagine an invoice system that needs to calculate the gross total amount for the sales in a year for a product. At an average of a thousand sales a year, the system handles this fine. Suddenly, the product becomes popular due to a boost in ad campaigns and now the system has to process hundreds of thousands of sales in a single year. Such a scenario would put a lot of pressure on the logic in the system that has to calculate the total gross amount for a year's sales. The process would take a longer time to complete and the system could easily run out of memory and terminate the process.

- Ability to handle high interaction rates
Clients of applications like e-commerce sites make a fair amount of requests to their backend servers. For some of these low-interaction sites, the difference in time between consecutive requests can be as much as 10 to 100 seconds.


## stategies

### Increasing hardware capabilities
This is often referred to as vertical scaling. You can scale up your servers by adding more memory to expand the amount of data the software process can hold, and increasing the number of CPU for more processing threads and distributed processing with faster context switches. 

### Load Balancing
This is often referred to as horizontal scaling, and is considered more effective for handling concurrency and network traffic issues than vertical scaling. This strategy makes use of a proxy server known as a load balancer to distribute client requests to numerous instances of the backend service. This helps distribute traffic to multiple machines and avoid overloading a single one. Traffic can be distributed evenly (round-robin) or based on the current amount of load each instance is handling

### CDN
Content delivery networks (CDNs) help solve latency issues by providing highly available and performant proxy servers for your static content. These servers are geographically distributed to serve users based on their proximity to the servers and data centers.

### Asynchronous processing
Most server transactions follow a request/response synchronous process. This means that the client has to wait for the server to respond and the server also has to complete a requested task and send a response before continuing with other tasks. These days, with microservices and service-oriented architectures and the need to handle long-running tasks, the client cannot afford to (always) wait for a response from the server before performing other tasks.
This has brought about the introduction of systems like message queues and pub/sub systems for asynchronous processing to allow the clients to carry on with other activities while the server processes tasks, and also for inter-process communication between servers.

### GeoDNS
Latency increases when a request has to make a lot of network hops around servers across the world before it reaches the server that is to process it. GeoDNS gives a spatial advantage by allowing users to communicate with the servers closest to them

### Caching
Caching encourages re-usability in data-intensive applications. Imagine having to make a network request to fetch your profile every time you visit your profile page on Facebook. Data such as profile information rarely changes, thus it is wise to reuse the piece of information fetched the first time it was loaded and only update it when the user makes an update to their profile.
Caching helps drastically reduce the number of requests the client makes to the server and also improves speed, as cached information is faster to retrieve than trying to fetch it from the database.







