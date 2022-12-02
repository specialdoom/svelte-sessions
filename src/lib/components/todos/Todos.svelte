<script lang="ts">
  import { Alert, Button, TextInput } from "@specialdoom/proi-ui";
  import { onMount } from "svelte";
  import NothingToDoState from "../../states/NothingToDoState.svelte";
  import {
    addTodoForUser,
    getTodosForUser,
    inactivateTodo,
  } from "../../services/firestore-todos";
  import { auth } from "../../stores/auth";
  import { current, tasks } from "../../stores/days";
  import type { Todo } from "../../utils/types";
  import { generateNewTask } from "../../utils/task";
  import { addTaskForUser } from "../../services/firestore-tasks";

  let todos: Todo[] = [];
  let todo = "";

  onMount(async () => {
    todos = await getTodosForUser($auth.uid, $current);
  });

  $: {
    getTodosForUser($auth.uid, $current).then((data) => {
      todos = data;
    });
  }

  $: isEmpty = todos.length === 0;

  async function addTodo() {
    const newTodo = {
      id: "",
      title: todo,
      active: true,
      date: $current,
    };

    const todoId = await addTodoForUser($auth.uid, { ...newTodo });

    newTodo.id = todoId;

    todos = [...todos, { ...newTodo }];

    todo = "";
  }

  function onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === "Enter" && todo !== "") {
      addTodo();
    }
  }

  function onTodoClose(todo: Todo) {
    inactivateTodo(todo.id);

    const task = generateNewTask();

    task.title = todo.title;
    task.todoId = todo.id;

    addTaskForUser($auth.uid, task);
  }

  function onTodoDragOver(event: DragEvent, todo: Todo) {
    event.dataTransfer.setData("todo", JSON.stringify(todo));
  }

  function onTodoDragEnd(todo: Todo) {
    if ($tasks.find((t) => t.title === todo.title)) {
      inactivateTodo(todo.id);

      todos = [...todos.filter((td) => td.id !== todo.id)];
    }
  }
</script>

<div class="todos-container">
  <div class="todos" class:center={isEmpty}>
    {#if !isEmpty}
      {#each todos as todo}
        <div
          class="todo-wrapper"
          draggable="true"
          on:dragstart={(ev) => onTodoDragOver(ev, todo)}
          on:dragend={() => onTodoDragEnd(todo)}
        >
          <Alert
            title={todo.title}
            closable={$current.isToday()}
            on:close={() => onTodoClose(todo)}
          />
        </div>
      {/each}
    {:else}
      <NothingToDoState />
    {/if}
  </div>
  {#if $current.isToday()}
    <div class="control">
      <TextInput
        placeholder="Add new todo"
        bind:value={todo}
        on:keydown={onKeyDownHandler}
      />
      <Button on:click={addTodo} disabled={todo === ""}>+</Button>
    </div>
  {/if}
</div>

<style>
  .todos-container {
    height: 85%;
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

  .todo-wrapper {
    cursor: grab;
  }

  .todos.center {
    align-items: center;
    justify-content: center;
  }

  .todos::-webkit-scrollbar {
    display: none;
  }

  .control {
    display: inline-flex;
    justify-content: space-between;
    height: 10%;
    gap: 4px;
    align-items: center;
  }

  @media only screen and (max-width: 800px) {
    .todos-container {
      height: 100%;
    }
  }
</style>
