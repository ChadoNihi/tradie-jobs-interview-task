# Tradie Jobs (TJ) interview task app

## User stories

- As a User, I would like to ...
  - ... filter a list of jobs.
  - ... sort a list of jobs.
  - ... change the status of a job.
  - ... see details of a job.
  - ... add a note for a job.
  - ... edit a note of a job.
- As a Developer, I would like code to be formatted and linted on each commit automatically.

## (Some) limitations

- FE only
- **Time-capped to 3 hours**, including the initial setup. So:
  - No time left to finish CSS
  - Changing a job status doesn't persist.
  - Many unit tests are missing, esp. for corner cases.
  - No Docker image
  - No TypeScript
  - The jobs data should have been denormalized/flattened: the datatable library doesn't seem to handle nested data.
  - The app wasn't tested for accessibility.

## Feedback for the task givers

It would have saved some time on implementing the app if a list of jobs had been provided w/ the task. Thanks :)

## Usage

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) >= `15.3.0`
- (optional) [Python](https://www.python.org/downloads/) >= 3.4

### Setup

1. `npm install && npm run build`
2. (optional) `pip install pre-commit && pre-commit install`

### Run locally

Run `npm run dev` and navigate to [http://localhost:3000](http://localhost:3000).

### Run unit tests

`npm run test` or `npm run test:watch`

### Run linting and code-formatting manually

`pre-commit` ensures that linting and code-formatting are run automatically before each commit. Running them manually is possible as well:

Linting: `pre-commit run eslint --all-files`

Code-formatting: `pre-commit run prettier --all-files`

Both: `pre-commit run --all-files`
