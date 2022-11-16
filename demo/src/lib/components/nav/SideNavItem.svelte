<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types";

  export let icon: Constructor<SvelteComponent> | undefined = undefined;
  export let active: boolean = false;
</script>

<div on:click on:keydown class:active>
  {#if icon}
    <svelte:component this={icon} class="square" {active} />
  {/if}
  <slot />
</div>

<style>
  div {
    box-sizing: border-box;
    display: inline-flex;
    padding: 4px 16px;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 40px;
    line-height: 24px;
    font-size: 14px;
  }

  div.active {
    background: #5e5df2;
    color: #ffffff;
    border-radius: 8px;
  }
</style>
