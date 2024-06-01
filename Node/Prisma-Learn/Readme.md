# Prisma
- *Prisma ORM* is a next-generation Node.js and TypeScript ORM that unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.
- *Prisma Accelerate* is a global database cache with scalable connection pooling to make your queries fast.

- *Prisma Pulse* allows you to react to database changes with type-safe model subscriptions.
- 
# Prisma ORM Project setup
```
npm init -y
npm i prisma bcryptjs validator jsonwebtoken cookie-parser dotenv  --save-dev
npx prisma init or npx prisma init --datasource-provider databaseName
After this create Schema and migrate
npx prisma migrate dev --name init
generate prisma client
npx prisma generate or npm install @prisma/client


```
*npx prisma init* command does two things:

  - creates a new directory called prisma that contains a file called schema.prisma, which contains the Prisma schema with your database connection variable and schema models
  - creates the .env file in the root directory of the project, which is used for defining environment variables (such as your database connection)

### Connect your database
_prisma/schema.prisma_
```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
In.env file _DBURL="mysql://user:password@localhost:3306/dbNewName"_

- mysql://: This indicates that you're connecting to a MySQL database.
- user:password: This is the username and password for the database user.
- localhost: This is the hostname or IP address of the database server.
- 3306: This is the port number where the MySQL server is listening (typically 3306).
- /prismadb: This is the name of the database you want to connect to.
- ?schema=public: This specifies that you want to use the public schema as the default schema.

## Create Model
Model your data in the Prisma schema
```
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```
## Run a migration to create your database tables with Prisma Migrate

you have a Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

`npx prisma migrate dev --name init`

This command did three things:

  - It created a new SQL migration file for this migration in the prisma/migrations directory.
  - It executed the SQL migration file against the database.
  - It ran prisma generate under the hood (which installed the @prisma/client package and generated a tailored Prisma Client API based on your models).


### Install and generate Prisma Client
`npm install @prisma/client`

This command also runs the `prisma generate `command, which generates Prisma Client into the node_modules/.prisma/client directory.

### Querying the database

Now that you have generated Prisma Client, you can start writing queries to read and write data in your database. For the purpose of this guide, you'll use a plain Node.js script to explore some basic features of Prisma Client.To use Prisma client  just export it from this file.
```
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
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




# Trobolshooting

## Cause special chracter in passoword or username

_Error: P1013: The provided database string is invalid. invalid port number in database URL. Please refer to the documentation in https://www.prisma.io/docs/reference/database-reference/connection-urls for constructing a correct connection string. In some cases, certain characters must be escaped. Please check the string for any illegal characters._

- percent-encoding
  Replace special characters with percent-encodings
  Make sure that in your DATABASE_URL in the .env file, the special characters in your username and password are replaced with percent-encodings For example, in your database URL, if your username or password contains @ character, it should be replaced with its equivalent percent-encoding, that is %40. For # it is %23 and so on.


# Prisma Accelerate
Make your database queries faster by scaling your database connections and caching database results at the edge with Prisma Accelerate.

# Prisma Pulse
Prisma Pulse lets you subscribe to any changes in your database easily and in a type-safe way using Prisma Client, enabling you to trigger events and actions in real-time.


