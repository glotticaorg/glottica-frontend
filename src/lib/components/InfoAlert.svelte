<script lang="ts">
import type { Snippet } from 'svelte';
import Bold from './Bold.svelte';
import InfoIcon from './icons/InfoIcon.svelte';
import { Alert, AlertDescription } from '$lib/components/ui/alert';

const { children, title }: { children: Snippet; title: string } = $props();
</script>

<Alert class="mb-4">
  <InfoIcon />
  <AlertDescription>
    <Bold>{title}</Bold>: {@render children?.()}
  </AlertDescription>
</Alert>
