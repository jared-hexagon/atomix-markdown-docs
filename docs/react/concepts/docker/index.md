# What is Docker?

> [Docker](https://www.docker.com/) is an open source containerization platform. It enables developers to package applications into containers—standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment. Containers simplify delivery of distributed applications, and have become increasingly popular as organizations shift to cloud-native development and hybrid multicloud environments.

[IBM](https://www.ibm.com/in-en/cloud/learn/docker)

# Why do we use it?

We want to make the development experience the best it can be. Docker means you can build Atomix on any development machine and there will not be weird environment issues that slow you down.

# How do we use it?

There is a `Dockerfile` in the root of the project that describes our environment.

We use [Docker Sync](https://docker-sync.readthedocs.io/en/latest/) and [Docker Compose](https://docs.docker.com/compose/) to fix slowness on macOS.

We have written some Bash and PowerShell scripts to make dealing with Docker easier (see the `bin` directory in the repo).
