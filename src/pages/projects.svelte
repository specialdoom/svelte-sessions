<script>
  import Ghost from "../lib/components/Ghost.svelte";
  import { Dialog } from "@specialdoom/proi-ui";
  import { onMount } from "svelte";

  let ghostsIds = [...Array(30).keys()].map((i) => i);
  let ghosts = [];
  let rules = undefined;
  let showRules = true;

  onMount(() => {
    rules = localStorage.getItem("rules");
    let capturedGhosts = JSON.parse(localStorage.getItem("captured"));
    ghosts = ghostsIds.map((ghostId) => {
      return {
        id: ghostId,
        captured: capturedGhosts?.includes(ghostId) ?? false,
      };
    });
  });
</script>

{#if !rules}
  <Dialog
    visible={showRules}
    title="Curious about our previous projects? Hmmm..."
    onOk={() => {
      localStorage.setItem("rules", "true");
      showRules = false;
    }}
  >
    <div style:color="black">
      If you want to see our previous projects you have to capture the ghost by
      clicking on it. Recently viewed project (captured ghost) will be in
      chains. Have fun!
    </div>
  </Dialog>
{/if}

<div>
  {#each ghosts as ghost}
    <Ghost id={ghost.id} captured={ghost.captured} />
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
