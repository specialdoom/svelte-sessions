<script lang="ts">
  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
  } from "svelte-vertical-timeline";
  import NoTimelineState from "../../icons/NoTimelineState.svelte";
  import { current, days } from "../../stores/days";
  import { getDayId } from "../../utils/day";
  import { TASKS } from "../../utils/task";

  $: tasks = $days[getDayId($current)]?.tasks ?? [];
</script>

{#if tasks.length === 0}
  <div class="empty-state">
    <NoTimelineState />
    <p>
      {$current.isToday()
        ? `Today's timeline of yours is empty!`
        : `This day's timeline of yours is empty`}
    </p>
  </div>
{:else}
  <div class="timeline-container">
    <Timeline position="alternate" style=" width: 100%; overflow: hidden;">
      {#each tasks as option, i}
        <TimelineItem>
          <TimelineOppositeContent slot="opposite-content">
            <p>{option.date.format("HH:hh A")}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <span style:font-size="20px">{TASKS[option.type]}</span>
            {#if i !== tasks.length - 1}
              <TimelineConnector />
            {/if}
          </TimelineSeparator>
          <TimelineContent>
            <h4>{option.title}</h4>
            <p>{option.description}</p>
          </TimelineContent>
        </TimelineItem>
      {/each}
    </Timeline>
  </div>
{/if}

<style>
  span {
    height: 24px;
    display: flex;
    justify-content: center;
    margin: 6px 0;
    align-items: center;
  }

  div.timeline-container {
    height: 100%;
    overflow: auto;
    box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc;
  }

  div.timeline-container::-webkit-scrollbar {
    display: none;
  }

  div.empty-state {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    overflow: auto;
  }

  div.empty-state::-webkit-scrollbar {
    display: none;
  }

  div.empty-state p {
    font-family: "Fredoka";
    color: var(--g600);
  }
</style>
