<script lang="ts">
  import TimelineCard from "./TimelineCard.svelte";
  import type { Task } from "../../utils/types";

  export let icon: string = "💻";
  export let task: Task;
</script>

<div class="single-timeline d-flex-2">
  <div class="timeline-blank" />
  <div class="timeline-text d-flex-2">
    <TimelineCard {task} {icon} />
    <div class="timeline-dot" />
  </div>
</div>

<style>
  .d-flex-2 {
    display: flex;
    align-items: center;
  }

  .single-timeline {
    margin-bottom: 22px;
  }

  .timeline-blank {
    width: 50%;
    text-align: right;
  }

  .timeline-text {
    width: 50%;
    padding-left: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
  }

  .timeline-dot {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    left: -6px;
    background: var(--g600);
    border-radius: 50%;
  }

  .single-timeline:nth-child(even) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .single-timeline:nth-child(even) .timeline-dot {
    right: -6px;
    left: unset;
  }

  .single-timeline:nth-child(even) .timeline-text {
    padding-left: 0;
    padding-right: 20px;
  }

  @media all and (max-width: 800px) {
    .single-timeline:nth-child(2n) .timeline-text {
      padding-left: 20px;
      padding-right: 0;
      text-align: left;
    }

    .single-timeline:nth-child(2n) .timeline-dot {
      left: -6px;
      right: unset;
    }

    .timeline-blank {
      display: none;
    }

    .timeline-text {
      width: 100%;
    }
  }
</style>
