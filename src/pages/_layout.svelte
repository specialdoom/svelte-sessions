<script>
    import NavBar from "../lib/components/nav-bar/NavBar.svelte";
</script>

<div>
 <NavBar/>
 <main>
  <slot />
 </main>
</div>

<style>
    div {
        height: 100vh;
        width: 100%;
        background-color: var(--black);
    }

    main {
        box-sizing: border-box;
        position: relative;
        height: 90%;
        width: 100%;
        padding: 0 16px;
     overflow: hidden;
    }
</style>