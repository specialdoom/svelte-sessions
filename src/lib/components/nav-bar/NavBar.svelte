<script>
  import { isActive } from "@roxi/routify";
  import { FormItem, Dialog, TextInput } from "@specialdoom/proi-ui";
  import Button from "../button/Button.svelte";

  let showContactUs = false;

  let form = {
    name: "",
    email: "",
    message: "",
  };

  function handleClick() {
    showContactUs = true;
  }

  function handleDialogOk() {
    alert(JSON.stringify(form));
    showContactUs = false;
  }
</script>

<nav>
  <div class:logo={true}>Boo</div>
  <div class:nav-items={true}>
    <div class:nav-item={true}>
      <a href="/" class:active={$isActive("./")}>home</a>
    </div>
    <div class:nav-item={true}>
      <a href="/projects" class:active={$isActive("/projects")}>projects</a>
    </div>
    <div class:nav-item={true}>
      <a href="/faq" class:active={$isActive("/faq")}>faq</a>
    </div>
  </div>
  <div class:nav-actions={true}>
    <Button on:click={handleClick}>Contact us</Button>
  </div>
</nav>

<Dialog
  title="Contact me 🎃🎃"
  bind:visible={showContactUs}
  onOk={handleDialogOk}
>
  <div
    style:display="flex"
    style:flex-direction="column"
    style:align-items="center"
  >
    <FormItem label="Name 👻">
      <TextInput bind:value={form.name} />
    </FormItem>

    <FormItem label="Email 💀">
      <TextInput bind:value={form.email} />
    </FormItem>

    <FormItem
      label="Message 🩸"
      description="TextArea component is coming... 😈"
    >
      <TextInput bind:value={form.message} />
    </FormItem>
  </div>
</Dialog>

<style>
  nav {
    position: fixed;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 72px;
    width: 100%;
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
    width: 80%;
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
    width: 10%;
  }
</style>
