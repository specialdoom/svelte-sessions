<script>
  import { isActive } from "@roxi/routify";
  import { randUser } from "@ngneat/falso";
  import { randomIntFromInterval } from "../../utils/number.js";
  import { onMount } from "svelte";
  import avatars from "../avatars/index.js";

  let username = randUser().username;

  onMount(() => {
    if (localStorage.getItem("username")) {
      username = localStorage.getItem("username");
    } else {
      localStorage.setItem("username", username);
    }
  });
</script>

<nav>
  <div class:logo={true}>Boo</div>
  <div class:nav-items={true}>
    <div class:nav-item={true}>
      <a href="/" class:active={$isActive("./")}>home</a>
    </div>
    <div class:nav-item={true}>
      <a href="/play" class:active={$isActive("/play")}>play</a>
    </div>
    <div class:nav-item={true}>
      <a href="/faq" class:active={$isActive("/faq")}>faq</a>
    </div>
  </div>
  <div class:nav-actions={true}>
    <svelte:component
      this={avatars[randomIntFromInterval(0, avatars.length - 1)]}
    />
    <span>{username}</span>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 72px;
    width: 100%;
    padding: 0 16px;
    font-family: "motter_ombranormal";
    color: var(--bright);
    z-index: 10;
  }

  div.logo {
    display: inherit;
    align-items: inherit;
    justify-content: center;
    height: 100%;
    width: 10%;
    font-size: 32px;
    color: var(--y600);
  }

  nav div.nav-items {
    display: inherit;
    width: 70%;
    gap: 16px;
    justify-content: center;
    align-items: inherit;
  }

  div.nav-item {
    box-sizing: border-box;
    font-family: Arial;
    padding: 0 16px;
  }

  div.nav-item a {
    color: var(--y600);
    text-decoration: unset;
  }

  div.nav-item a.active {
    text-decoration: underline;
  }

  nav div.nav-actions {
    display: inherit;
    align-items: inherit;
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }

  div.nav-actions span {
    line-height: 60%;
    color: var(--y600);
  }

  :global(div.nav-actions svg) {
    height: 60%;
  }
</style>
