<script>
  import { createEventDispatcher } from "svelte";
  export let value = "lt";
  const dispatch = createEventDispatcher();
  function switchLocale(event) {
    event.preventDefault();
    dispatch("locale-changed", event.target.value);
  }
</script>

<div class="choose-locale">
  <div class="select">
    <select {value} on:change={switchLocale}>
      <option value="lt">Lithuanian</option>
      <option value="en">English</option>
      <option value="ru">Russian</option>
    </select>
  </div>
</div>

<style>
  .choose-locale {
    display: flex;
    justify-content: center;
  }
  .select {
    margin: 0 1rem 1rem;
  }
  * :global(.select-width) {
    min-width: 200px;
  }
</style>
