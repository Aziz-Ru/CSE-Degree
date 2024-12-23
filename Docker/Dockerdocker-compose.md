

You can use multiple docker run commands to start multiple containers. But, you'll soon realize you'll need to manage networks, all of the flags needed to connect containers 
to those networks, and more. And when you're done, cleanup is a little more complicated.

With Docker Compose, you can define all of your containers and their configurations in a single YAML file. If you include this file in your code repository, anyone that clones 
your repository can get up and running with a single command.

**Use the docker compose up command to start the application:**
```
docker compose up -d --build
```
**Remove everything:**
```
docker compose down
docker compose down --volumes
```
