<script lang="ts">
import type { Snippet } from 'svelte';
import type { HTMLSelectAttributes } from 'svelte/elements';
import { Label } from '$lib/components/ui/label';

let {
	children,
	name,
	label,
	value = $bindable(undefined),
	...attrs
}: {
	children: Snippet;
	name: string;
	label: string;
} & HTMLSelectAttributes = $props();
</script>

<div class="flex flex-col gap-1.5">
  <Label for={name}>{label}</Label>
  <select
    {name}
    id={name}
    {value}
    onchange={(e) => { value = (e.currentTarget as HTMLSelectElement).value; }}
    class="flex h-9 w-full rounded-md border border-input bg-card px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
    {...attrs}
  >
    {@render children?.()}
  </select>
</div>
