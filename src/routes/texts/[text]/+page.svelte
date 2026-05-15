<script lang="ts">
	import PageMeta from '$lib/components/PageMeta.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<PageMeta title={data.title ?? 'Text'} />
