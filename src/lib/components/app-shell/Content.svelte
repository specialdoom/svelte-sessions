<main>
  <slot />
</main>

<style>
  main {
    box-sizing: border-box;
    width: 60%;
    height: 100%;
    border-radius: 16px;
    background: #fdfafe;
    padding: 8px;
  }

  @media only screen and (max-width: 800px) {
    main{
      width: 85%
    }
  }

  @media only screen and (max-width: 500px) {
    main{
      width: 100%
    }
  }
</style>
