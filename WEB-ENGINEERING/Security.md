# Security

The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet and similar computer networks according to functional criteria.
The foundational protocols in the suite are the Transmission Control Protocol (TCP), the User Datagram Protocol (UDP), and the Internet Protocol (IP). 

### The Domain Name System

Browsers and other internet-connected software can recognize and route traffic to IP addresses, but IP addresses aren’t particularly memorable for humans.o make website addresses friendlier to users, we use a global
directory called the Domain Name System (DNS).to translate human-readable domains like example.com to IP addresses like 93.184.216.119. Domain names are simply placeholders for IP addresses.Domain names, like IP addresses, are unique, and have to be registered before use with private organizations called domain registrars.

When browsers encounter a domain name for the first time, they use a local domain name server (typically hosted by an ISP) to look it up, and then cache the result to prevent time-consuming lookups in the future. This
caching behavior means that new domains or changes to existing domains take a while to propagate on the internet. Exactly how long this propagation takes is controlled by the time-to-live (TTL) variable, which is set on the DNS record and instructs DNS caches when to expire the record. DNS caching enables a type of attack called DNS poisoning, whereby a local DNS cache is deliberately corrupted so that data is routed to a server controlled by an attacker.

## Application Layer Protocols

TCP allows two computers to reliably exchange data on the internet, but it doesn’t dictate how the data being sent should be interpreted. For that to happen, both computers need to agree to exchange information through another, higher-level protocol in the suite.
Emails are sent using the Simple Mail Transport Protocol (SMTP), instant messaging software often uses the Extensible Messaging and Presence Protocol (XMPP), file servers make downloads available via the File Transfer Protocol (FTP), and web servers use the HyperText Transfer Protocol (HTTP).

## HyperText Transfer Protocol

Web servers use the HyperText Transfer Protocol (HTTP) to transport web pages and their resources to user agents such as web browsers.Web servers, expecting these requests, return responses containing either the requested resource, or an error code if the request can’t be fulfilled.

### HTTP Requests
**Method** Also known as a verb, this describes the action that the user agent wants the server to perform.
**Universal resource locator (URL)** This describes the resource being manipulated or fetched.
**Headers** These supply metadata such as the type of content the user agent is expecting or whether it accepts compressed responses.
**Body** This optional component contains any extra data that needs to be sent to the server.

### HTTP Responses

HTTP responses sent back by a web server begin with a protocol description, a three-digit status code, and, typically, a status message that indicates whether the request can be fulfilled.

### Stateful Connections

To allow for this, HTTP conversations need to be made stateful. A connection or conversation between a client and a server is stateful when they perform a “handshake” and continue to send packets back and forth until one of the communicating parties decides to terminate the connection.

When a web server wants to keep track of which user it’s responding to with each request, and thus achieve a stateful HTTP conversation, it needs to establish a mechanism to track the user agent as it makes the subsequent requests. The entire conversation between a particular user agent and a web server is called an HTTP session. The most common way of tracking sessions is for the server to send back a Set-Cookie header in the initial HTTP response. This asks the user agent receiving the response to store a cookie, a small snippet of text data pertaining to that particular web domain. The user agent then returns the same data in the Cookie header of any subse- quent HTTP request to the web server.

### Encryption
When the web was first invented, HTTP requests and responses were sent in plaintext form, which meant they could be read by anyone intercepting the data packets; this kind of interception is known as a man-in-the-middle attack.

To secure their communications, web servers and browsers send requests and responses by using Transport Layer Security (TLS), a method of encryption that provides both privacy and data integrity. TLS ensures that packets intercepted by a third party can’t be decrypted without the appropriate encryption keys. It also ensures that any attempt to tamper with the packets will be detectable, which ensures data integrity. HTTP conversations conducted using TLS are called HTTP Secure (HTTPS). HTTPS requires the client and server to perform a TLS handshake in which both parties agree on an encryption method (a cipher) and exchange encryption keys.
Once the handshake is complete, any further messages (both requests and responses) will be opaque to outsiders. Encryption is a complex topic but is key to securing your website.

