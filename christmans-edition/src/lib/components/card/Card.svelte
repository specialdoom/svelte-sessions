<script lang="ts">
  export let className: string = "";
</script>

<div class:xmas-card={true} class={className}>
  <slot />
</div>

<style>
  .xmas-card {
    border-radius: 8px;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .xmas-card.square {
    height: 120px;
    width: 120px;
  }

  .xmas-card.tower {
    height: 240px;
    width: 120px;
  }

  .xmas-card.slice {
    height: 120px;
    width: 240px;
  }
</style>
