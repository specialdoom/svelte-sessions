<script lang="ts">
    export let title: string = "";
    export let icon: string = "💻";
</script>

<div class="timeline-card">
    <div class="timeline-info">
        <span class="timeline-icon">{icon}</span>
        {title}
    </div>
    <div class="timeline-description">
        <slot />
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
</style>