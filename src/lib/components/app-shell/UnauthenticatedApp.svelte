<script>
    import { Button } from "@specialdoom/proi-ui";
    import { signInWithRedirect } from "firebase/auth";
    import { firebaseAuth, provider } from "../../../firebase";
    import GoogleIcon from "../../icons/GoogleIcon.svelte";
    import UnauthenticatedState from "../../states/UnauthenticatedState.svelte";
    import SideNavBrand from "../nav/SideNavBrand.svelte";

    function login() {
        signInWithRedirect(firebaseAuth, provider);
    }
</script>

<div>
    <img src="logo.png" alt="Dailyhunt logo" />
    <UnauthenticatedState />
    <Button on:click={login}>
        <GoogleIcon active />
        &nbsp;&nbsp; Authenticate using Google
    </Button>
</div>

<style>
    div {
        height: 100vh;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    img {
        width: 300px;
    }
</style>
