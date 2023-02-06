<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import NoTimelineState from "../../states/NoTimelineState.svelte";
</script>

<div class="empty-state">
  <NoTimelineState />
  <p>Today's timeline of yours is empty!</p>
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
