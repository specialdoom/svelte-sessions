<div class:shell={true}>
  <slot />
</div>

<style>
  div.shell {
    height: 100vh;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    gap: 8px;
    padding: 20px;
  }

  @media only screen and (max-width: 500px) {
    div.shell {
      padding: 4px;
    }
  }
</style>
