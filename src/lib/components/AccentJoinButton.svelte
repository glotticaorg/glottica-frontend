<script lang="ts">
import type { Snippet } from 'svelte';

const {
	children,
	ariaLabel = undefined
}: { children: Snippet; ariaLabel?: string } = $props();
</script>

<button class="btn btn-accent join-item" aria-label={ariaLabel}>
  {@render children?.()}
</button>
