<script lang="ts">
    import type { Task } from "../../utils/types";
    import { Dialog, FormItem, Radio, TextInput } from "@specialdoom/proi-ui";
    import { newTask } from "../../stores/days";
    import { generateNewTask, TASKS } from "../../utils/task";
    import { current } from "../../stores/days";

    export let visible: boolean = true;

    let task: Task = {
        date: $current,
        title: "",
        description: "",
        type: "custom",
    };

    function addNewTask() {
        newTask($current.format("DD/MM/YYYY"), { ...task });

        task = generateNewTask();
    }
</script>

<Dialog
    bind:visible
    title="🗒️ Add new task: {$current.format('DD/MM/YYYY, HH:mm')}"
    on:ok={addNewTask}
    on:ok
>
    <FormItem label="Title">
        <TextInput placeholder="Task title" bind:value={task.title} />
    </FormItem>
    <FormItem label="Description" description="Optional">
        <TextInput
            placeholder="Task description"
            bind:value={task.description}
        />
    </FormItem>
    <FormItem label="Task type">
        {#each Object.entries(TASKS) as entry}
            <Radio value={entry[0]} bind:group={task.type}>
                {entry[0]}: {entry[1]}
            </Radio>
        {/each}
    </FormItem>
</Dialog>