### Web Page Rendering

The software component within a web browser that’s responsible for transforming a web page’s HTML into the visual representation you see onscreen is called the rendering pipeline.
The rendering pipeline isresponsible for parsing the page’s HTML, understanding the structure and content of the document, and converting it to a series of drawing operations that the operating system can understand.When the browser receives an HTTP response, it parses the HTML in the body of the response into a Document Object Model (DOM): an in-memory data structure that represents the browser’s understanding of the way the page is structured. Generating the DOM is an interim step between parsing the HTML and drawing it onscreen. 
When the browser receives an HTTP response, it parses the HTML in the body of the response into a Document Object Model (DOM): an in-memory data structure that represents the browser’s understanding of the way the page is structured. Generating the DOM is an interim step between parsing the HTML and drawing it onscreen. In modern HTML, the layout of the page can’t be determined until the whole of the HTML is parsed, because the order of the tags in the HTML doesn’t necessarily determine the location of their content.

## HOW WEB SERVERS WORK
a web server is a computer program that sends back HTML pages in response to HTTP requests.

### Static Resources

The “deployment” of a website required the developer to copy all the HTML files to the web server and restart the server process.When a user wished to visit the website, they would type the website’s URL in their browser.The browser would make an HTTP
request to the web server hosting the website, which would interpret the incoming URL as a request for a file on disk. Finally, the web server would return the HTML file as is in the HTTP response.

When returning a static resource, modern web servers often add data to the HTTP response or process the static resource before returning it. For example, web servers often dynamically compress large resource files by using the gzip algorithm to reduce the bandwidth used in the response, or add caching headers in HTTP responses to instruct the browser to cache and use a local copy of a static resource if a user views it again within a defined window of time. This makes the website more responsive for the user and reduces the load the server has to handle.Because static resources are simply files of one form or another, they don’t, by themselves, exhibit much in the way of security vulnerabilities.The process of resolving a URL to a file can introduce vulnerabilities, however. If a user designates certain types of files to be private (for example, the images they upload), you will need to have access control rules defined on the web server.

### Content Delivery Networks

A modern innovation designed to improve the delivery speeds of static files is the content delivery network (CDN), which will store duplicated copies of static resources in data centers around the world, and quickly deliver those resources to browsers from the nearest physical location.

### Content Management Systems
Plenty of websites still consist of mostly static content. Rather than being coded by hand, these sites are generally built using content management systems (CMSs) that provide authoring tools requiring little to no technical knowledge to write the content.

## INJECTION ATTACKS

### SQL Injection
SQL injection attacks target websites that use an underlying SQL database and construct data queries to the database in an insecure fashion. SQL injection attacks pose one of the greatest risks to websites because SQL databases are so common.
By injecting malicious SQL code into input fields or parameters, the attacker can manipulate the database in unintended ways, potentially gaining unauthorized access to sensitive data, modifying or deleting information, or even taking control of the database server.
SQL injection attacks occur when the web server insecurely constructs the SQL statement it passes to the database driver.This allows the attacker to pass arguments via the HTTP request that cause the driver to perform actions other than those the developer intends.

#### Use Parameterized Statements
To protect against SQL injection attacks, your code needs to construct SQL strings using bind parameters. Bind parameters are placeholder characters that the database driver will safely replace with some supplied inputs

#### Use Object-Relational Mapping
Many web server libraries and frameworks abstract away the explicit construction of SQL statements in code and allow you to access data objects by using object-relational mapping. Object-relational mapping (ORM) libraries map rows in database tables to code objects in memory, meaning the developer generally doesn’t have to write their own SQL statements in order to read from and update the database.

### Command Injection
Another type of injection attack is command injection, which attackers can use to exploit a website that makes insecure command line calls to the underlying operating system.

