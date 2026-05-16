<script lang="ts">
import { Info } from '@lucide/svelte';
import type { Snippet } from 'svelte';
import { Alert, AlertDescription } from '$lib/components/ui/alert';
import Bold from './Bold.svelte';

const { children, title }: { children: Snippet; title: string } = $props();
</script>

<Alert class="mb-4">
  <Info class="size-6" />
  <AlertDescription>
    <Bold>{title}</Bold>: {@render children?.()}
  </AlertDescription>
</Alert>
