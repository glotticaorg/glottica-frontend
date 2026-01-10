<script lang="ts">
	import type { Snippet } from "svelte";

  let { children, name, label }: { children: Snippet, name: string, label: string } = $props()
</script>

<label class="select">
	<span class="label">{label}</span>
	<select name={name}>
		{@render children?.()}
	</select>
</label>
