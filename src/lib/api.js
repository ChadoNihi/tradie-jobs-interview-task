import { JOBS } from "$lib/data.js";

const MS_ONE_SEC = 1000;
const MS_DELAY = MS_ONE_SEC;

export function getJobs() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(JOBS), MS_DELAY);
  });
}
