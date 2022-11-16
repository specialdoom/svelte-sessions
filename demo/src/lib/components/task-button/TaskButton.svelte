<script lang="ts">
  import NoteAddIcon from "./NoteAddIcon.svelte";

  export let description: string = "";
</script>

<button>
  <span class:label={true}><slot /></span>
  <span class:description={true}>{description}</span>

  <NoteAddIcon />
</button>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: unset;
    border-radius: 8px;
    height: auto;
    width: 100%;
    padding: 8px;
  }

  span.label {
    font-size: 16px;
  }

  span.description {
    font-size: 12px;
  }
</style>
