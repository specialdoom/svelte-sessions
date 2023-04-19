<script lang="ts">
  import { Alert, TextInput, Button } from "@specialdoom/proi-ui";
  import { todos } from "./stores/todos.js";

  let todo = "";

  function addTodo() {
    const newTodo = {
      id: $todos.length + 1,
      text: todo,
      completed: false,
    };

    $todos = [...$todos, newTodo];

    todo = "";
  }

  function onKeyDown(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      addTodo();
    }
  }

  function onClose(id: number) {
    $todos = $todos.map((t) => {
      if (t.id === id) {
        return {
          id,
          completed: true,
          text: t.text,
        };
      }

      return t;
    });
  }
</script>

<div class:todos={true}>
  {#each $todos as todo}
    <Alert title={todo.text} closable on:close={() => onClose(todo.id)} />
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
