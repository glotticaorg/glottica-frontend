<script>
import CardGrid from '$lib/components/CardGrid.svelte';
import PageContent from '$lib/components/PageContent.svelte';
import LinguisticCard from '$lib/components/LinguisticCard.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import { languages } from '$lib/data/languages';
</script>

<PageMeta title="Languages" description="Browse all languages available on Glottica for vocabulary and exercises." />
<PlainDocumentHeader>Languages</PlainDocumentHeader>

<PageContent>
	<p class="mb-6 text-muted-foreground">
		Here you can find the languages for which we currently offer vocabulary decks and exercises.
	</p>

	<CardGrid>
		{#each languages as lang}
			<LinguisticCard
				name={lang.name}
				badge={lang.branch}
				sample={lang.sample}
				description={lang.description}
				href="/learn/languages/{lang.slug}"
			/>
		{/each}
	</CardGrid>
</PageContent>
