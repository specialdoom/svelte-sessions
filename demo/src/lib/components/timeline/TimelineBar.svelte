<script>
  import { TextInput } from "@specialdoom/proi-ui";

  const today = Date.now();
</script>

<div>
  <div>{today.toFixed()}</div>
  <TextInput placeholder="search" />
</div>

<style>
  div {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 8px;
    box-sizing: border-box;
  }
</style>
