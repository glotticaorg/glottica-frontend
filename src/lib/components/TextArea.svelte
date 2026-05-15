<script lang="ts">
import type { HTMLTextareaAttributes } from 'svelte/elements';

const {
	label,
	name,
	...attrs
}: { label: string; name: string } & HTMLTextareaAttributes = $props();
</script>

<label class="floating-label w-full">
	<span>{label}</span>
	<textarea rows="10" class="textarea w-full" placeholder={label} {name} {...attrs}></textarea>
</label>
