import { render } from "@testing-library/svelte";
import { JOB_STATUS_MAP } from "$lib/constants.js";
import JobStatus from "$app/jobs/JobStatus.svelte";

const ROLE_OPTION = "option";
const STATUS = JOB_STATUS_MAP.get("ACTIVE");

it("has each status as a select option", () => {
  const { getByRole } = render(JobStatus, { status: STATUS });

  JOB_STATUS_MAP.forEach((jobStatus) =>
    expect(getByRole(ROLE_OPTION, { name: jobStatus })).toBeDefined()
  );
});

it("selects a passed status by default", () => {
  const jobStatusesWithoutSelected = new Map(JOB_STATUS_MAP);
  jobStatusesWithoutSelected.delete("ACTIVE");

  const { getByRole } = render(JobStatus, { status: STATUS });

  expect(getByRole(ROLE_OPTION, { name: STATUS }).selected).toBeTruthy();
  jobStatusesWithoutSelected.forEach((jobStatus) =>
    expect(getByRole(ROLE_OPTION, { name: jobStatus }).selected).toBeFalsy()
  );
});
