<script lang="ts">
import { Badge } from '$lib/components/ui/badge';
import GridCard from './GridCard.svelte';

let {
	name,
	badge,
	sample,
	description
}: {
	name: string;
	badge: string;
	sample?: string;
	description: string;
} = $props();
</script>

<GridCard>
	<div class="flex items-start justify-between gap-2">
		<div>
			<h2 class="text-lg font-semibold">{name}</h2>
			<Badge variant="outline" class="text-xs mt-1">{badge}</Badge>
		</div>
		{#if sample}
			<span class="text-3xl font-serif leading-none text-primary opacity-80 select-none">
				{sample}
			</span>
		{/if}
	</div>
	<p class="text-sm text-muted-foreground leading-relaxed">{description}</p>
</GridCard>
