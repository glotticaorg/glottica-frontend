<script lang="ts">
	import type { Snippet } from "svelte";

  let { children, title, open = false }: { children: Snippet, title: string, open?: boolean } = $props()
</script>

<div class="collapse collapse-arrow bg-base-300 shadow mt-4">
  <input type="checkbox" checked={open} aria-label="Opening drawer with documents" />
  <h2 class="collapse-title font-semibold">{title}</h2>
  <div class="collapse-content text-sm">
    {@render children?.()}
  </div>
</div>
