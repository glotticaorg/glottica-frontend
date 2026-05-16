<script lang="ts">
import type { Snippet } from 'svelte';
import CenterAlignment from './CenterAlignment.svelte';
import PageHeader from './PageHeader.svelte';

const { children }: { children: Snippet } = $props();
</script>

<CenterAlignment>
	<div class="pb-4 pt-8">
		<PageHeader>
			{@render children?.()}
		</PageHeader>
	</div>
</CenterAlignment>
