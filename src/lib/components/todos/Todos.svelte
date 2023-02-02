<script lang="ts">
  import { Alert, Button, TextInput } from "@specialdoom/proi-ui";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import NothingToDoState from "../../states/NothingToDoState.svelte";
  import { generateNewTask } from "../../utils/task";
  import { generateNewTodo } from "../../utils/todo";
  import type { Todo } from "../../utils/types";

  let todos: Todo[] = [];
  let todo = "";

  onMount(async () => {
    todos = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([generateNewTodo(), generateNewTodo()]);
      }, 1500);
    });
  });

  function addTodo() {
    const newTodo = {
      id: Math.random(),
      title: todo,
      active: true,
      date: dayjs(),
    };

    todos = [...todos, { ...newTodo }];

    todo = "";
  }

  function onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === "Enter" && todo !== "") {
      addTodo();
    }
  }

  function onTodoClose(todo: Todo) {
    const task = generateNewTask();

    task.title = todo.title;
  }
</script>

<div class="todos-container">
  <div class="todos" class:center={todos.length === 0}>
    {#each todos as todo}
      <Alert title={todo.title} closable on:close={() => onTodoClose(todo)} />
    {:else}
      <NothingToDoState />
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
