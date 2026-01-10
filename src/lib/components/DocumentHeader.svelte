<script lang="ts">
	import type { Snippet } from "svelte";
	import ResponsiveFlexHero from "./ResponsiveFlexHero.svelte";
	import PageDescription from "./PageDescription.svelte";
	import PageHeader from "./PageHeader.svelte";
	import ResponsiveAlignment from "./ResponsiveAlignment.svelte";

  let { children, description, header }: { children: Snippet, description: string, header: string } = $props()
</script>

<ResponsiveFlexHero>
	{@render children?.()}
	<ResponsiveAlignment>
		<div class="lg:pt-6">
			<PageHeader>
				{header}
			</PageHeader>
		</div>
		<PageDescription>
			{description}
		</PageDescription>
	</ResponsiveAlignment>
</ResponsiveFlexHero>
