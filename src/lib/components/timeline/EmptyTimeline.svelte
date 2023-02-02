<script lang="ts">
  import { Button } from "@specialdoom/proi-ui";
  import { createEventDispatcher } from "svelte";
  import NoTimelineState from "../../states/NoTimelineState.svelte";

  const dispatch = createEventDispatcher();
</script>

<div class="empty-state">
  <NoTimelineState />
  <p>Today's timeline of yours is empty!</p>
  <Button on:click={() => dispatch("new-task")}>Add new task</Button>
</div>

<style>
  .empty-state {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    height: 100%;
    width: 100%;
    font-family: Fredoka;
    color: var(--g600);
  }
</style>
