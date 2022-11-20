<script>
    import { Switch } from "@specialdoom/proi-ui";
    import SettingItem from "../lib/components/settings/SettingItem.svelte";
    import Settings from "../lib/components/settings/Settings.svelte";
</script>

<Settings>
    <SettingItem>
        <p slot="description">Wheather widget</p>
        <Switch slot="action" />
    </SettingItem>
</Settings>
