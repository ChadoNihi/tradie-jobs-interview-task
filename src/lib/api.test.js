import { JOBS } from "$lib/data.js";
import { getJobs } from "./api.js";

it("resolves to jobs", async () => {
  jest.useFakeTimers();

  const promiseJobs = getJobs();
  jest.runAllTimers();
  const actualJobs = await promiseJobs;

  expect(actualJobs).toBe(JOBS);
});
