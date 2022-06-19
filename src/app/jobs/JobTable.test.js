import { render } from "@testing-library/svelte";
// eslint-disable-next-line no-unused-vars
import { getContext } from "svelte";
import JobTable from "$app/jobs/JobTable.svelte";

// Mock Svelte's `getContext()`, which is used by the modal:
jest.mock("svelte", () => ({
  ...jest.requireActual("svelte"),
  getContext: () => ({}),
}));

const LABEL_NO_JOBS =
  "No jobs were found. Try to reload the page and contact the support if the problem persists.";

it("shows the expected message if the job list is empty", () => {
  const { getByText } = render(JobTable, { jobs: [] });

  expect(getByText(LABEL_NO_JOBS)).toBeDefined();
});

it("shows the expected message if the job list is falsy", () => {
  const { getByText } = render(JobTable, { jobs: null });

  expect(getByText(LABEL_NO_JOBS)).toBeDefined();
});
