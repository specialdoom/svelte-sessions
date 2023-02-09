<script lang="ts">
  import CloudsIcon from "../../icons/CloudsIcon.svelte";
  import { WEATHER_API_ENDPOINT } from "./utils";

  const promise = fetch(WEATHER_API_ENDPOINT, {
    method: "GET",
  }).then((data) => data.json());
</script>

<div>
  {#await promise}
    Getting weather data
  {:then data}
    <CloudsIcon />
    {Math.floor(data.current_weather.temperature)}°C
    <span>Iasi</span>
  {/await}
</div>

<style>
  div {
    height: 10%;
    display: inline-flex;
    align-items: center;
    height: 40px;
    background: rgb(71, 154, 137);
    background: linear-gradient(
      90deg,
      rgba(71, 154, 137, 1) 0%,
      rgba(115, 191, 176, 0.8524452017134979) 100%
    );
    color: #ffffff;
    border-radius: 8px;
    gap: 8px;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }

  span {
    font-size: 12px;
    color: var(--n0);
  }
</style>
