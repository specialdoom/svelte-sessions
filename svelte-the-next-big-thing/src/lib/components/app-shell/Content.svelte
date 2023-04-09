<main>
  <slot />
</main>

<style>
  main {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: #fdfafe;
    padding: 8px;
  }

  @media only screen and (max-width: 500px) {
    main {
      height: 90%;
    }
  }
</style>
