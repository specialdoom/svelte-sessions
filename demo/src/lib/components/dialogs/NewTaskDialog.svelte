<script lang="ts">
    import { Dialog, FormItem, Radio, TextInput } from "@specialdoom/proi-ui";
    import dayjs from "dayjs";
    import { newTask } from "../../stores/days";
    import { TASKS } from "../../utils/task";
    import type { Task } from "../../utils/types";

    export let visible: boolean = true;

    let task: Task = {
        time: dayjs(),
        title: "",
        description: "",
        type: "custom",
    };

    $: console.log(task);

    function addNewTask() {
        newTask(dayjs().format("DD/MM/YYYY"), task);

        task.title = "";
        task.description = "";
        task.type = "custom";
    }
</script>

<Dialog bind:visible title="🗒️ Add new task" onOk={addNewTask}>
    time: {task.time.format("HH:hh A")}
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
