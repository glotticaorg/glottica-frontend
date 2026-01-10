<script lang="ts">
	import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props()
</script>

<div
	class="bg-base-100 shadow py-4 lg:py-8 stats stats-vertical lg:stats-horizontal rounded-none"
>
  {@render children?.()}
</div>
