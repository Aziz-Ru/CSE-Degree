# Browser Object model
## Window Object
The window object is supported by all browsers. It represents the browser's window.
- window.innerHeight - the inner height of the browser window (in pixels)
- window.innerWidth - the inner width of the browser window (in pixels)
- window.open() - open a new window
- window.close() - close the current window
- window.moveTo() - move the current window
- window.resizeTo() - resize the current window
## Window Location
- window.location.href returns the href (URL) of the current page
- window.location.hostname returns the domain name of the web host
- window.location.pathname returns the path and filename of the current page
- window.location.protocol returns the web protocol used (http: or https:)
- window.location.assign() loads a new document
## JavaScript Timing Events
The window object allows execution of code at specified time intervals.These time intervals are called timing events.
- setTimeout(function, milliseconds): Executes a function, after waiting a specified number of milliseconds..The clearTimeout() method stops the execution of the function specified in setTimeout()

- setInterval(function, milliseconds): Same as setTimeout(), but repeats the execution of the function continuously.The clearInterval() method stops the executions of the function specified in the setInterval() method.
