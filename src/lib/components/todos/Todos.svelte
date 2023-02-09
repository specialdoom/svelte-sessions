<script lang="ts">
  import { Alert, Button, TextInput, toaster } from "@specialdoom/proi-ui";
  import { createEventDispatcher, onMount } from "svelte";
  import NothingToDoIllustration from "../../illustrations/NothingToDoIllustration.svelte";
  import type { Todo } from "../../utils/types";
  import Database from "../../services/database.service";
  import { generateNewTodo } from "../../utils/todo";

  let todos: Todo[] = [];
  let todo = "";

  const dispatch = createEventDispatcher();

  $: displayedTodos = todos.filter((todo) => todo.active);

  onMount(async () => {
    todos = (await Database.read("todos")) as Todo[];
  });

  async function addTodo() {
    const newTodo = generateNewTodo(todo);

    todos = [...todos, { ...newTodo }];

    await Database.save("todos", todos);
    toaster.success("Todo saved successfully");

    clearTodo();
  }

  function clearTodo() {
    todo = "";
  }

  function onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === "Enter" && todo !== "") {
      addTodo();
    }
  }

  async function onTodoClose(todo: Todo) {
    todos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, active: false };
      }

      return t;
    });

    dispatch("todo-close", todo);

    await Database.save("todos", todos);
  }
</script>

<div class="todos-container">
  <div class="todos" class:center={displayedTodos.length === 0}>
    {#each displayedTodos as todo (todo.id)}
      {#if todo.active}
        <Alert title={todo.title} closable on:close={() => onTodoClose(todo)} />
      {/if}
    {:else}
      <NothingToDoIllustration />
      <span class="todos-empty-state-message">Nothing to do?</span>
    {/each}
  </div>
  <div class="control">
    <TextInput
      placeholder="Add new todo"
      bind:value={todo}
      on:keydown={onKeyDownHandler}
    />
    <Button on:click={addTodo} disabled={todo === ""}>Add</Button>
  </div>
</div>

<style>
  .todos-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .todos {
    height: 90%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .todos.center {
    align-items: center;
    justify-content: center;
  }

  .todos::-webkit-scrollbar {
    display: none;
  }

  .todos-empty-state-message {
    font-family: Fredoka;
    color: var(--g600);
  }

  .control {
    display: inline-flex;
    justify-content: space-between;
    height: 10%;
    gap: 4px;
    align-items: flex-end;
  }

  @media only screen and (max-width: 800px) {
    .todos-container {
      height: 100%;
    }
  }
</style>
