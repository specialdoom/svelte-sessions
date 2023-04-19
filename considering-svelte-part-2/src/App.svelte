<script>
  import { Tabs } from "@specialdoom/proi-ui";
  import Todos from "./lib/Todos.svelte";
  import CompletedTodos from "./lib/CompletedTodos.svelte";
</script>

<main>
  <h1>Todos</h1>

  <Tabs>
    <Tabs.Pane index={0} title="Todos"><Todos /></Tabs.Pane>
    <Tabs.Pane index={1} title="Completed"><CompletedTodos /></Tabs.Pane>
  </Tabs>
</main>
