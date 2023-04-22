import './app.css'
import App from './App.svelte'
import "@specialdoom/proi-ui/variables.css";

const context = new Map();
context.set("cs-api", "todo app");

const app = new App({
  target: document.getElementById('app'),
  context,
  props: {
    title: "Todos from Component API"
  }
})

export default app
