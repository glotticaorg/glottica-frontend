<script lang="ts">
import type { Snippet } from 'svelte';

let { href, left, children }: { href: string; left: Snippet; children: Snippet } = $props();
</script>

<li>
	<a {href} class="flex flex-col sm:flex-row gap-2 sm:gap-8 py-5 hover:bg-muted/40 transition-colors rounded-lg px-3 -mx-3 group">
		<span class="text-sm tabular-nums text-muted-foreground shrink-0 sm:w-36 pt-0.5">
			{@render left()}
		</span>
		<div class="flex flex-col gap-1.5 min-w-0 flex-1">
			{@render children()}
		</div>
	</a>
</li>
