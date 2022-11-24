<script>
    import TimelineArea from "./TimelineArea.svelte";
    import TimelineItem from "./TimelineItem.svelte";
    import NoTimelineState from "../../icons/NoTimelineState.svelte";
    import { TASKS } from "../../utils/task";
    import { timeline } from "../../stores/days";
</script>

{#if $timeline.tasks.length === 0}
    <div class="empty-state">
        <NoTimelineState />
        <p>
            {$timeline.current.isToday()
                ? `Today's timeline of yours is empty!`
                : `This day's timeline of yours is empty`}
        </p>
    </div>
{:else}
    <TimelineArea>
        <div class="all-timelines">
            {#each $timeline.tasks as task}
                <TimelineItem {task} icon={TASKS[task.type]} />
            {/each}
        </div>
    </TimelineArea>
{/if}

<style>
    .all-timelines {
        position: relative;
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

    @media all and (max-width: 768px) {
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
