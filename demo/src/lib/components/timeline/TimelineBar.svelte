<script>
  import { Button, TextInput } from "@specialdoom/proi-ui";
  import { current } from "../../stores/days";

  function previousDay() {
    current.update((c) => c.add(-1, "day"));
  }

  function nextDay() {
    current.update((c) => c.add(1, "day"));
  }
</script>

<div class:timeline-bar={true}>
  <div class:timeline-bar-header={true}>
    <div class:date-and-controls={true}>
      <span class:date={true}>{$current.format("MMMM, D")}</span>
      <Button on:click={previousDay}>Previous day</Button>
      {#if !$current.isToday()}
        <Button on:click={nextDay}>Next day</Button>
      {/if}
    </div>
    <TextInput placeholder="Search task" />
  </div>
  <span class:day-of-the-week={true}>{$current.format("dddd")}</span>
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
