<script>
	import PrivacyIcon from "./icons/PrivacyIcon.svelte";
	import PrivacyIconSlash from "./icons/PrivacyIconSlash.svelte";
</script>

<label class="swap swap-flip">
  <input type="checkbox" name="Decorative element" checked />
  <div class="swap-on">
    <PrivacyIcon />
  </div>
  <div class="swap-off">
    <PrivacyIconSlash />
  </div>
</label>
