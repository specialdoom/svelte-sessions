<div>
    <div class="items">
        <slot />
    </div>
    <div class="trail">
        <slot name="trail" />
    </div>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 8px 0;
        width: 100%;
    }

    div.items {
        display: flex;
        flex-direction: column;
    }

    div.trail {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
