<script>
    import Button from "../button/Button.svelte";
</script>

<nav>
    <div class:logo={true}>Boo</div>
    <div class:nav-items={true}>
        <div class:nav-item={true}><a href="/">home</a></div>
        <div class:nav-item={true}><a href="/projects">projects</a></div>
        <div class:nav-item={true}>faq</div>
    </div>
    <div class:nav-actions={true}>
        <Button>Contact us</Button>
    </div>
</nav>

<style>
    nav {
        box-sizing: border-box;
        padding: 4px 16px;
        display: flex;
        align-items: center;
        height: 10%;
        width: 100%;
        font-family: "motter_ombranormal";
        color: var(--bright);
    }

    div.logo {
        display: inherit;
        align-items: inherit;
        justify-content: center;
        height: 100%;
        width: 10%;
        font-size: 32px;
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

    nav div.nav-actions {
        display: inherit;
        align-items: inherit;
        width: 10%;
    }
</style>
