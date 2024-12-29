# Docker Image

A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container.

### Image layers

Each layer in an image contains a set of filesystem changes - additions, deletions, or modifications. Let’s look at a theoretical image:

- The first layer adds basic commands and a package manager, such as apt.
- The second layer installs a Python runtime and pip for dependency management.
- The third layer copies in an application’s specific requirements.txt file.
- The fourth layer installs that application’s specific dependencies.
- The fifth layer copies in the actual source code of the application.


A Dockerfile is a text-based document that's used to create a container image. It provides instructions to the image builder on the commands to run, files to copy, startup command, and more.

- FROM <image> - this specifies the base image that the build will extend.
- WORKDIR <path> - this instruction specifies the "working directory" or the path in the image where files will be copied and commands will be executed.
- COPY <host-path> <image-path> - this instruction tells the builder to copy files from the host and put them into the container image.
- RUN <command> - this instruction tells the builder to run the specified command.
- ENV <name> <value> - this instruction sets an environment variable that a running container will use.
- EXPOSE <port-number> - this instruction sets configuration on the image that indicates a port the image would like to expose.
- USER <user-or-uid> - this instruction sets the default user for all subsequent instructions.
- CMD ["<command>", "<arg1>"] - this instruction sets the default command a container using this image will run.
