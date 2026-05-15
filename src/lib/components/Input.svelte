<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { name, label, type = 'text', ...attrs }: { name: string; label: string } & HTMLInputAttributes = $props();
</script>

<label class="floating-label">
	<span>{label}</span>
	<input {type} {name} placeholder={label} class="input" {...attrs} />
</label>
