<script lang="ts">
	import type { Snippet } from "svelte";
	import PageHeader from "./PageHeader.svelte";
	import CenterAlignment from "./CenterAlignment.svelte";

  let { children }: { children: Snippet } = $props()
</script>

<CenterAlignment>
	<div class="pb-4 pt-8">
		<PageHeader>
			{@render children?.()}
		</PageHeader>
	</div>
</CenterAlignment>
