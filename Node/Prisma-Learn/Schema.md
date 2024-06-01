# Prisma Schema
 The schema file is written in Prisma Schema Language (PSL).
The Prisma schema file (short: schema file, Prisma schema or schema) is the main configuration file for your Prisma ORM setup. It is typically called schema.prisma and consists of the following parts:

  - Data sources: Specify the details of the data sources Prisma ORM should connect to (e.g. a PostgreSQL database)
  - Generators: Specifies what clients should be generated based on the data model (e.g. Prisma Client)
  - Data model definition: Specifies your application models (the shape of the data per data source) and their relations
Whenever a prisma command is invoked, the CLI typically reads some information from the schema file, e.g.:

    - prisma generate: Reads all above mentioned information from the Prisma schema to generate the correct data source client code (e.g. Prisma Client).
    - prisma migrate dev: Reads the data sources and data model definition to create a new migration.
The default name for the schema file is schema.prisma. When your schema file is named like this, the Prisma CLI will detect it automatically in the directory where you invoke the CLI command (or any of its subdirectories).

If the file is named differently, you can provide the --schema argument to the Prisma CLI with the path to the schema file, e.g.:

`prisma generate --schema ./database/myschema.prisma`

