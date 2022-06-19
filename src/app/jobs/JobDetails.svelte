<!-- Define constants inside a "context=module" <script> so that they are defined only once per any number of component instances. -->
<script context="module">
  const EMPTY_NOTE = "";
  const MESSAGE_CONFIRM_DELETE_NOTE = "Delete the note?";
</script>

<script>
  import { renderAddress } from "./helpers.js";

  export let job;

  const {
    client: { address, businessName, contact },
  } = job;

  $: notes = job.notes || [];

  function addEmptyNote() {
    notes.push(EMPTY_NOTE);
    // FIXME: use store to manage state
    job.notes = notes;
  }

  function removeNoteAt(i) {
    const deleteCount = 1;
    notes.splice(i, deleteCount);
    // FIXME: use store to manage state
    job.notes = notes;
  }
</script>

<!-- FIXME: handle missing values -->
<!-- FIXME: unit test -->
<h3 id="job-details-heading">
  Job from <time>{job.createdAt}</time> for {businessName ||
    `${contact.firstName} ${contact.lastName}`}
</h3>

<dl>
  <dt>Address</dt>
  <dd>{renderAddress(address)}</dd>
  {#if contact.phoneNumber}
    <dt>Phone #</dt>
    <dd>{contact.phoneNumber}</dd>
  {/if}
  {#if contact.email}
    <dt>Email</dt>
    <dd>{contact.email}</dd>
  {/if}
</dl>

<!-- FIXME: extract to its own component -->
<form>
  <fieldset>
    <legend>Notes</legend>

    {#each notes as note, i}
      <textarea bind:value={note} />
      <!-- `type=button` ensures that a button doesn't submit its form by default (ie that it isn't a "submit" button). -->
      <button
        type="button"
        on:click={() => confirm(MESSAGE_CONFIRM_DELETE_NOTE) && removeNoteAt(i)}
        class="danger"
      >
        Delete note
      </button>
    {/each}

    <!-- `type=button` ensures that a button doesn't submit its form by default (ie that it isn't a "submit" button). -->
    <button type="button" on:click={addEmptyNote} class="add-note-btn">
      Add new note
    </button>
  </fieldset>
</form>

<style>
  .add-note-btn {
    display: block;
  }
</style>
