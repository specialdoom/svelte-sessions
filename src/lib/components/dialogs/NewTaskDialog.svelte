<script lang="ts">
  import {
    Dialog,
    FormItem,
    Radio,
    Textarea,
    TextInput,
  } from "@specialdoom/proi-ui";
  import dayjs, { Dayjs } from "dayjs";
  import { createEventDispatcher } from "svelte";
  import { generateNewTask, TASKS } from "../../utils/task";
  import type { Task } from "../../utils/types";

  export let visible: boolean = true;
  export let date: Dayjs = dayjs();

  let task: Task = generateNewTask(date);

  const dispatch = createEventDispatcher();

  function addTask() {
    dispatch("add-task", task);

    visible = false;

    task = generateNewTask(date);
  }
</script>

<Dialog
  bind:visible
  title="🗒️ Add task: {date.format('DD/MM/YYYY')}"
  on:ok={addTask}
>
  <FormItem label="Title">
    <TextInput placeholder="Task title" bind:value={task.title} />
  </FormItem>
  <FormItem label="Description" description="Optional">
    <Textarea
      placeholder="Task description"
      bind:value={task.description}
      rows={2}
    />
  </FormItem>
  <FormItem label="Task type">
    <div class="radio-group">
      {#each Object.entries(TASKS) as entry}
        <Radio value={entry[0]} bind:group={task.type}>
          {entry[1]}
        </Radio>
      {/each}
    </div>
  </FormItem>
</Dialog>

<style>
  .radio-group {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    gap: 4px;
  }
</style>
