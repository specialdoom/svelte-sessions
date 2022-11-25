<script lang="ts">
    import { Alert, Button, TextInput } from "@specialdoom/proi-ui";
    import {onMount} from "svelte";
    import NothingToDoState from "../../states/NothingToDoState.svelte";
    import {
        addTodoForUser,
        getTodosForUser, inactivateTodo,
    } from "../../services/firestore-todos";
    import { auth } from "../../stores/auth";
    import { current } from "../../stores/days";
    import type { Todo } from "../../utils/types";
    import {generateNewTask} from "../../utils/task";
    import {addTaskForUser} from "../../services/firestore-tasks";

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

        todos = [...todos, { ...newTodo }];

        const todoId = await addTodoForUser($auth.uid, { ...newTodo });

        newTodo.id = todoId;

        todo = "";
    }

    function onKeyDownHandler(event: KeyboardEvent) {
        if (event.key === "Enter" && todo !== "") {
            addTodo();
        }
    }

    function onTodoClose(todo: Todo){
        inactivateTodo(todo.id);

        const task = generateNewTask();

        task.title = todo.title;

        addTaskForUser($auth.uid, task);
    }
</script>

<div class="todos-container">
    <div class="todos" class:center={isEmpty}>
        {#if !isEmpty}
            {#each todos as todo}
                <Alert title={todo.title} closable={$current.isToday()} on:close={() => onTodoClose(todo)}/>
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
