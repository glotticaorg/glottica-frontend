<script lang="ts">
import type { Component, Snippet } from 'svelte';
import type { LucideProps } from '@lucide/svelte';

let {
	icon: Icon,
	label,
	children,
}: {
	icon: Component<LucideProps>;
	label: string;
	children: Snippet;
} = $props();
</script>

<div class="flex flex-col gap-0.5">
	<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
		<Icon class="size-3" />
		{label}
	</dt>
	<dd class="text-sm font-medium">
		{@render children()}
	</dd>
</div>
