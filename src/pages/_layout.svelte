<script lang="ts">
  import AppShell from "../lib/components/app-shell/AppShell.svelte";
  import LeftPanel from "../lib/components/app-shell/LeftPanel.svelte";
  import RightPanel from "../lib/components/app-shell/RightPanel.svelte";
  import SideNav from "../lib/components/nav/SideNav.svelte";
  import SideNavItem from "../lib/components/nav/SideNavItem.svelte";
  import DashboardIcon from "../lib/icons/DashboardIcon.svelte";
  import SettingsIcon from "../lib/icons/SettingsIcon.svelte";
  import SideNavBrand from "../lib/components/nav/SideNavBrand.svelte";
  import Content from "../lib/components/app-shell/Content.svelte";
  import { isActive, goto } from "@roxi/routify";
  import Todos from "../lib/components/todos/Todos.svelte";
  import Hello from "../lib/components/hello/Hello.svelte";
  import { settings } from "../lib/stores/app";
  import LogoutIcon from "../lib/icons/LogoutIcon.svelte";
  import { getAuth, signOut } from "firebase/auth";
  import TasksIcon from "../lib/icons/TasksIcon.svelte";
  import Weather from "../lib/components/weather/Weather.svelte";

  const routes = [
    {
      href: "/index",
      name: "Timeline",
      icon: DashboardIcon,
      tablet: false,
    },
    {
      href: "/todos",
      name: "Todos",
      icon: TasksIcon,
      tablet: true,
    },
    {
      href: "/settings",
      name: "Settings",
      icon: SettingsIcon,
      tablet: false,
    },
  ];

  $: hasSettings = $settings.weather || $settings.todos || $settings.greetings;

  function logout() {
    signOut(getAuth());
  }
</script>

<AppShell>
  <LeftPanel>
    <SideNav>
      <SideNavBrand />
      {#each routes as route}
        <SideNavItem
          icon={route.icon}
          on:click={() => $goto(route.href)}
          active={$isActive(route.href, {}, { strict: true })}
          tablet={route.tablet}
        >
          {route.name}
        </SideNavItem>
      {/each}
      <SideNavItem icon={LogoutIcon} on:click={logout} slot="trail" outline>
        Logout
      </SideNavItem>
    </SideNav>
  </LeftPanel>
  <Content>
    <slot />
  </Content>
  {#if hasSettings}
    <RightPanel>
      {#if $settings.greetings}
        <Hello />
      {/if}
      {#if $settings.weather}
        <Weather />
      {/if}
      {#if $settings.todos}
        <Todos />
      {/if}
    </RightPanel>
  {/if}
</AppShell>
