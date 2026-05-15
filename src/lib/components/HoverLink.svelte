<script lang="ts">
import type { Snippet } from 'svelte';

const {
	children,
	href,
	newPage = false
}: { children: Snippet; href: string; newPage?: boolean } = $props();
const linkAttrs: { target?: '_blank' } = {};
if (newPage) {
	linkAttrs.target = '_blank';
}
</script>

<a class="link link-hover" href={href} {...linkAttrs}>
  {@render children?.()}
</a>
