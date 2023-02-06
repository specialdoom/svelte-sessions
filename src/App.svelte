<script lang="ts">
  import { ToastProvider } from "@specialdoom/proi-ui";
  import { onMount } from "svelte";
  import AppShell from "./lib/components/app-shell/AppShell.svelte";
  import Content from "./lib/components/app-shell/Content.svelte";
  import RightPanel from "./lib/components/app-shell/RightPanel.svelte";
  import Hello from "./lib/components/hello/Hello.svelte";
  import Timeline from "./lib/components/timeline/Timeline.svelte";
  import Todos from "./lib/components/todos/Todos.svelte";
  import Weather from "./lib/components/weather/Weather.svelte";

  onMount(() => {
    if (!localStorage.getItem("name")) {
      let name = prompt("Name:");

      localStorage.setItem("name", name);
    }
  });
</script>

<ToastProvider />
<AppShell>
  <Content>
    <Timeline />
  </Content>
  <RightPanel>
    <Hello name={localStorage.getItem("name") ?? "Unnamed"} />
    <Weather />
    <Todos />
  </RightPanel>
</AppShell>
