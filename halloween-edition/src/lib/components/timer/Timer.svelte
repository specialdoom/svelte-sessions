<script>
  import { onMount } from "svelte";

  export let seconds = 0;
  export let minutes = 0;

  let interval = undefined;

  onMount(() => {
    interval = setInterval(() => {
      seconds += 1;
      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div>
  {minutes}:{seconds}
</div>

<style>
  div {
    position: absolute;
    height: 100%;
    width: 100%;
    font-family: "motter_ombranormal";
    color: var(--y600);
    font-size: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
