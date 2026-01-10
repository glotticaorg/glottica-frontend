<script lang="ts">
	import type { Snippet } from "svelte";
	import InfoIcon from "./icons/InfoIcon.svelte";
	import Bold from "./Bold.svelte";

  let { children, title }: { children: Snippet, title: string } = $props()
</script>

<div role="alert" class="alert alert-info mb-4 shadow">
	<InfoIcon />
  <span>
		<Bold>{title}</Bold>: {@render children?.()}
	</span>
</div>