<script lang="ts">
import type { Snippet } from 'svelte';

const {
	children,
	href,
	newPage = false
}: { children: Snippet; href: string; newPage?: boolean } = $props();
const target = $derived(newPage ? '_blank' : undefined);
</script>

<a class="link link-hover" {href} {target}>
  {@render children?.()}
</a>
