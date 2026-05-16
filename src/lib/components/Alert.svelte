<script lang="ts">
import { Alert, AlertDescription } from '$lib/components/ui/alert';
import type { Snippet } from 'svelte';
import Bold from './Bold.svelte';
import WarningIcon from './icons/WarningIcon.svelte';

const { children, title }: { children: Snippet; title: string } = $props();
</script>

<Alert variant="destructive" class="mb-4">
  <WarningIcon />
  <AlertDescription>
    <Bold>{title}</Bold>: {@render children?.()}
  </AlertDescription>
</Alert>
