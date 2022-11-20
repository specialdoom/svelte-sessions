<script lang="ts">
  import AppShell from "./lib/components/app-shell/AppShell.svelte";
  import LeftPanel from "./lib/components/app-shell/LeftPanel.svelte";
  import RightPanel from "./lib/components/app-shell/RightPanel.svelte";
  import SideNav from "./lib/components/nav/SideNav.svelte";
  import SideNavItem from "./lib/components/nav/SideNavItem.svelte";
  import DashboardIcon from "./lib/icons/DashboardIcon.svelte";
  import SettingsIcon from "./lib/icons/SettingsIcon.svelte";
  import TaskButton from "./lib/components/task-button/TaskButton.svelte";
  import SideNavBrand from "./lib/components/nav/SideNavBrand.svelte";
  import Content from "./lib/components/app-shell/Content.svelte";
  import NewTaskDialog from "./lib/components/dialogs/NewTaskDialog.svelte";
  import { current } from "./lib/stores/days";
  import Wheather from "./lib/components/wheather/Wheather.svelte";

  import { Router, goto } from "@roxi/routify";
  import { routes } from "../.routify/routes";

  let newTaskDialog: boolean = false;
</script>

<NewTaskDialog
  bind:visible={newTaskDialog}
  on:ok={() => (newTaskDialog = false)}
/>
<AppShell>
  <LeftPanel>
    <SideNav>
      <SideNavBrand />
      <SideNavItem icon={DashboardIcon} on:click={() => $goto("/")} active>
        Timeline
      </SideNavItem>
      <SideNavItem
        icon={SettingsIcon}
        on:click={() => {
          console.log("settings");
          $goto("/settings");
        }}
      >
        Settings
      </SideNavItem>
      {#if $current.isToday()}
        <TaskButton
          slot="trail"
          description="click here"
          on:click={() => (newTaskDialog = true)}
        >
          Create Task
        </TaskButton>
      {/if}
    </SideNav>
  </LeftPanel>
  <Content>
    <Router {routes} />
  </Content>
  <RightPanel>
    <Wheather />
  </RightPanel>
</AppShell>
