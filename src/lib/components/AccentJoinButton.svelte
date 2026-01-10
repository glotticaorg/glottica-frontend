<script lang="ts">
	import type { Snippet } from "svelte";

  let { children, ariaLabel = undefined }: { children: Snippet, ariaLabel?: string } = $props()
  let buttonAttrs: {"aria-label"?: string} = {};
  if (ariaLabel) {
    buttonAttrs["aria-label"] = ariaLabel;
  }
</script>

<button class="btn btn-accent join-item" {...buttonAttrs}>
  {@render children?.()}
</button>
