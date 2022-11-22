<script lang="ts">
    import { Alert, Button, TextInput } from "@specialdoom/proi-ui";
    import NothingToDoState from "../../icons/NothingToDoState.svelte";

    let todos = [];
    let todo = "";

    function addTodo() {
        todos = [...todos, todo];
        todo = "";
    }

    $: isEmpty = todos.length === 0;
</script>

<div class="todos-container">
    <div class="todos" class:center={isEmpty}>
        {#if !isEmpty}
            {#each todos as todo}
                <Alert title={todo} closable />
            {/each}
        {:else}
            <NothingToDoState />
        {/if}
    </div>
    <div class="control">
        <TextInput
            placeholder="Add new todo"
            bind:value={todo}
            on:keydown={() => console.log("keyfown")}
        />
        <Button on:click={addTodo}>+</Button>
    </div>
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
        align-items: center;
    }
</style>
