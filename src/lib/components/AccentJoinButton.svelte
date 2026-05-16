<script lang="ts">
import { Button } from '$lib/components/ui/button';
import type { Snippet } from 'svelte';

const {
	children,
	ariaLabel = undefined
}: { children: Snippet; ariaLabel?: string } = $props();
</script>

<Button variant="secondary" aria-label={ariaLabel}>
  {@render children?.()}
</Button>
