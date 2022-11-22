<script lang="ts">
  import { onAuthStateChanged } from "firebase/auth";
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { onMount } from "svelte";
  import { auth } from "./lib/stores/auth";
  import UnauthenticatedApp from "./lib/components/app-shell/UnauthenticatedApp.svelte";
  import { firebaseAuth } from "./firebase";
  import AppLoader from "./lib/components/app-shell/AppLoder.svelte";

  let showLoading: boolean = true;

  onMount(() => {
    showLoading = true;
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        $auth.user = user.email;
      } else {
        $auth.user = "";
      }

      showLoading = false;
    });
  });
</script>

{#if showLoading}
  <AppLoader />
{:else if !$auth.user}
  <UnauthenticatedApp />
{:else}
  <Router {routes} />
{/if}
