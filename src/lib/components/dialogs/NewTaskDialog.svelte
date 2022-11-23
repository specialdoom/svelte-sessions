<script lang="ts">
    import type { Task } from "../../utils/types";
    import { Dialog, FormItem, Radio, TextInput } from "@specialdoom/proi-ui";
    import { generateNewTask, TASKS } from "../../utils/task";
    import { timeline } from "../../stores/days";
    import { auth } from "../../stores/auth";
    import { addTaskForUser } from "../../services/firestore-tasks";

    export let visible: boolean = true;

    let task: Task = {
        date: $timeline.current,
        title: "",
        description: "",
        type: "custom",
    };

    function addNewTask() {
        $timeline.tasks = [...$timeline.tasks, { ...task }];

        addTaskForUser($auth.uid, { ...task });

        task = generateNewTask();
    }
</script>

<Dialog
    bind:visible
    title="🗒️ Add new task: {$timeline.current.format('DD/MM/YYYY, HH:mm')}"
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
