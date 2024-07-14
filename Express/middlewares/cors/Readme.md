## Cors

Cross-Origin Resource Sharing (CORS) is a security mechanism implemented by web browsers to restrict access to resources from a different domain.
It is designed to prevent malicious attacks such as cross-site scripting (XSS) and cross-site request forgery (CSRF).

CORS is a mechanism that allows a web server to specify which domains are allowed to access its resources. When a client makes a request to a server, the server includes a special header called Access-Control-Allow-Origin in its response. This header specifies which domain is allowed to access the resources. If the requesting domain is not in the allowed list, the browser will block the request.

## Configuring CORS

```
var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

```

```
var allowlist = ['http://example1.com', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
```
