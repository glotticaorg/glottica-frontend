<script lang="ts">
import { Button } from '$lib/components/ui/button';
import type { Snippet } from 'svelte';

const { children, ...props }: { children?: Snippet } & Record<string, unknown> =
	$props();
</script>

<Button variant="ghost" {...props}>
  {#if children}
    {@render children()}
  {:else}
    Get a hint
  {/if}
</Button>
