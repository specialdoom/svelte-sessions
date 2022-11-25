<aside class:left-side-bar={true}>
  <slot />
</aside>

<style>
  aside.left-side-bar {
    box-sizing: border-box;
    width: 15%;
    height: 100%;
    border-radius: 16px;
    background-color: #fdfafe;
    padding: 8px;
  }

  @media only screen and (max-width: 500px) {
    aside.left-side-bar {
      height: 10%;
      width: 100%;
    }
  }
</style>
