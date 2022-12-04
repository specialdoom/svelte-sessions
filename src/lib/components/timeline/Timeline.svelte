<script lang="ts">
  import TimelineItem from "./TimelineItem.svelte";
  import NoTimelineState from "../../states/NoTimelineState.svelte";
  import { generateNewTask, TASKS } from "../../utils/task";
  import { current, tasks } from "../../stores/days";
  import {
    addTaskForUser,
    getTasksForUser,
  } from "../../services/firestore-tasks.js";
  import { auth } from "../../stores/auth.js";
  import { Spinner } from "@specialdoom/proi-ui";
  import type { Todo } from "../../utils/types";

  let over: boolean = false;

  $: {
    getTasksForUser($auth.uid, $current);
  }

  function onTodoDrop(event: DragEvent) {
    if (!event.dataTransfer.getData("todo")) return;

    toggleOverClass(false);

    const { title, id } = JSON.parse(
      event.dataTransfer.getData("todo")
    ) as Todo;

    const newTask = generateNewTask(title, "todo");
    newTask.todoId = id;

    addTaskForUser($auth.uid, newTask);

    $tasks = [...$tasks, newTask];
  }

  function toggleOverClass(value: boolean) {
    over = value;
  }

  function allowDrop() {
    toggleOverClass(true);
  }

  function leaveDropZone() {
    toggleOverClass(false);
  }
</script>

<div
  class="timeline"
  class:over
  on:drop|preventDefault={onTodoDrop}
  on:dragover|preventDefault|stopPropagation={allowDrop}
  on:dragleave|stopPropagation={leaveDropZone}
>
  {#await getTasksForUser($auth.uid, $current)}
    <div class="empty-state">
      <Spinner />
    </div>
  {:then data}
    {#if $tasks.length === 0}
      <div class="empty-state">
        <NoTimelineState />
        <p>
          {$current.isToday()
            ? `Today's timeline of yours is empty!`
            : `This day's timeline of yours is empty`}
        </p>
      </div>
    {:else}
      <div class="all-timelines">
        {#each $tasks as task}
          <TimelineItem {task} icon={TASKS[task.type]} />
        {/each}
      </div>
    {/if}
  {:catch}
    <p>Something went wrong</p>
  {/await}
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

  .timeline.over {
    border: 2px solid var(--p400);
    border-radius: 8px;
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

  div.empty-state {
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
