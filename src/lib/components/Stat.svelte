<script lang="ts">
	import type { Snippet } from "svelte";
  let { title, children, description }: { title: string, children: Snippet, description: string } = $props()
</script>

<div class="stat place-items-center">
	<div class="stat-title">{title}</div>
	<div class="stat-value">{@render children?.()}</div>
	<div class="stat-desc">{description}</div>
</div>

<style>
	.stat-desc,
	.stat-title {
		@supports (color: color-mix(in lab, red, red)) {
			color: color-mix(in oklab, var(--color-base-content) 80%, transparent);
		}
	}
</style>
