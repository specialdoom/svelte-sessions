<script>
  import { Alert, TextInput, Button } from "@specialdoom/proi-ui";

  export let todos = [];

  let todo = "";

  function addTodo() {
    const value = todo;

    todos = [...todos, value];

    todo = "";
  }

  function onKeyDown(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      addTodo();
    }
  }
</script>

<div class:todos={true}>
  {#each todos as todo}
    <Alert title={todo} closable />
  {:else}
    No todos
  {/each}
</div>
<div class:card={true} style:display="inline-flex" style:gap="4px">
  <TextInput bind:value={todo} on:keydown={onKeyDown} />
  <Button on:click={addTodo}>Add</Button>
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
