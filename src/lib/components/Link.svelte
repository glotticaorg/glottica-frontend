<script lang="ts">
import type { Snippet } from 'svelte';

const {
	children,
	href,
	newPage = false
}: { children: Snippet; href: string; newPage?: boolean } = $props();
const target = $derived(newPage ? '_blank' : undefined);
</script>

<a class="underline underline-offset-4 text-primary" {href} {target}>
  {@render children?.()}
</a>
