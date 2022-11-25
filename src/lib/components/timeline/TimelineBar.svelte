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
    <div class:date-details={true}>
      <span class:date={true}>{$timeline.current.format("MMMM D")}</span>
      <span class:day-of-the-week={true}>{$timeline.current.format("dddd")}</span>
    </div>
    <div class:controls={true}>
      <Button on:click={() => changeDay(-1)} variant="ghost">Previous day</Button>
      {#if $timeline.current.isToday()}
        <Button on:click={() => (visible = true)}>Add task</Button>
      {/if}
      {#if !$timeline.current.isToday()}
        <Button on:click={() => changeDay(1)} variant="ghost">Next day</Button>
      {/if}
    </div>
  </div>
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

  div.date-details {
    display: flex;
    flex-direction: column;
  }

  span.date {
    font-size: 20px;
    font-weight: bold;
  }

  span.day-of-the-week {
    font-size: 12px;
  }

  @media only screen and (max-width: 500px) {
    div.timeline-bar-header {
      flex-direction: column;
    }

    .date-details {
      width: 100%;
      align-items: center;
      display: flex;
      gap: 8px;
    }
  }
</style>
