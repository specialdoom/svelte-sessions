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
    border-radius: 8px;
    cursor: pointer;
  }

  div:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  div.active {
    background: rgb(84, 91, 243);
    background: linear-gradient(
      90deg,
      rgba(84, 91, 243, 1) 0%,
      rgba(129, 87, 241, 1) 100%
    );
    color: #ffffff;
  }
</style>
