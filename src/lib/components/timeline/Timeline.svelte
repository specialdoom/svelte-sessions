<script lang="ts">
  import TimelineItem from "./TimelineItem.svelte";
  import { TASKS } from "../../utils/task";
  import type { Task } from "../../utils/types";
  import EmptyTimeline from "./EmptyTimeline.svelte";
  import NewTaskDialog from "../dialogs/NewTaskDialog.svelte";
  import TimelineBar from "./TimelineBar.svelte";
  import databaseService from "../../services/database.service";
  import { onMount } from "svelte";
  import type { Dayjs } from "dayjs";
  import dayjs from "dayjs";

  let tasks: Task[] = [];
  let visible: boolean = false;
  let date: Dayjs = dayjs();

  $: tasksKey = `tasks-${date.format("DDMMYYYY")}`;

  $: if (date) {
    databaseService
      .read(tasksKey)
      .then((data) => (tasks = data as Task[]))
      .catch(() => (tasks = []));
  }

  onMount(async () => {
    tasks = (await databaseService.read(tasksKey)) as Task[];
  });

  async function addNewTask(event: CustomEvent<Task>) {
    const task = event.detail;

    tasks = [...tasks, task];

    await databaseService.save(tasksKey, tasks);
  }

  function handleDayChange(dayToAdd: number) {
    date = date.add(dayToAdd, "day");
  }
</script>

<NewTaskDialog {date} bind:visible on:add-task={addNewTask} />

<div class="timeline-container">
  <TimelineBar
    {date}
    on:to-add={() => (visible = true)}
    on:previous-day={() => handleDayChange(-1)}
    on:next-day={() => handleDayChange(1)}
  />

  <div class="timeline">
    {#if tasks.length === 0}
      <EmptyTimeline />
    {:else}
      <div class="all-timelines">
        {#each tasks as task}
          <TimelineItem {task} icon={TASKS[task.type]} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .timeline-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    width: 100%;
  }

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
