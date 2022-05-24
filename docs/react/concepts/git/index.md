# What is Git?

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

[Git](https://git-scm.com/)

# How do we use Git?

All of the sourcecode for Atomix is stored in a Git repo inside Azure DevOps.

To gain access you must be manually added to the team. See the "Getting Started" articles for how to do that.

# How do I use Git?

It can be intimidating to use Git for the first time but don't worry - we will explain how to do so!

Git works by taking all of your sourcecode and keeping track of changes to it in the form of **commits** on **branches**.

The branch that we use as the "main" branch (that we use for distributing Atomix) is called **master**.

A developer can branch off of the master branch (and *any* branch) any number of times and Git will keep track of your commits (each change). The developer can then decide to **merge** their work into another branch when they are done.

A pull request is a request to merge between 2 branches. It gives other developers a chance to review their work before it gets merged to fix any issues.

Because Git is **distributed** it means you have a **local** copy of the code but Git has its own **remote** version. This means you will often need to synchronize your local code with what is in Git by **pulling** the changes.

# Git clients

## VSCode

You can perform basic Git operations right inside of VSCode! Read the docs [here](https://code.visualstudio.com/docs/editor/versioncontrol).

## Terminal

The most powerful (and dangerous) way to interact with Git is with your terminal. Run the `git` command to see available commands.

# Git strategy

There are different "strategies" for using Git such as "GitFlow".

We generally do not use feature or development branches - master is "production" and any new components, bug fixes, etc. are merged straight to master (using pull requests) which are then immediately deployed to our consumers.

If we have a large change we may create a development or beta branch.

# Advanced topics

## Rebasing

> Rebasing replays changes from one line of work onto another in the order they were introduced, whereas merging takes the endpoints and merges them together.

[Git Docs](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

We currently do not require you to rebase your changes when merging to master however if you know how to do it we recommend it.

## Force pushing

> Git prevents you from overwriting the central repository’s history by refusing push requests when they result in a non-fast-forward merge.

With some Git commands you can override this behavior by force pushing. This is dangerous, irreversible and we have disabled it so please contact us if you would like to do this.
