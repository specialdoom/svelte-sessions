<script lang="ts">
  import { Button, TextInput } from "@specialdoom/proi-ui";
  import { timeline } from "../../stores/days";
  import NewTaskDialog from "../dialogs/NewTaskDialog.svelte";

  let visible: boolean = false;

  function changeDay(dayToAdd: number) {
    timeline.update((t) => ({
      ...t,
      current: t.current.add(dayToAdd, "day"),
    }));
  }
</script>

<NewTaskDialog bind:visible on:ok={() => (visible = false)} />

<div class:timeline-bar={true}>
  <div class:timeline-bar-header={true}>
    <div class:date-and-controls={true}>
      <span class:date={true}>{$timeline.current.format("MMMM, D")}</span>
      <Button on:click={() => changeDay(-1)}>Previous day</Button>
      {#if !$timeline.current.isToday()}
        <Button on:click={() => changeDay(1)}>Next day</Button>
      {/if}
    </div>
    <div style:width="200px">
      <TextInput placeholder="Search task" />
    </div>
    {#if $timeline.current.isToday()}
      <Button on:click={() => (visible = true)}>Add task</Button>
    {/if}
  </div>
  <span class:day-of-the-week={true}>{$timeline.current.format("dddd")}</span>
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
