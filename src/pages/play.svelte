<script>
  import Ghost from "../lib/components/ghost/Ghost.svelte";
  import { Dialog } from "@specialdoom/proi-ui";
  import { onMount } from "svelte";
  import { generateGhosts } from "../lib/utils/ghost.js";
  import Timer from "../lib/components/timer/Timer.svelte";

  let ghosts = generateGhosts();
  let captured = [];
  let rules = undefined;
  let showRules = true;

  onMount(() => {
    rules = localStorage.getItem("rules");
    if (rules) showRules = false;
  });

  $: cleared = ghosts.length === captured.length;

  function handleOnCapture(event) {
    captured = [...captured, event.detail];
  }

  function handleFinish() {
    cleared = false;
    window.location.reload();
  }

  function handleAccept() {
    localStorage.setItem("rules", "true");
    showRules = false;
  }
</script>

<Dialog bind:visible={showRules} title="Ghost buster, ha!?" onOk={handleAccept}>
  <div style:color="black" style:display="flex" style:flex-direction="column">
    Hunt as many 👻 as you can!
    <br />
    The rules:
    <ul>
      <li>🎃 click on a ghost to hunt it</li>
      <li>🎃 score the best</li>
    </ul>
  </div>
</Dialog>

<Dialog bind:visible={cleared} title="Congrats!!! 🎈🎈🎈" onOk={handleFinish}>
  <div>Congrats! You managed to capture every ghost! Try again?</div>
</Dialog>

<Timer />
<div class:playground={true}>
  {#each ghosts as ghost}
    <Ghost id={ghost} on:capture={handleOnCapture} />
  {/each}
</div>

<style>
  div.playground {
    position: relative;
    color: var(--bright);
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
