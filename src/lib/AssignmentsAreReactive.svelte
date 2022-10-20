<script>
    export let title = "Initial title";

    function change(){
        title = title.toUpperCase();
    }
</script>

<h1>{title}</h1>
<button on:click={change}>Uppercase me</button>

<style>
    h1 {
        color: red;
    }
</style>