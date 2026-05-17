<script>
import CardGrid from '$lib/components/CardGrid.svelte';
import PageContent from '$lib/components/PageContent.svelte';
import LinguisticCard from '$lib/components/LinguisticCard.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import { scripts } from '$lib/data/scripts';
</script>

<PageMeta title="Scripts" description="Practice reading historical scripts including Brahmi, Glagolitic, Ogham, and Cuneiform." />
<PlainDocumentHeader>Scripts</PlainDocumentHeader>

<PageContent>
	<p class="mb-6 text-muted-foreground">
		Here you can find the scripts for which we have practice sets available.
	</p>

	<CardGrid>
		{#each scripts as script}
			<LinguisticCard name={script.name} badge={script.type} sample={script.sample} description={script.description} href="/learn/scripts/{script.slug}" />
		{/each}
	</CardGrid>
</PageContent>
