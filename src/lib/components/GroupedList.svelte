<script lang="ts">
import type { Snippet } from 'svelte';
import List from './List.svelte';

const {
	children,
	title
}: { children: Snippet; title: string } = $props();
</script>

<div class="mt-4 bg-card rounded-xl shadow-sm border border-border px-6 py-4">
  <p class="font-semibold text-sm mb-3">{title}</p>
  <List noMargin>
    {@render children?.()}
  </List>
</div>
