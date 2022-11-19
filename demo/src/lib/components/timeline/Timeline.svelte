<script>
  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
  } from "svelte-vertical-timeline";
  import NoTimelineState from "../../icons/NoTimelineState.svelte";

  const options = [];
</script>

{#if options.length === 0}
  <div class="empty-state">
    <NoTimelineState />
    <p>Today's timeline of yours is empty!</p>
  </div>
{:else}
  <Timeline
    position="alternate"
    style="box-shadow: 
inset 0px 11px 8px -10px #CCC,
inset 0px -11px 8px -10px #CCC;"
  >
    {#each options as option, i}
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p>{option.time}</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <span>🍕</span>
          {#if i !== options.length - 1}
            <TimelineConnector />
          {/if}
        </TimelineSeparator>
        <TimelineContent>
          <h3>{option.title}</h3>
        </TimelineContent>
      </TimelineItem>
    {/each}
  </Timeline>
{/if}

<style>
  span {
    height: 24px;
    display: flex;
    justify-content: center;
    margin: 6px 0;
    align-items: center;
  }

  div.empty-state {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    height: 100%;
    width: 100%;
  }

  div.empty-state p {
    font-family: "Fredoka";
    color: var(--g600);
  }
</style>
