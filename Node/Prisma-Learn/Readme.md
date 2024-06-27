# Prisma

- To install Prism _npm i -D prisma_
- To initialize prisma _npx prisma init_. It create defualt datasource-provider postgresql database connection or you can run _npx prisma init --datasource-provider database_

# Prisma Client

Prisma Client is an auto-generated and type-safe query builder that's tailored to your data.

Install Prisma Client in your project with the following command:

`npm install @prisma/client`

This command also runs the `prisma generate `command, which generates Prisma Client into the node_modules/.prisma/client directory.

### Importing Prisma Client

Create a file _scripts.js_ that exports prisma client.

```
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module exports=prisma;

// use `prisma` in your application to read and write data in your DB
```

### Use Prisma Client to send queries to your database

Once you have instantiated PrismaClient, you can start sending queries in your code:

```_npx prisma init --datasource-provider _
// run inside `async` function
const newUser = await prisma.user.create({
  data: {
    name: 'Alice',
    email: 'alice@prisma.io',
  },
})

const users = await prisma.user.findMany()
```

### Evolving your application

Whenever you make changes to your database that are reflected in the Prisma schema, you need to manually re-generate Prisma Client to update the generated code in the node_modules/.prisma/client directory:
`prisma generate`

## prisma command

- _npx prisma init_ Set up Prisma for your app
- _npx prisma generate_ Generate artifacts (e.g. Prisma Client)
- _npx prisma db_ Manage your database schema and lifecycle
- _npx prisma migrate dev_ Migrate your database.
- _npx prisma studio_ Browse your data with Prisma Studio
- _npx prisma validate_ Validate your Prisma schema
- _npx prisma format_ Format your Prisma schema
- _npx prisma version_ Displays Prisma version info
- _npx prisma debug_ Displays Prisma debug info

### migrate model

`$ prisma migrate dev --name init`

- --name init: This specifies the name of the migration to be generated. In this case, it's init, which is the first migration that typically creates the database schema.

### DB URL

DATABASE_URL="mysql://user:password@localhost:3306/prismadb?schema=public"

- mysql://: This indicates that you're connecting to a MySQL database.
- user:password: This is the username and password for the database user.
- localhost: This is the hostname or IP address of the database server.
- 3306: This is the port number where the MySQL server is listening (typically 3306).
- /prismadb: This is the name of the database you want to connect to.
- ?schema=public: This specifies that you want to use the public schema as the default schema.

## schema.prisma

```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

- provider: Specifies the mysql data source connector, which is used both for MySQL and MariaDB.
- url: Specifies the connection URL for the MySQL database server. In this case, an environment variable is used to provide the connection URL.

# Trobolshooting

## Cause special chracter in passoword or username

_Error: P1013: The provided database string is invalid. invalid port number in database URL. Please refer to the documentation in https://www.prisma.io/docs/reference/database-reference/connection-urls for constructing a correct connection string. In some cases, certain characters must be escaped. Please check the string for any illegal characters._

- percent-encoding
  Replace special characters with percent-encodings
  Make sure that in your DATABASE_URL in the .env file, the special characters in your username and password are replaced with percent-encodings For example, in your database URL, if your username or password contains @ character, it should be replaced with its equivalent percent-encoding, that is %40. For # it is %23 and so on.
