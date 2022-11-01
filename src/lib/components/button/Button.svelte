<script>
    import {Button} from "@specialdoom/proi-ui";
</script>

<Button
  variant="ghost"
  className="transparent"
>
    <slot />
</Button>
<style >
    :global(.transparent.proi-button) {
        background: transparent;
        color: var(--bright);
        border-color: var(--bright);
    }

    :global(.transparent.proi-button:hover){
        background: var(--bright);
        color: var(--n800);
        border-color: var(--bright);
    }
</style>