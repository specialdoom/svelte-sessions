<div class:shell={true}>
  <slot name="left" />
  <slot name="content" />
  <slot name="right" />
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
</style>
