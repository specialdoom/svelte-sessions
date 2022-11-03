<script>
  import { getRandomPositionForElement } from "../../utils/element.js";
  import { createEventDispatcher } from "svelte";

  export let id;
  export let captured = false;

  let containerRef = undefined;

  const dispatch = createEventDispatcher();

  $: if (containerRef && !captured) {
    getRandomPositionForElement(containerRef);
  }

  function handleMouseEnter(event) {
    if (!captured) getRandomPositionForElement(event.target);
  }

  function handleClick() {
    if (!captured) {
      captured = true;
      dispatch("capture", id);
    }
  }
</script>

<div
  class="ghost-container"
  bind:this={containerRef}
  on:mouseenter={handleMouseEnter}
  on:click={handleClick}
  on:keypress
  on:keyup
  on:keydown
>
  <div class="ghost" class:captured>
    <div class="ghost__eyes" />
    <div class="ghost__feet">
      <div class="ghost__feet-foot" />
      <div class="ghost__feet-foot" />
      <div class="ghost__feet-foot" />
      <div class="ghost__feet-foot" />
    </div>
  </div>
</div>

<style>
  .ghost-container {
    position: absolute;
    transition: top 2s;
    transition: left 2s;
  }

  .ghost {
    position: relative;
    width: 130px;
    height: 180px;
    background: #fff;
    box-shadow: -17px 0px 0px #dbdbdb inset, 0 0 50px #5939db;
    border-radius: 100px 100px 0 0;
    animation: float 2s infinite;
  }

  .ghost.captured {
    background: var(--n400);
  }

  .ghost.captured .ghost__feet-foot {
    background: var(--n400);
  }

  .ghost.captured .ghost__feet-foot:last-child {
    background-image: linear-gradient(to right, var(--n400) 49%, #dbdbdb 45%);
  }

  .ghost__eyes {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 70px 0 0;
    width: 90px;
    height: 20px;
  }

  .ghost__eyes:before,
  .ghost__eyes:after {
    content: "";
    display: block;
    width: 15px;
    height: 25px;
    background: #00034b;
    border-radius: 50%;
  }

  .ghost__feet {
    width: 100%;
    position: absolute;
    bottom: -13px;
    display: flex;
    justify-content: space-between;
  }

  .ghost__feet-foot {
    width: 25%;
    height: 26px;
    border-radius: 50%;
    background: #fff;
  }

  .ghost__feet-foot:last-child {
    background-image: linear-gradient(to right, #fff 49%, #dbdbdb 45%);
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  @keyframes shadow {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
  }
</style>
