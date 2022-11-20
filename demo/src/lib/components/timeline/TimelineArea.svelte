<div class="timeline-area">
    <slot />
</div>

<style>
    .timeline-area {
        overflow: auto;
    }

    .timeline-area::-webkit-scrollbar {
        display: none;
    }
</style>
