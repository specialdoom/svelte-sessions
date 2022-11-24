<script lang="ts">
    import { Alert, Button, TextInput } from "@specialdoom/proi-ui";
    import { onMount } from "svelte";
    import NothingToDoState from "../../icons/NothingToDoState.svelte";
    import {
        addTodoForUser,
        getTodosForUser, inactivateTodo,
    } from "../../services/firestore-todos";
    import { auth } from "../../stores/auth";
    import { timeline } from "../../stores/days";
    import type { Todo } from "../../utils/types";

    let todos: Todo[] = [];
    let todo = "";

    onMount(async () => {
        todos = await getTodosForUser($auth.uid, $timeline.current);
    });

    $: {
        getTodosForUser($auth.uid, $timeline.current).then((data) => {
            todos = data;
        });
    }

    $: isEmpty = todos.length === 0;

    async function addTodo() {
        const newTodo = {
            id: "",
            title: todo,
            active: true,
            date: $timeline.current,
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

    function onTodoClose(todoId: string){
        inactivateTodo(todoId);
    }
</script>

<div class="todos-container">
    <div class="todos" class:center={isEmpty}>
        {#if !isEmpty}
            {#each todos as todo}
                <Alert title={todo.title} closable on:close={() => onTodoClose(todo.id)}/>
            {/each}
        {:else}
            <NothingToDoState />
        {/if}
    </div>
    {#if $timeline.current.isToday()}
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
</style>
