<script lang="ts">
  import TimelineItem from "./TimelineItem.svelte";
  import { TASKS } from "../../utils/task";
  import type { Task } from "../../utils/types";
  import EmptyTimeline from "./EmptyTimeline.svelte";
  import NewTaskDialog from "../dialogs/NewTaskDialog.svelte";

  let tasks: Task[] = [];
  let visible: boolean = false;

  function addNewTask(event: CustomEvent<Task>) {
    const task = event.detail;

    tasks = [...tasks, task];
  }
</script>

<NewTaskDialog bind:visible on:add-task={addNewTask} />

<div class="timeline">
  {#if tasks.length === 0}
    <EmptyTimeline on:new-task={() => (visible = true)} />
  {:else}
    <div class="all-timelines">
      {#each tasks as task}
        <TimelineItem {task} icon={TASKS[task.type]} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .timeline {
    height: 100%;
    width: 100%;
    overflow: auto;
    box-sizing: border-box;
  }

  .timeline::-webkit-scrollbar {
    display: none;
  }

  .all-timelines {
    position: relative;
    box-sizing: border-box;
  }

  .all-timelines::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 2px;
    background: var(--g600);
    top: 0;
  }

  @media all and (max-width: 800px) {
    .all-timelines::before {
      right: unset;
      top: 0;
    }
  }
</style>
