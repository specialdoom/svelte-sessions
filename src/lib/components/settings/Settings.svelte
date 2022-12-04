<div class="settings-container">
  <div class="settings-items">
    <slot />
  </div>
  <div class="settings-trail">
    <slot name="trail" />
  </div>
</div>

<style>
  .settings-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 8px 0;
    width: 100%;
  }

  .settings-items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
  }

  .settings-trail {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
