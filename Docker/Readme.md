# Docker

A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container.

1. Images are immutable. Once an image is created, it can't be modified. You can only make a new image or add changes on top of it.
2.  Container images are composed of layers. Each layer represents a set of file system changes that add, remove, or modify files.

### Docker all Contaiers

```
docker ps
```

### docker build
```
Builds an image from a Dockerfile in the current directory
```
### Builds an image from a remote GIT repository 
```
docker build https://github.com/docker/
rootfs.git#container:docker
```

### Clears an unused image
```
docker image prune
```
### Clears all images that are not being used by containers

```
docker image prune -a
```
### Removes an image
```
docker image rm image
```
### Removes a running container
```
docker rm container
```
### Starts a new container
```
docker start container
```
### Stops a container
```
docker stop [OPTIONS] CONTAINER [CONTAINER...]

docker stop container

By name:
docker stop my-nginx
the container ID:

docker stop 123abc456def

```
### Pauses a container
```
docker pause container
```
### Unpauses a container
```
docker unpause container
```
### Restarts a container
```
docker restart container
```
### Blocks a container
```
docker wait container
```
### Exports container contents to a tar archive docker attach container
```
docker export container
```
### Creates a new container from an image

```
docker create image
```

# Container Inspection Commands

### Lists all running containers
```
docker ps
```
### 	Lists all containers
```
 docker ps -a
```

### Inspects changes to directories and files in the container filesystem

```
docker diff container
```
## Manage Images Commands
### Search for and download an image
```
docker search docker/welcome-to-docker
```
### Pull the image using the docker pull command.
```
docker pull docker/welcome-to-docker
```


### Lists images
```
docker image ls
```
### Removes an image

```
docker image rm mysql
```

## Run Commands
```
docker run (options) image (command) (arg...)
```
## Service Commands

### Lists all services running in a swarm

```
docker service ls
```

## Network Commands
### Creates a new network
```
docker network create networkname
```
### 	Removes a specified network
```
docker network rm networkname
```
### Lists all networks
```
docker network ls
```
### Connects a container to a network
```
docker network connect networkname container
```

	


## Container
A container in Docker is a Isolated, lightweight, standalone, and executable package of software that includes
everything needed to run an application: the code, runtime, libraries, environment variables, and system
tools. Containers provide a consistent environment for applications to run across different systems, making
them ideal for development, testing, and deployment.

  Self-contained. Each container has everything it needs to function with no reliance on any pre-installed dependencies on the host machine.
  Isolated. Since containers are run in isolation, they have minimal influence on the host and other containers, increasing the security of your applications.
  Independent. Each container is independently managed. Deleting one container won't affect any others.
  Portable. Containers can run anywhere! The container that runs on your development machine will work the same way in a data center or anywhere in the cloud!

## Images
A container is a runnable instance of an image. 

It is a read-only template that is used for creating containers, containing the
application code and dependencies.Docker Image is an executable package of software that includes everything needed to run an application.
