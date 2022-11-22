<aside class:right-side-bar={true}>
  <slot />
</aside>

<style>
  aside.right-side-bar {
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
</style>