#### Escape Control Characters
This means replacing sensitive control characters (like the & character in our example) with a safe alternative.

### Remote Code Execution

attackers can inject malicious code to be executed in the language of the web server itself, a tactic called remote code execution.

An attacker can achieve remote code execution by discovering a vulnerability in a particular type of web server, and then creating exploit scripts to target websites running on that web server technology. The exploit script incorporates malicious code in the body of the HTTP request, encoded in such a way that the server will read and execute that code when the request is handled.

#### Disable Code Execution During Deserialization

Remote code execution vulnerabilities usually occur when web server software uses insecure serialization.

Serialization is the process of converting an in-memory data structure into a stream of binary data, usually for the purpose of passing the data structure across a network. 
Deserialization refers to the reverse process that occurs at the other end, when the binary data is converted back into a data structure.

### File Upload Vulnerabilities

Websites use file upload functions for a variety of purposes: letting users add images to their profile or posts, adding attachments to messages, submitting paperwork, sharing documents with other users, and so on. Browsers make it easy to upload files via
built-in file-upload widgets and JavaScript APIs that allow you to drag files onto a web page and send them asynchronously to the server.

#### Host Files on a Secure System
#### Ensure Uploaded Files Cannot Be Executed
#### Validate the Content of Uploaded Files
#### Run Antivirus Software

## CROSS-SITE SCRIPTING ATTACKS
Cross-Site Scripting (XSS) is a type of security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. These scripts are typically written in JavaScript and are executed in the browser of the victim, potentially leading to data theft, session hijacking, or unauthorized actions.
### Stored XSS (Persistent XSS)
- The malicious script is permanently stored on the server (e.g., in a database, message board, or comment section).
- When other users load the affected page, the script executes in their browsers.

### Reflected XSS (Non-Persistent XSS)
- The malicious script is part of the URL or a request parameter and is reflected back by the server in the response.
- Victims are tricked into clicking a malicious link that executes the script.

### DOM based XSS
- The attack occurs entirely within the client-side code (JavaScript) without involving the server.
- Vulnerabilities in the DOM (Document Object Model) allow the malicious script to execute.


## CROSS-SITE REQUEST FORGERY ATTACKS

An attacker can trick a user into clicking a malicious link that triggers undesirable or unexpected side effects. This is called cross-site request forgery (CSRF or XSRF).

- The victim logs into a web application (e.g., banking website) and obtains a valid session cookie.
- The attacker crafts a malicious request (e.g., a form submission or URL) that performs an action on the victim’s behalf (e.g., transferring money).
- The victim is tricked into interacting with the malicious link or form (e.g., clicking a link or visiting a malicious webpage).
- Since the victim is already authenticated, the server processes the malicious request as if it were authorized by the victim.

#### Preventing CSRF Attacks
- Use Anti-CSRF Token
- SameSite Cookies:Set cookies with the SameSite attribute to restrict them from being sent with cross-origin requests.
- Implement CORS (Cross-Origin Resource Sharing):Restrict which domains can send requests to your application using CORS policies.

## SESSION HIJACKING
When a website successfully authenticates a user, the browser and the server open a session. A session is an HTTP conversation in which the browser sends a series of HTTP requests corresponding to user actions, and the web server recognizes them as coming from the same authenticated user without requiring the user to log back in for each request. If a hacker can access or forge session information that the browser sends, they can access any user’s account on your site.


## DENIAL- OF-SERVICE ATTACKS
Responding to a network request generally requires more processing power than sending one.When a web server handles an HTTP request, for example, it has to parse the request, run database queries, write data to the logs, and construct the HTML to be returned.The user agent simply has to gener- ate the request containing three pieces of information: the HTTP verb, the IP address it is being sent to, and the URL. Hackers use this asymmetry to overwhelm servers with network requests so they are unable to respond to legitimate users.

#### Firewalls and Intrusion Prevention Systems
#### Distributed Denial-of-Service Protection Services
#### Building for Scale






