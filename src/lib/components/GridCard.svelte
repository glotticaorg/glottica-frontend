<script lang="ts">
import type { Snippet } from 'svelte';

let { children, class: className = '' }: { children: Snippet; class?: string } =
	$props();
</script>

<div class="bg-card rounded-xl shadow border border-border {className}">
  <div class="p-5 flex flex-col gap-2">
    {@render children?.()}
  </div>
</div>
