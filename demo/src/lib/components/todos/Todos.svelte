<script lang="ts">
    import { Alert } from "@specialdoom/proi-ui";

    let todos = ["Do this"];
</script>

<div>
    <p>Todos</p>
    {#each todos as todo}
        <Alert title={todo} closable />
    {/each}
</div>

<style>
    div {
        height: 90%;
    }
</style>
