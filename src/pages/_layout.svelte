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
    import Wheather from "../lib/components/wheather/Wheather.svelte";
    import { isActive, goto } from "@roxi/routify";
    import Todos from "../lib/components/todos/Todos.svelte";
    import Divider from "../lib/components/divider/Divider.svelte";

    const routes = [
        {
            href: "/index",
            name: "Timeline",
            icon: DashboardIcon,
        },
        {
            href: "/settings",
            name: "Settings",
            icon: SettingsIcon,
        },
    ];
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
                >
                    {route.name}
                </SideNavItem>
            {/each}
        </SideNav>
    </LeftPanel>
    <Content>
        <slot />
    </Content>
    <RightPanel>
        <Wheather />
        <Divider />
        <Todos />
    </RightPanel>
</AppShell>
