<script lang="ts">
  import dayjs from "dayjs";
</script>

<div class="timeline-bar">
  <div class="timeline-bar-header">
    <div class="date-details">
      <span class="date">{dayjs().format("MMMM D")}</span>
      <span class="day-of-the-week">{dayjs().format("dddd")}</span>
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
