<script>
  import Header from "$lib/components/layout/Header.svelte";
  import JobTable from "$app/jobs/JobTable.svelte";
  import Modal from "svelte-simple-modal";
  import { getJobs } from "$lib/api.js";
  import "$assets/base.css";

  let jobs;

  getJobs().then((jobsResponse) => (jobs = jobsResponse));

  function updateJobs() {
    // Re-assign to trigger reactivity, since jobs are mutated in place (FIXME w/ stores). See
    // https://svelte.dev/docs#component-format-script-2-assignments-are-reactive
    jobs = jobs;
  }
</script>

<Header />

<main>
  {#await getJobs()}
    <p>Just a second...</p>
  {:then}
    <Modal ariaLabelledBy="job-details-heading" on:close={updateJobs}>
      <JobTable {jobs} />
    </Modal>
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</main>

<style>
  :global(.dt-table) {
    /* Remove the border from the library-provided table: */
    border: none;
  }

  :global(button.danger) {
    background: var(--color-danger);
  }
  :global(button.danger:hover) {
    background: var(--color-danger-accent);
  }

  main {
    min-height: 65vh;
  }

  p {
    margin-top: 30vh;
    text-align: center;
  }
</style>
