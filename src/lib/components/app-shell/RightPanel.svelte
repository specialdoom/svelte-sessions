<aside class="right-side-bar">
  <slot />
</aside>

<style>
  .right-side-bar {
    box-sizing: border-box;
    width: 25%;
    height: 100%;
    padding: 8px;
    border-radius: 16px;
    gap: 8px;
    background-color: #fdfafe;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 800px) {
    .right-side-bar {
      width: 100%;
      height: 30%;
    }
  }
</style>
