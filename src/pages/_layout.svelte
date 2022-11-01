<script>
    import NavBar from "../lib/components/nav-bar/NavBar.svelte";
    import Footer from "../lib/components/footer/Footer.svelte";
</script>

<div>
 <NavBar/>
 <main>
  <slot />
 </main>
 <Footer />
</div>

<style>
    div {
        height: 100vh;
        width: 100%;
        background-color: var(--black);
    }

    main {
        position: relative;
        height: 80%;
        width: 100%;
    }
</style>