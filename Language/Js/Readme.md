# Node A Javascript Runtime

Node.js uses the concept of module as a fundamental mean to structure the code of a
program.

This principle has its roots in the Unix philosophy, particularly in two of its
precepts, which are as follows:

- "Small is beautiful."
- "Make each program do one thing well."

Having smaller and more focused modules empowers everyone to share or reuse
even the smallest piece of code; it's the Don't Repeat Yourself (DRY) principle
applied at a whole new level.

Keep It Simple, Stupid (KISS) principle? Or the
famous quote:
"Simplicity is the ultimate sophistication."

- Leonardo da vancy

**we will analyze the reactor pattern, which is the heart of the Node.js
asynchronous nature.**

## Non-blocking I/O

In a blocking I/O operation, the program waits until the operation completes before continuing with the next
line of code. The execution is paused or "blocked" during this time.

## Non-Blocking I/O

In a non-blocking I/O operation, the program initiates the operation and continues executing other tasks without waiting for the operation to complete.
Instead of waiting, it gets notified when the response or data is ready (via a callback, event loop, or future/promise).

## Event demultiplexing

In digital circuits, a demultiplexer (or “demux”) is a device that takes a single input signal and routes it to one of several outputs.

In Node.js, the idea is adapted to manage I/O operations and events. The Event Demultiplexer in Node.js operates within the Reactor
pattern—a core architectural design that enables non-blocking, asynchronous I/O.
Node.js uses an event-driven architecture where multiple I/O tasks can be handled concurrently, even if running on a single thread.

most modern operating systems provide a native mechanism
to handle concurrent, non-blocking resources in an efficient way; this mechanism
is called synchronous event demultiplexer or event notification interface
This
component collects and queues I/O events that come from a set of watched
resources, and block until new events are available to process.

## The reactor pattern

The Reactor pattern is the backbone of Node.js, and the Event Demultiplexer is an important part of this pattern.
It enables Node.js to handle multiple I/O operations concurrently without creating multiple threads, making it highly efficient and scalable.

### How It Works in Node.js

a. **Event Loop**

- The core of the Reactor Pattern in Node.js.
- Continuously checks for events or tasks to be executed (e.g., I/O operations, timers, or callbacks).
- Executes them sequentially on the main thread.

b. **Event Demultiplexer**

- A mechanism that listens for multiple I/O events (e.g., network requests, file system operations).
- In Node.js, this is achieved through `libuv`, a library that provides an abstraction over OS-level I/O operations.
- Event Demultiplexer in Node.js (implemented through libuv) does utilize multi-threading under the hood for handling specific types of I/O operations.

c. **Callbacks**

- Functions that are registered to handle specific events when they occur.
- When an event is triggered, the corresponding callback is added to the event loop's task queue for execution.

d. **System Kernel**

- Performs the actual I/O operations asynchronously.
- Notifies the event demultiplexer when the operations are complete.

### Lifecycle of the Reactor Pattern in Node.js

1.**Event Submission:**

- An asynchronous I/O operation (e.g., reading a file) is initiated.
- The operation is handed off to the system kernel via libuv.

  2.**I/O Monitoring:**

- The system kernel monitors the status of the I/O operation.
- The event loop remains free to handle other tasks while waiting.

  3.**Event Completion:**

- Once the I/O operation completes, the kernel notifies the event demultiplexer.

  4.**Callback Execution:**

- The callback associated with the I/O operation is added to the event loop's task queue.
- The event loop picks up the task and executes the callback.

<img src=""/>

\***\*This is what happens in an application using the reactor pattern:\*\***

1. The application generates a new I/O operation by submitting a request to
   the Event Demultiplexer. The application also specifies a handler, which will be invoked when the operation completes.Submitting a new request to the
   Event Demultiplexer is a non-blocking call and it immediately returns the
   control back to the application.

2. When a set of I/O operations completes, the Event Demultiplexer pushes the
   new events into the Event Queue.

3. At this point, the Event Loop iterates over the items of the Event Queue.

4. For each event, the associated handler is invoked.

5. The handler, which is part of the application code, will give back the control to the Event Loop when its execution completes (5a).

6. When all the items in the Event Queue are processed, the loop will block again on the Event Demultiplexer which will then trigger another cycle.

#### Why need Event loop

The Event Demultiplexer (via libuv) completes the low-level I/O operations, but it must still send the result to the Event Loop and task queue because Node.js uses a single-threaded JavaScript runtime for executing all application-level code.

## The non-blocking I/O engine of Node.js – libuv

Each operating system has its own interface for the Event Demultiplexer:
epoll on Linux, kqueue on Mac OS X, and I/O Completion Port API (IOCP) on
Windows. Besides that, each I/O operation can behave quite differently depending
on the type of the resource, even within the same OS. For example, in Unix, regular
filesystem files do not support non-blocking operations, so, in order to simulate a
non-blocking behavior, it is necessary to use a separate thread outside the Event
Loop. All these inconsistencies across and within the different operating systems
required a higher-level abstraction to be built for the Event Demultiplexer. This is
exactly why the Node.js core team created a C library called libuv, with the
objective to make Node.js compatible with all the major platforms and normalize
the non-blocking behavior of the different types of resource; libuv today represents
the low-level I/O engine of Node.js.

libuv also implements the reactor
pattern, thus providing an API for creating event loops, managing the event queue,
running asynchronous I/O operations, and queuing other types of tasks.

## The recipe for Node.js

The reactor pattern and libuv are the basic building blocks of Node.js, but we need
the following three other components to build the full platform

•A set of bindings responsible for wrapping and exposing libuv and other low-level functionality to JavaScript.

•V8, the JavaScript engine originally developed by Google for the Chrome browser. This is one of the reasons why Node.js is so fast and efficient. V8 is acclaimed for its revolutionary design, its speed, and for its efficient
memory management.

•A core JavaScript library (called node-core) that implements the high-level
Node.js API.

## The callback pattern

Callbacks are the materialization of the handlers of the reactor pattern and they are literally one of those imprints that give Node.js its distinctive programming style.Callbacks are functions that are invoked to propagate the result of an operation and this is exactly what we need when dealing with asynchronous operations.

## Asynchronous continuation-passing style

Now, let's consider the case where the add() function is asynchronous, which is
as follows:

```
function addAsync(a, b, callback) {
setTimeout(function() {
callback(a + b);
}, 100);
}
```

In the previous code, we simply use setTimeout() to simulate an asynchronous
invocation of the callback. Now, let's try to use this function and see how the order
of the operations changes

```
console.log('before');
addAsync(1, 2, function(result) {
console.log('Result: ' + result);
});
console.log('after');
```

Output:

```
before
after
Result: 3
```

<img src="async_continious_passing_style.png"/>

```
A synchronous function blocks until it completes its operations.

An asynchronous function returns immediately and the result is passed to a handler (in our case, a callback) at a later cycle of the event loop.
```

## Node.js callback conventions

- Callbacks come last
- Error comes first

## Node.js modules explained

CommonJS is a group with the aim to standardize the JavaScript ecosystem, and one of their most popular proposals is called CommonJS modules.

Node.js built its module system on top of this specification, with the addition of some custom extensions.

To describe how it works, we can make an analogy with the revealing module pattern,
where each module runs in a private scope, so that every variable that is defined
locally does not pollute the global namespace.

## homemade module loader
