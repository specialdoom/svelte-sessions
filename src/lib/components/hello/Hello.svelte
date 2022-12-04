<script>
  import { auth } from "../../stores/auth";
</script>

<div>
  Hello, {$auth.name}!
</div>

<style>
  div {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    height: 5%;
    width: 100%;
    justify-content: center;
  }
</style>
