<script>
  import { Button } from "@specialdoom/proi-ui";
  import { signInWithRedirect } from "firebase/auth";
  import {
    facebookProvider,
    firebaseAuth,
    googleProvider,
  } from "../../../firebase";
  import FacebookIcon from "../../icons/FacebookIcon.svelte";
  import GoogleIcon from "../../icons/GoogleIcon.svelte";
  import UnauthenticatedState from "../../states/UnauthenticatedState.svelte";

  function googleLogin() {
    signInWithRedirect(firebaseAuth, googleProvider);
  }

  function facebookLogin() {
    signInWithRedirect(firebaseAuth, facebookProvider);
  }
</script>

<div class="unauthenticated">
  <img src="logo.png" alt="Dailyhunt logo" />
  <UnauthenticatedState />
  <div class="actions">
    <Button on:click={googleLogin}>
      <GoogleIcon active />Authenticate using Google
    </Button>
    <Button on:click={googleLogin}>
      <FacebookIcon active />Authenticate using Facebook
    </Button>
  </div>
</div>

<style>
  div.unauthenticated {
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  div.actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 300px;
  }
</style>
