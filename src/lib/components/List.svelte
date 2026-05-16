<script lang="ts">
import type { Snippet } from 'svelte';

const {
	children,
	noMargin = false
}: { children: Snippet; noMargin?: boolean } = $props();
</script>

<ul class={noMargin ? "flex flex-col" : "flex flex-col mb-4"}>
  {@render children?.()}
</ul>
