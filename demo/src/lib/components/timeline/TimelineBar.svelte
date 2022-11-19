<script>
  import { TextInput, Button } from "@specialdoom/proi-ui";
  import dayjs from "dayjs";
  import ArrowLeftIcon from "../../icons/ArrowLeftIcon.svelte";
  import ArrowRightIcon from "../../icons/ArrowRightIcon.svelte";

  const date = dayjs().format("MMMM, D");
  const dayOfTheWeek = dayjs().format("dddd");
</script>

<div class:timeline-bar={true}>
  <div class:timeline-bar-header={true}>
    <div class:date-and-controls={true}>
      <span class:date={true}>{date}</span>
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
