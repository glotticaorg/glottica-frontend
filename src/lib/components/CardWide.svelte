<script>
import { Card } from '$lib/components/ui/card';
const { children } = $props();
</script>

<Card class="shadow min-w-64 md:min-w-128 bg-muted">
  {@render children?.()}
</Card>
