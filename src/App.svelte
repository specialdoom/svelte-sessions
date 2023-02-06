<script lang="ts">
  import { ToastProvider } from "@specialdoom/proi-ui";
  import AppShell from "./lib/components/app-shell/AppShell.svelte";
  import Content from "./lib/components/app-shell/Content.svelte";
  import RightPanel from "./lib/components/app-shell/RightPanel.svelte";
  import Hello from "./lib/components/hello/Hello.svelte";
  import Timeline from "./lib/components/timeline/Timeline.svelte";
  import Todos from "./lib/components/todos/Todos.svelte";
  import Weather from "./lib/components/weather/Weather.svelte";
</script>

<ToastProvider />
<AppShell>
  <Content>
    <Timeline />
  </Content>
  <RightPanel>
    <Hello />
    <Weather />
    <Todos />
  </RightPanel>
</AppShell>
