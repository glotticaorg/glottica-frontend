<script lang="ts">
import type { Snippet } from 'svelte';

let { children, class: className = '', href }: { children: Snippet; class?: string; href?: string } =
	$props();
</script>

{#if href}
<a {href} class="bg-card rounded-xl shadow-sm border border-border block transition-colors hover:bg-muted/50 {className}">
  <div class="p-5 flex flex-col gap-2">
    {@render children?.()}
  </div>
</a>
{:else}
<div class="bg-card rounded-xl shadow-sm border border-border {className}">
  <div class="p-5 flex flex-col gap-2">
    {@render children?.()}
  </div>
</div>
{/if}
