<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLSelectAttributes } from 'svelte/elements';

	let { children, name, label, ...attrs }: { children: Snippet; name: string; label: string } & HTMLSelectAttributes = $props();
</script>

<label class="select">
	<span class="label">{label}</span>
	<select {name} {...attrs}>
		{@render children?.()}
	</select>
</label>
