<script>
  // export let segment;
  import { _, locale, setupI18n } from "../services/i18n";
  let year = new Date().getFullYear();
</script>

<footer>
  <div class="content-container">
    &#169; {year}
    <!-- {segment} -->
    <!-- {$_("footer.contacts")} -->
  </div>



</footer>

<style>
  footer {
    padding: 0 1em;
    position: fixed;
    bottom: 0px;
    height: 50px;
    border-top: 1px solid rgba(255, 62, 0, 0.1);
    width: 100%;
    z-index: 1000;
    background: white;
    display: flex;
    justify-content:center;
    align-items:center;
  }

 
</style>
