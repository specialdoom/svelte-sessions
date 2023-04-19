<script lang="ts">
  import { Alert } from "@specialdoom/proi-ui";
  import { completed } from "./stores/todos.js";
</script>

<div class:todos={true}>
  {#each $completed as todo}
    <Alert title={todo.text} />
  {:else}
    No completed todos
  {/each}
</div>

<style>
  .todos {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 270px;
    overflow-y: auto;
  }
</style>
