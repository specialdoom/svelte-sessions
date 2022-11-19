<script>
  import { Button, TextInput } from "@specialdoom/proi-ui";
  import { createEventDispatcher } from "svelte";
  import { current } from "../../stores/days";

  const date = $current.format("MMMM, D");
  const dayOfTheWeek = $current.format("dddd");

  const dispatch = createEventDispatcher();

  function dispatchPrevEvent() {
    dispatch("prev");
  }
</script>

<div class:timeline-bar={true}>
  <div class:timeline-bar-header={true}>
    <div class:date-and-controls={true}>
      <span class:date={true}>{date}</span>
      <Button on:click={dispatchPrevEvent}>Previous day</Button>
    </div>
    <TextInput placeholder="Search task" />
  </div>
  <span class:day-of-the-week={true}>{dayOfTheWeek}</span>
</div>

<style>
  div.timeline-bar {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px 8px;
    box-sizing: border-box;
  }

  div.timeline-bar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  div.date-and-controls {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  span.date {
    font-size: 20px;
    font-weight: bold;
  }

  span.day-of-the-week {
    font-size: 12px;
  }
</style>
