<script>
  import { AppShell, AppRail, AppRailTile } from "@brainandbones/skeleton";
  import { appRailStore } from "./stores/app-rail";
  import { Grid, Folder, Notification } from "./lib/icons/index";
</script>

<AppRail selected={appRailStore}>
  <AppRailTile label="Dashboard" title="Dashboard" value={1}>
    <Grid />
  </AppRailTile>
  <AppRailTile label="My projects" title="My projects" value={2}>
    <Folder />
  </AppRailTile>
  <AppRailTile label="Notifications" title="Notifications" value={3}>
    <Notification />
  </AppRailTile>
</AppRail>
<AppShell>
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
</AppShell>
