<script lang="ts">
  import NoteAddIcon from "./NoteAddIcon.svelte";

  export let description: string = "";

  function square(node: HTMLElement) {
    const width = window.getComputedStyle(node).width;
    node.style.height = width;
  }
</script>

<button class:flex={true} use:square>
  <div class:flex={true}>
    <span class:label={true}><slot /></span>
    <span class:description={true}>{description}</span>
  </div>

  <div class:icon={true}>
    <NoteAddIcon />
  </div>
</button>

<style>
  button {
    border: unset;
    border-radius: 8px;
    width: 100%;
    padding: 8px;
    gap: 20px;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  span.label {
    font-size: 16px;
  }

  span.description {
    font-size: 12px;
  }

  div.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background: #000000;
  }
</style>
