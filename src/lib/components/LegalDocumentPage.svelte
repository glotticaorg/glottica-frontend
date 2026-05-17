<script lang="ts">
import type { Component, Snippet } from 'svelte';
import type { LucideProps } from '@lucide/svelte';
import DocumentHeader from './DocumentHeader.svelte';
import PageContent from './PageContent.svelte';
import PageMeta from './PageMeta.svelte';

let { title, description, icon: Icon, children }: {
	title: string;
	description: string;
	icon: Component<LucideProps>;
	children: Snippet;
} = $props();
</script>

<PageMeta {title} {description} />
<DocumentHeader header={title} {description}>
	<Icon class="size-64" />
</DocumentHeader>
<PageContent>
	{@render children()}
</PageContent>
