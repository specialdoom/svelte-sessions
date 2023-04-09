<script lang="ts">
  import { Button } from "@specialdoom/proi-ui";
  import dayjs, { type Dayjs } from "../../utils/dayjs";
  import { createEventDispatcher } from "svelte";

  export let date: Dayjs = dayjs();

  const dispatch = createEventDispatcher();
</script>

<div class="timeline-bar">
  <div class="timeline-bar-header">
    <div class="date-details">
      <span class="date">{date.format("MMMM D")}</span>
      <span class="day-of-the-week">{date.format("dddd")}</span>
    </div>
    <div class="date-controls">
      <Button on:click={() => dispatch("previous-day")} variant="outline">
        Previous Day
      </Button>
      <Button on:click={() => dispatch("to-add")}>Add new task</Button>
      <Button
        on:click={() => dispatch("next-day")}
        variant="outline"
        disabled={date.isToday()}
      >
        Next Day
      </Button>
    </div>
  </div>
</div>

<style>
  .timeline-bar {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px 8px;
    box-sizing: border-box;
  }

  .timeline-bar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .date-details {
    display: flex;
    flex-direction: column;
  }

  .date-controls {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .date {
    font-size: 20px;
    font-weight: bold;
  }

  .day-of-the-week {
    font-size: 12px;
  }

  @media only screen and (max-width: 500px) {
    .timeline-bar-header {
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
