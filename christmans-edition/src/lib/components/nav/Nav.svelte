<script>
</script>

<nav>
  <div class:xmas-logo={true}>X'mas</div>
  <div class:xmas-nav-items={true} />
  <div class:xmas-nav-actions={true} />
</nav>

<style>
  nav {
    font-family: "Comfortaa", cursive;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    height: 72px;
    gap: 8px;
    width: 100%;
    padding: 0 16px;
    color: var(--bright);
    z-index: 10;
  }

  .xmas-logo {
    font-weight: 700;
    display: inherit;
    align-items: inherit;
    justify-content: center;
    height: 100%;
    width: 10%;
    font-size: 32px;
    padding: 0px 12px;
  }

  .xmas-nav-items {
    display: inherit;
    width: 70%;
    gap: 16px;
    align-items: inherit;
    height: 100%;
  }

  .xmas-nav-item {
    display: inherit;
    align-items: inherit;
    box-sizing: border-box;
    font-weight: 400;
    padding: 0 16px;
    height: 100%;
  }

  .xmas-nav-item a {
    color: var(--y600);
    text-decoration: unset;
  }

  .xmas-nav-actions {
    display: inherit;
    align-items: inherit;
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }
</style>
