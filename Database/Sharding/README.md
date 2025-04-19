# SHARDING

Sharding is like startegically partitioning a large table into smaller table across multiple database servers.

In Horizontal partitioning splits multiple table in the same database.

Sharding splits big table into multiple table across multiple database servers.

We Need Consistent Hashing for sharding.

Let Create Directory:

```
mkdir Sharding
cd Sharding
```

## Create init.sql and Dockerfile file

### Build Image

```
docker build -t pgshard .
```

### spin up container

Run 1st instance

```
docker run --name pgshard1 -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d  pgshard
```

Run 2nd instance

```
docker run --name pgshard2 -p 5433:5432 -e POSTGRES_PASSWORD=postgres -d  pgshard
```

Run 3rd instance

```
docker run --name pgshard3 -p 5434:5432 -e POSTGRES_PASSWORD=postgres -d  pgshard
```
