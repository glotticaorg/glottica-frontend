<script lang="ts">
import type { Snippet } from 'svelte';
import type { HTMLSelectAttributes } from 'svelte/elements';

const {
	children,
	name,
	label,
	value = $bindable(undefined),
	...attrs
}: { children: Snippet; name: string; label: string } & HTMLSelectAttributes =
	$props();
</script>

<label class="select">
	<span class="label">{label}</span>
	<select {name} {value} {...attrs}>
		{@render children?.()}
	</select>
</label>
