<script lang="ts">
import { Input } from '$lib/components/ui/input';

const { placeholder }: { placeholder: string } = $props();
</script>

<Input type="search" class="w-full" {placeholder} />
