<script lang="ts">
  const squareClasses = [1, 3, 5, 7, 9, 13, 14, 15, 17, 19, 23, 24, 25];
  const towerClasses = [4, 16, 18, 20];
  const sliceClasses = [2, 6, 10, 12, 21];
</script>

<div class:xmas-grid={true}>
  {#each [...Array(25).keys()] as count}
    <div
      class="xmas-card div{count + 1}"
      class:square={squareClasses.includes(count + 1)}
      class:tower={towerClasses.includes(count + 1)}
      class:slice={sliceClasses.includes(count + 1)}
    >
      {count}
    </div>
  {/each}
</div>

<style>
  .xmas-grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
  }

  .xmas-card {
    border-radius: 8px;
    background: blue;
  }

  .square {
    height: 120px;
    width: 120px;
  }

  .tower {
    height: 240px;
    width: 120px;
  }

  .slice {
    height: 120px;
    width: 240px;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }

  .div2 {
    grid-area: 1 / 2 / 2 / 4;
  }

  .div3 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .div4 {
    grid-area: 1 / 5 / 3 / 6;
  }
  .div5 {
    grid-area: 1 / 6 / 2 / 7;
  }
  .div6 {
    grid-area: 1 / 7 / 2 / 9;
  }
  .div7 {
    grid-area: 1 / 9 / 2 / 10;
  }
  .div8 {
    grid-area: 2 / 1 / 4 / 2;
  }
  .div9 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .div10 {
    grid-area: 2 / 3 / 3 / 5;
  }
  .div11 {
    grid-area: 2 / 6 / 3 / 8;
  }
  .div12 {
    grid-area: 2 / 8 / 3 / 10;
  }
  .div13 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .div14 {
    grid-area: 3 / 3 / 4 / 4;
  }
  .div15 {
    grid-area: 3 / 4 / 4 / 5;
  }
  .div16 {
    grid-area: 3 / 5 / 5 / 6;
  }
  .div17 {
    grid-area: 3 / 6 / 4 / 7;
  }
  .div18 {
    grid-area: 3 / 7 / 5 / 8;
  }
  .div19 {
    grid-area: 3 / 8 / 4 / 9;
  }
  .div20 {
    grid-area: 3 / 9 / 5 / 10;
  }
  .div21 {
    grid-area: 4 / 1 / 5 / 3;
  }
  .div22 {
    grid-area: 4 / 3 / 5 / 4;
  }
  .div23 {
    grid-area: 4 / 4 / 5 / 5;
  }
  .div24 {
    grid-area: 4 / 6 / 5 / 7;
  }
  .div25 {
    grid-area: 4 / 8 / 5 / 9;
  }
</style>
