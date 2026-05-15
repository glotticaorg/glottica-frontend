<script lang="ts">
import type { Snippet } from 'svelte';

const {
	children,
	ariaLabel = undefined
}: { children: Snippet; ariaLabel?: string } = $props();
const buttonAttrs: { 'aria-label'?: string } = {};
if (ariaLabel) {
	buttonAttrs['aria-label'] = ariaLabel;
}
</script>

<button class="btn btn-accent join-item" {...buttonAttrs}>
  {@render children?.()}
</button>
