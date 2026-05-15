<script lang="ts">
import type { Snippet } from 'svelte';
import Bold from './Bold.svelte';
import WarningIcon from './icons/WarningIcon.svelte';

const { children, title }: { children: Snippet; title: string } = $props();
</script>

<div role="alert" class="alert alert-warning mb-4 shadow">
	<WarningIcon />
  <span>
		<Bold>{title}</Bold>: {@render children?.()}
	</span>
</div>