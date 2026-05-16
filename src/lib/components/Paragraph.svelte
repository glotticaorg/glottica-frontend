<script lang="ts">
import type { Snippet } from 'svelte';

const { children }: { children: Snippet } = $props();
</script>

<p class="text mb-2">
  {@render children?.()}
</p>
