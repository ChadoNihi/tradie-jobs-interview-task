<script>
  import { JOB_STATUS_MAP } from "$lib/constants.js";

  export let status;
</script>

<select>
  {#each [...JOB_STATUS_MAP.values()] as jobStatus (jobStatus)}
    <option selected={status === jobStatus}>
      {jobStatus}
    </option>
  {/each}
</select>
