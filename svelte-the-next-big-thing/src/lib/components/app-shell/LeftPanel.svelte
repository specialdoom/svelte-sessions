<aside class="left-side-bar">
  <slot />
</aside>

<style>
  .left-side-bar {
    box-sizing: border-box;
    width: 15%;
    height: 100%;
    border-radius: 16px;
    background-color: #fdfafe;
    padding: 8px;
  }

  @media only screen and (max-width: 500px) {
    .left-side-bar {
      height: 10%;
      width: 100%;
    }
  }
</style>
