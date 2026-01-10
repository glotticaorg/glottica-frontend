<script lang="ts">
	import type { Snippet } from "svelte";
	import List from "./List.svelte";
	import Collapse from "./Collapse.svelte";

  let { children, title, open = false }: { children: Snippet, title: string, open?: boolean } = $props()
</script>

<Collapse open={open} title={title}>
  <List noMargin>
    {@render children?.()}
  </List>
</Collapse>
