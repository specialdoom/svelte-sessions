<script>
  import { Tabs } from "@specialdoom/proi-ui";
  import Todos from "./lib/Todos.svelte";
  import CompletedTodos from "./lib/CompletedTodos.svelte";
  import { getContext } from "svelte";

  export let title = "Todos";

  const ctx = getContext("cs-api");
</script>

<main>
  <h1>{title}</h1>
  <h3>{ctx}</h3>

  <Tabs>
    <Tabs.Pane index={0} title="Todos"><Todos /></Tabs.Pane>
    <Tabs.Pane index={1} title="Completed"><CompletedTodos /></Tabs.Pane>
  </Tabs>
</main>

<style>
  main {
    min-width: 320px;
    min-height: 220px;
  }
</style>
