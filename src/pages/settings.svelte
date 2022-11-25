<script>
    import { Switch } from "@specialdoom/proi-ui";
    import SettingItem from "../lib/components/settings/SettingItem.svelte";
    import Settings from "../lib/components/settings/Settings.svelte";
    import SettingsState from "../lib/states/SettingsState.svelte";
    import { settings } from "../lib/stores/app";

    $: {
        localStorage.setItem("settings", JSON.stringify($settings));
    }
</script>

<Settings>
    <SettingItem>
        <p slot="description">Greetings</p>
        <Switch slot="action" bind:checked={$settings.greetings} />
    </SettingItem>
    <SettingItem>
        <p slot="description">Weather widget</p>
        <Switch slot="action" bind:checked={$settings.weather} />
    </SettingItem>
    <SettingItem>
        <p slot="description">Todos widget</p>
        <Switch slot="action" bind:checked={$settings.todos} />
    </SettingItem>
    <SettingsState slot="trail" />
</Settings>
