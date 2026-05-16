<script lang="ts">
import type { Snippet } from 'svelte';

let { number, children }: { number: number; children: Snippet } = $props();
</script>

<li class="flex items-center gap-4">
	<span class="flex items-center justify-center size-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
		{number}
	</span>
	<div class="flex-1">
		{@render children()}
	</div>
</li>
