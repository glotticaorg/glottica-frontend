<script lang="ts">
	import type { Snippet } from "svelte";

  let { children, noMargin = false }: { children: Snippet, noMargin?: boolean } = $props()
</script>

<ul class={noMargin ? "list" : "list mb-4"}>
  {@render children?.()}
</ul>
