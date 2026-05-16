<script lang="ts">
import type { Snippet } from 'svelte';

const { children }: { children: Snippet } = $props();
</script>

<div class="bg-card shadow py-4 lg:py-8 flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-border">
  {@render children?.()}
</div>
