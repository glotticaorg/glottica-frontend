<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<li class="list-row">
  {@render children?.()}
</li>
