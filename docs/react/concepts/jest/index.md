# What is Jest?

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

[Jest docs](https://jestjs.io/)

It is a very popular JavaScript testing framework that works very well with React (but is compatible with anything). 

# Why do we use it?

We want to unit and integration test our React components and Jest is one (or maybe the best) tool for the job.

# How do we use it?

The configuration for Jest lives in `jest.config.js` in the root of the repo.

You can run all of our tests with the `npm test` command.

We run all tests in the build pipeline whenever you push a commit.

We recommend you run ALL tests locally before you push your code.

# Coverage

> Code coverage is a metric that can help you understand how much of your source is tested.

[Atlassian docs](https://www.atlassian.com/continuous-delivery/software-testing/code-coverage)

We use code coverage to help us identify how much of Atomix is tested by unit tests.

When you run the tests Jest is configured to also output the coverage "report" in your terminal as well as a coverage directory inside your filesystem with a HTML report you can browse.

Our coverage requirement is currently 95% - the test command will fail if less than 95% of our codebase is covered with tests.

# Troubleshooting

## The pipeline fails but locally it succeeds

Jest does some caching between test runs. Try running the test command with `--no-cache`. Try re-creating the Docker container.
