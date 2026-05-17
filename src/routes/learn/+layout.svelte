<script lang="ts">
import { page } from '$app/stores';
import type { Snippet } from 'svelte';
import { Button } from '$lib/components/ui/button';

let { children }: { children: Snippet } = $props();

const tabs = [
	{ label: 'Languages', href: '/learn/languages' },
	{ label: 'Scripts', href: '/learn/scripts' },
];
</script>

<nav class="flex gap-1 px-4 lg:px-0 pt-4 max-w-200 mx-auto w-full">
	{#each tabs as tab}
		<Button
			variant={$page.url.pathname.startsWith(tab.href) ? 'secondary' : 'ghost'}
			size="sm"
			href={tab.href}
		>
			{tab.label}
		</Button>
	{/each}
</nav>

{@render children()}
