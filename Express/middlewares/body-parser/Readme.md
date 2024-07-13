## body-parser

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

### Installation

`npm install body-parser`

### API

#### bodyParser.json([options])

Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.

#### option

- limit :

Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing. Defaults to '100kb'.

- strict

When set to true, will only accept arrays and objects; when false will accept anything JSON.parse accepts. Defaults to true.

- type

The type option is used to determine what media type the middleware will parse. This option can be a string, array of strings, or a function. If not a function, type option is passed directly to the type-is library and this can be an extension name (like json), a mime type (like application/json), or a mime type with a wildcard (like _/_ or \*/json). If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value. Defaults to application/json.
