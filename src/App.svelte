<script lang="ts">
  import { onAuthStateChanged } from "firebase/auth";
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { onMount } from "svelte";
  import { auth } from "./lib/stores/auth";
  import UnauthenticatedApp from "./lib/components/app-shell/UnauthenticatedApp.svelte";
  import { firebaseAuth } from "./firebase";
  import AppLoader from "./lib/components/app-shell/AppLoder.svelte";
  import { ToastProvider } from "@specialdoom/proi-ui";
  import { settings } from "./lib/stores/app";
  import { min } from "./lib/stores/days";
  import dayjs from "./lib/utils/day-js";

  let showLoading: boolean;

  onMount(async () => {
    showLoading = true;

    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        auth.update(() => ({
          email: user.email,
          uid: user.uid,
          name: user.displayName,
        }));

        min.set(dayjs(user.metadata.creationTime));
      } else {
        auth.update(() => ({ email: "", uid: "", name: "" }));
      }
      showLoading = false;
    });

    const savedSettings = localStorage.getItem("settings");

    if (savedSettings) {
      $settings = JSON.parse(savedSettings);
    } else {
      localStorage.setItem("settings", JSON.stringify($settings));
    }
  });
</script>

{#if showLoading}
  <AppLoader />
{:else if !$auth.uid}
  <UnauthenticatedApp />
{:else}
  <ToastProvider />
  <Router {routes} />
{/if}
