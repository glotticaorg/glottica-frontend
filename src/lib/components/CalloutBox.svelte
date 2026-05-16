<script lang="ts">
import type { Snippet } from 'svelte';

let {
	icon,
	title,
	description,
	headerAction,
	children
}: {
	icon: Snippet;
	title: string;
	description?: string;
	headerAction?: Snippet;
	children?: Snippet;
} = $props();
</script>

<div class="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
	{@render icon()}
	<div class="flex flex-col gap-1">
		<div class="flex items-center gap-2">
			<h3 class="text-base font-semibold">{title}</h3>
			{@render headerAction?.()}
		</div>
		{#if description}
			<p class="text-sm text-muted-foreground">{description}</p>
		{/if}
		{@render children?.()}
	</div>
</div>
