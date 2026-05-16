<script lang="ts">
import type { Snippet } from 'svelte';
const { children }: { children: Snippet } = $props();
</script>

<div class="bg-card rounded-xl shadow hover:shadow-md transition-shadow border border-border">
  <div class="p-5 flex flex-col gap-2">
    {@render children?.()}
  </div>
</div>
