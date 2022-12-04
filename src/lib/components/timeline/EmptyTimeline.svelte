<script lang="ts">
  import { Spinner } from "@specialdoom/proi-ui";
  import NoTimelineState from "../../states/NoTimelineState.svelte";

  export let isToday: boolean = false;
  export let isLoading: boolean = false;

  $: message = isToday
    ? `Today's timeline of yours is empty!`
    : `This day's timeline of yours is empty`;
</script>

<div class="empty-state">
  {#if isLoading}
    <Spinner />
  {:else}
    <NoTimelineState />
    <p>{message}</p>
  {/if}
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
