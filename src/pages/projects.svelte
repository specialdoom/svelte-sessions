<script>
  import Ghost from '../lib/components/Ghost.svelte';
  import {Dialog} from "@specialdoom/proi-ui";

  const projects = [...Array(30).keys()].map((i) => i);


</script>

<Dialog visible={true} title="Curious about our previous project? Hmmm...">
    <div style:color="black">If you want to see our previous projects you have to capture the ghost by clicking on it.
    Recently viewed project (captured ghost) will be in chains. Have fun!
    </div>
</Dialog>

<div>
        {#each projects as project}
            <Ghost />
        {/each}
</div>

<style>
    div {
        position: relative;
        color: var(--bright);
        box-sizing: border-box;
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>