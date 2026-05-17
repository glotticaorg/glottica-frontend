<script lang="ts">
import type { Snippet } from 'svelte';
import GridCard from './GridCard.svelte';

let { left, right }: { left: Snippet; right: Snippet } = $props();
</script>

<GridCard>
	<div class="flex flex-col sm:flex-row sm:gap-6">
		<dl class="flex flex-col gap-3 sm:flex-1">
			{@render left()}
		</dl>
		<div class="hidden sm:block w-px bg-border shrink-0"></div>
		<dl class="flex flex-col gap-3 sm:flex-1 mt-3 sm:mt-0">
			{@render right()}
		</dl>
	</div>
</GridCard>
