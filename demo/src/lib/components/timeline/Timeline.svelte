<div>
  {#each [...Array(10).keys()] as count}
    <div class:card={true}>Some details</div>
  {/each}
</div>

<style>
  div {
    height: 100%;
    overflow: hidden;
  }

  div.card {
    height: 200px;
    width: 300px;
    background: var(--g400);
  }
</style>
