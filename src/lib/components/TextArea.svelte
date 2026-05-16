<script lang="ts">
import { Label } from '$lib/components/ui/label';
import { Textarea } from '$lib/components/ui/textarea';
import type { HTMLTextareaAttributes } from 'svelte/elements';

const {
	label,
	name,
	...attrs
}: { label: string; name: string } & HTMLTextareaAttributes = $props();
</script>

<div class="flex flex-col gap-1.5 w-full">
  <Label for={name}>{label}</Label>
  <Textarea rows={10} id={name} {name} placeholder={label} class="w-full" {...attrs} />
</div>
