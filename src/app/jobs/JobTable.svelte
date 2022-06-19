<script>
  import { getContext } from "svelte";
  import { Datatable } from "svelte-simple-datatables";
  import { MISSING_VALUE, NA_VALUE } from "$lib/constants.js";
  import JobDetails from "$app/jobs/JobDetails.svelte";
  import JobStatus from "$app/jobs/JobStatus.svelte";

  const TABLE_SETTINGS = {
    columnFilter: true,
    rowsPerPage: 5,
    blocks: {
      searchInput: false,
    },
    labels: {
      info: "Showing {start} to {end} of {rows} jobs",
      noRows: "No jobs match the search",
    },
  };
  const { open } = getContext("simple-modal");

  export let jobs = [];

  let rows;
</script>

{#if jobs?.length}
  <Datatable settings={TABLE_SETTINGS} data={jobs} bind:dataRows={rows}>
    <thead>
      <th data-key="createdAt"> Created at </th>
      <th data-key="(row) => row.client.businessName || 'N/A'"> Company </th>
      <th data-key="(row) => row.client.contact.firstName"> Given name </th>
      <th data-key="(row) => row.client.contact.lastName"> Surname </th>
      <th data-key="status"> Status </th>
      <th data-key="(row) => row.notes?.length || 0"> Notes </th>
      <th />
    </thead>

    <tbody>
      {#if rows}
        {#each $rows as row (row.id)}
          {@const { createdAt, status, client, notes } = row}
          <tr>
            <td>
              {createdAt || MISSING_VALUE}
            </td>
            <td>
              {client.businessName || NA_VALUE}
            </td>
            <td>
              {client.contact.firstName || MISSING_VALUE}
            </td>
            <td>
              {client.contact.lastName || MISSING_VALUE}
            </td>
            <td>
              <JobStatus {status} />
            </td>
            <td>
              {notes?.length || 0}
            </td>
            <td>
              <button on:click={open(JobDetails, { job: row })}>Details</button>
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </Datatable>
{:else}
  <p>
    No jobs were found. Try to reload the page and contact the support if the
    problem persists.
  </p>
{/if}
