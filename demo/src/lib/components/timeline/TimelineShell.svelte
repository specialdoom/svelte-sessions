<script>
  import { getDayId } from "../../utils/day";
  import Timeline from "./Timeline.svelte";
  import TimelineBar from "./TimelineBar.svelte";
  import { current, days, newDay } from "../../stores/days";
  import dayjs from "../../utils/day-js";
  import { onMount } from "svelte";

  onMount(() => {
    if (!$days[getDayId($current)]) {
      newDay({
        date: dayjs(),
        tasks: [],
      });
    }
  });
</script>

<div>
  <TimelineBar />
  <Timeline currentDay={$current} />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    width: 100%;
  }
</style>
