<script>
import PrivacyIcon from './icons/PrivacyIcon.svelte';
import PrivacyIconSlash from './icons/PrivacyIconSlash.svelte';

let checked = $state(true);
</script>

<button onclick={() => { checked = !checked; }} aria-label="Toggle privacy icon" class="cursor-pointer">
  {#if checked}
    <PrivacyIcon />
  {:else}
    <PrivacyIconSlash />
  {/if}
</button>
