<div class="app-shell">
  <slot />
</div>

<style>
  .app-shell {
    height: 100vh;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    gap: 8px;
    padding: 20px;
  }

  @media only screen and (max-width: 500px) {
    .app-shell {
      padding: 4px;
      flex-direction: column;
    }
  }
</style>
