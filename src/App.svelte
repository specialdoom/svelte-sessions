<script lang="ts">
  import { initializeApp } from "firebase/app";
  import {
    getAuth,
    onAuthStateChanged,
    signInWithRedirect,
  } from "firebase/auth";
  import { firebaseConfig } from "../firebase-config";
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { onMount } from "svelte";
  import { auth } from "./lib/stores/auth";
  import { GoogleAuthProvider } from "firebase/auth";

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  let app = undefined;

  onMount(() => {
    app = initializeApp(firebaseConfig);

    onAuthStateChanged(getAuth(app), (user) => {
      if (user) {
        $auth.user = user.email;
        // ...
      } else {
        // User is signed out
        // ...
        console.log("logout");
      }
    });
  });

  function login() {
    signInWithRedirect(getAuth(app), provider);
  }
</script>

{#if !$auth.user}
  Not logged in!;
  <button on:click={login}>Login</button>
{:else}
  <Router {routes} />
{/if}
