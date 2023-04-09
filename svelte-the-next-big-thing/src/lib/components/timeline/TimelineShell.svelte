<script lang="ts">
  import Timeline from "./Timeline.svelte";
  import TimelineBar from "./TimelineBar.svelte";
</script>

<div>
  <TimelineBar />
  <Timeline />
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
