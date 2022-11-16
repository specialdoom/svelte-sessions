<div class:side-nav={true}>
  <div class:side-nav-items={true}>
    <slot />
  </div>
  <div>
    <slot name="trail" />
  </div>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }
  div.side-nav {
    justify-content: space-between;
    height: 100%;
  }

  div.side-nav-items {
    gap: 16px;
  }
</style>
