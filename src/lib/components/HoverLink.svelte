<script lang="ts">
import type { Snippet } from 'svelte';

const {
	children,
	href,
	newPage = false
}: { children: Snippet; href: string; newPage?: boolean } = $props();
const target = $derived(newPage ? '_blank' : undefined);
</script>

<a class="underline-offset-4 hover:underline text-foreground w-fit" {href} {target}>
  {@render children?.()}
</a>
