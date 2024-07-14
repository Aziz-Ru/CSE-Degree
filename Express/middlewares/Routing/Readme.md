# Routing

Routing refers to how an application’s endpoints (URIs) respond to client requests.

You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests.

## Response methods

- ### res.download()

Prompt a file to be downloaded.

- ### res.end()

End the response process.

- ### res.json()

Send a JSON response.

- ### res.jsonp()

Send a JSON response with JSONP support.

- ### res.redirect()

Redirect a request.

- ### res.render()

Render a view template.

- ### res.send()

Send a response of various types.

- ### res.sendFile()

  Send a file as an octet stream.

## app.route()

You can create chainable route handlers for a route path by using app.route(). Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos.

## express.Router

Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

## express.Router([options])

- caseSensitive: Enable case sensitivity. Disabled by default, treating “/Foo” and “/foo” as the same.

- strict: Disabled by default, “/foo” and “/foo/” are treated the same by the router.
