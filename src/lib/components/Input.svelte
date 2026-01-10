<script lang="ts">
	import type { HTMLInputTypeAttribute } from "svelte/elements";

  let { name, label, type }: { name: string, label: string, type: HTMLInputTypeAttribute } = $props()
</script>

<label class="floating-label">
	<span>{label}</span>
	<input type={type} placeholder={label} name={name} class="input" />
</label>
