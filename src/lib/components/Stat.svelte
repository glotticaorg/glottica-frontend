<script lang="ts">
import type { Snippet } from 'svelte';
const {
  title,
  children,
  description
}: { title: string; children: Snippet; description: string } = $props();
</script>

<div class="flex flex-1 flex-col items-center gap-1 px-8 py-4">
  <div class="text-sm font-medium text-muted-foreground">{title}</div>
  <div class="text-4xl font-bold">{@render children?.()}</div>
  <div class="text-xs text-muted-foreground">{description}</div>
</div>
