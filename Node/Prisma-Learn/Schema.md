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


## Model
The data model definition part of the Prisma schema defines your application models (also called Prisma models). Models:

   - Represent the entities of your application domain
   - Map to the tables (relational databases like PostgreSQL) or collections (MongoDB) in your database
   - Form the foundation of the queries available in the generated Prisma Client API
   - When used with TypeScript, Prisma Client provides generated type definitions for your models and any variations of them to make database access entirely type safe.

 The data model definition is made up of:
 
   - Models (model primitives) that define a number of fields, including relations between models
   - Enums (enum primitives) (if your connector supports Enums)
   - Attributes and functions that change the behavior of fields and models
### Defining fields
- A field name
- A field type
- Optional type modifiers
- Optional attributes, including native database type attributes

[Prisma Schema Refrence](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#model-field-scalar-types)

### Default type mappings
-------------
|Connector|Default mapping|
|---------|---------------|
|PostgreSQL|	text         |
|SQL Server|nvarchar(1000)|
|MySQL	    |varchar(191)  |
|MongoDB	  |String        |
|SQLite	   |TEXT|


## MySQL
|Native database type	|Native database type attribute|
|---------|---------------|
|VARCHAR(x)	|@db.VarChar(x)|
|TEXT	|@db.Text|
|CHAR(x)	|@db.Char(x)|
|TINYTEXT	|@db.TinyText|
|MEDIUMTEXT	|@db.MediumText|
|INT	|@db.Int|
|BIGINT	|@db.BigInt|
|FLOAT	|@db.Float|
|DOUBLE	|@db.Double|
|INT UNSIGNED	|@db.UnsignedInt|
|SMALLINT	|@db.SmallInt|
|SMALLINT UNSIGNED	|@db.UnsignedSmallInt|
|MEDIUMINT	|@db.MediumInt|
|MEDIUMINT UNSIGNED	|@db.UnsignedMediumInt|
|DATETIME(x)	|@db.DateTime(x)|
|DATE(x)	|@db.Date(x)|
|TIME(x)	|@db.Time(x)|
|TIMESTAMP(x)	|@db.Timestamp(x)|
|JSON	|@db.Json|
|YEAR	|@db.Year|


```
model Model {
  /* ... */
  myField String @db.Bit(1)
}
```
## ? modifier
Makes a field optional.

## Attributes
Attributes modify the behavior of a field or block (e.g. models). There are two ways to add attributes to your data model:

   - Field attributes are prefixed with @
   - Block attributes are prefixed with @@


