<script lang="ts">
  import AppShell from "./lib/components/app-shell/AppShell.svelte";
  import LeftPanel from "./lib/components/app-shell/LeftPanel.svelte";
  import RightPanel from "./lib/components/app-shell/RightPanel.svelte";
  import SideNav from "./lib/components/nav/SideNav.svelte";
  import SideNavItem from "./lib/components/nav/SideNavItem.svelte";
  import DashboardIcon from "./lib/icons/DashboardIcon.svelte";
  import ProjectsIcon from "./lib/icons/ProjectsIcon.svelte";
  import NotificationIcon from "./lib/icons/NotificationIcon.svelte";
  import SettingsIcon from "./lib/icons/SettingsIcon.svelte";
  import TaskButton from "./lib/components/task-button/TaskButton.svelte";
  import SideNavBrand from "./lib/components/nav/SideNavBrand.svelte";
  import Content from "./lib/components/app-shell/Content.svelte";
  import TimelineShell from "./lib/components/timeline/TimelineShell.svelte";
</script>

<AppShell>
  <LeftPanel>
    <SideNav>
      <SideNavBrand />
      <SideNavItem icon={DashboardIcon} active>Dashoard</SideNavItem>
      <SideNavItem icon={ProjectsIcon}>My projects</SideNavItem>
      <SideNavItem icon={NotificationIcon}>Notifications</SideNavItem>
      <SideNavItem icon={SettingsIcon}>Settings</SideNavItem>
      <TaskButton slot="trail" description="click here">Create Task</TaskButton>
    </SideNav>
  </LeftPanel>
  <Content><TimelineShell /></Content>
  <RightPanel />
</AppShell>
