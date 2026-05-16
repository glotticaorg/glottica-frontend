<script lang="ts">
import type { Snippet } from 'svelte';
const { children }: { children: Snippet } = $props();
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {@render children?.()}
</div>
