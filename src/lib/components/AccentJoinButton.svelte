<script lang="ts">
import type { Snippet } from 'svelte';
import { Button } from '$lib/components/ui/button';

const {
  children,
  ariaLabel = undefined
}: { children: Snippet; ariaLabel?: string } = $props();
</script>

<Button variant="secondary" aria-label={ariaLabel}>
  {@render children?.()}
</Button>
