<script lang="ts">
  import type { Dayjs } from "../../utils/dayjs";
  import dayjs from "../../utils/dayjs";
  import NoTimelineIllustration from "../../illustrations/NoTimelineIllustration.svelte";

  export let date: Dayjs = dayjs();

  $: label = `${
    date.isToday() ? "Today's" : "This day"
  } timeline of yours is empty!`;
</script>

<div class="empty-state">
  <NoTimelineIllustration />
  <p>
    {label}
  </p>
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
