<script>
    import Todos from "../lib/components/todos/Todos.svelte";
    import {goto} from "@roxi/routify";
</script>

{#if window.innerWidth < 800}
<Todos />
{:else}
    {$goto("/")}
{/if}