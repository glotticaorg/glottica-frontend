<script lang="ts">
import type { Snippet } from 'svelte';
import Collapse from './Collapse.svelte';
import List from './List.svelte';

const {
	children,
	title,
	open = false
}: { children: Snippet; title: string; open?: boolean } = $props();
</script>

<Collapse open={open} title={title}>
  <List noMargin>
    {@render children?.()}
  </List>
</Collapse>
