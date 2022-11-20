<script>
    import { Switch } from "@specialdoom/proi-ui";
    import SettingItem from "../lib/components/settings/SettingItem.svelte";
    import Settings from "../lib/components/settings/Settings.svelte";
    import SettingsState from "../lib/icons/SettingsState.svelte";
</script>

<Settings>
    <SettingItem>
        <p slot="description">Wheather widget</p>
        <Switch slot="action" />
    </SettingItem>
    <SettingsState slot="trail" />
</Settings>
