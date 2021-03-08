<script>
  import Nav from "../components/Nav.svelte";

  export let segment;

  import { setupI18n, locale } from "../services/i18n";

  setupI18n({ withLocale: "lt" });
  locale.set("lt");
</script>

<Nav {segment} />
<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
