# HTTP request logger middleware for node.js

`morgan('tiny')`

`morgan(':method :url :status :res[content-length] - :response-time ms')`

## Predefined Formats

## combined

Standard Apache combined log output.
`:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"`

## common

Standard Apache common log output.

`:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]`

## dev

Concise output colored by response status for development use. The :status token will be colored green for success codes, red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for information codes.

`:method :url :status :response-time ms - :res[content-l`

## tiny

The minimal output.

`:method :url :status :res[content-length] - :response-time ms`
