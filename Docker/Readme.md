# Docker

Docker is an open-source platform that enables developers to automate the deployment, scaling, and management of applications in lightweight, portable containers.

A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container.

1. Images are immutable. Once an image is created, it can't be modified. You can only make a new image or add changes on top of it.
2.  Container images are composed of layers. Each layer represents a set of file system changes that add, remove, or modify files.

## All Necessary Commands For Container
|Work|Command|
|-|-|
|List Running Contaiers|`docker ps`|
|List All Contaiers|`docker ps -a`|
|create and run container|`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`|
|create and start a container in interactive mode|`docker run -it ubuntu`|
|create and start a container in detached mode|`docker run -d ubuntu`|
|create and start a container Bind Ports To expose the container's ports to the host system|`docker run -p 8080host-port:80container-port ubuntu`|
|To mount a directory from your host into the container|`docker run -v /path/on/host:/path/in/container ubuntu`|
|Restart existing Container|`docker exec -it container_name or id`|
|Removing Container|`docker rm container_name or id`|
|Stop container|`docker stop container_name or id`|
|Send a KILL signal to a container|`docker kill my_container`|

## Images
|Work|Command|
|-|-|
|Show the history of an image|`docker image history` </br> `docker image history postgres:16.2`|
|Pull a docker Image|`docker pull <image_name>:<tag>`|
|Clears an unused image|`docker image prune`|
|Display detailed information on one or more images|`docker image inspect`|
|Builds an image from a remote GIT repository|`docker build https://github.com/docker/ rootfs.git#container:docker`|
|Upload an image to a registry|`docker image push`|
|List images|`docker image ls`|
|Builds an image from a Dockerfile in the current directory| ` docker build`|
|Removes an image|`docker rmi <image_name_or_id>` </br> You cannot remove an image if a container is currently running or created from it. Stop and remove the container first|

	



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
