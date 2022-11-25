<script lang="ts">
    import dayjs from "../../utils/day-js";
    import type {Task} from "../../utils/types";

    export let icon: string;
    export let task: Task;
</script>

<div class="timeline-card">
    <div class="timeline-info">
        <span class="timeline-icon">{icon}</span>
        {task.title}
    </div>
    {#if task.description !== ""}
        <div class="timeline-description">
            {task.description}
        </div>
    {/if}
    <div class="timeline-time">
        {dayjs(task.timestamp).format("HH:mm")}
    </div>
</div>

<style>
    .timeline-card {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px;
        height: fit-content;
        border-radius: 8px;
        padding: 8px;
        background: var(--g0);
    }

    .timeline-info {
        display: inline-flex;
        gap: 8px;
        align-items: center;
        height: 32px;
    }

    .timeline-info span {
        height: 32px;
        width: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: var(--bright);
    }

    .timeline-description {
        font-size: 12px;
    }

    .timeline-time {
        font-size: 8px;
        color: var(--n600);
    }
</style>