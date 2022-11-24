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
  <span class="name">
    <slot />
  </span>
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
    background: rgb(71, 154, 137);
    background: linear-gradient(
      90deg,
      rgba(71, 154, 137, 1) 0%,
      rgba(115, 191, 176, 0.8524452017134979) 100%
    );
    color: #ffffff;
  }

  @media only screen and (max-width: 800px) {
    div {
      justify-content: center;
    }

    .name {
      display: none;
    }
  }
</style>
