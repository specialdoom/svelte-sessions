<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types";

  export let icon: Constructor<SvelteComponent> = undefined;
  export let active: boolean = false;
  export let outline: boolean = false;
  export let tablet: boolean = false;
</script>

<div on:click on:keydown class:active class:outline class:tablet>
  <span class="icon">
    {#if icon}
      <svelte:component this={icon} class="square" {active} />
    {/if}
  </span>
  <span class="name">
    <slot />
  </span>
</div>

<style>
  div {
    box-sizing: border-box;
    display: inline-flex;
    padding: 4px 12px;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 40px;
    line-height: 24px;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
  }

  span.icon {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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

  div.outline {
    border: 2px solid var(--g400);
  }

  div.outline:hover {
    box-shadow: unset;
  }

  .tablet {
    display: none;
  }

  @media only screen and (max-width: 800px) {
    div {
      justify-content: center;
    }

    .name {
      display: none;
    }

    .tablet {
      display: flex;
    }
  }
</style>
