<script lang="ts">
import CardGrid from '$lib/components/CardGrid.svelte';
import GridCard from '$lib/components/GridCard.svelte';
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import Select from '$lib/components/Select.svelte';
import { Badge } from '$lib/components/ui/badge';
import { texts } from '$lib/data/texts';

const languages = [...new Set(texts.map((t) => t.language))].sort();

let selectedLanguage = $state('All');

const filtered = $derived(
	selectedLanguage === 'All'
		? texts
		: texts.filter((t) => t.language === selectedLanguage)
);
</script>

<PageMeta title="Texts" description="Browse linguistic texts and reading materials on Glottica." />
<PlainDocumentHeader>Texts</PlainDocumentHeader>

<LegalText>
	<div class="mb-6 max-w-xs">
		<Select name="language" label="Filter by language" bind:value={selectedLanguage}>
			<option value="All">All languages</option>
			{#each languages as language}
				<option value={language}>{language}</option>
			{/each}
		</Select>
	</div>

	<CardGrid>
		{#each filtered as text (text.slug)}
			<GridCard href="/texts/{text.slug}">
				<div class="flex items-start justify-between gap-2">
					<div>
						<h2 class="text-lg font-semibold">{text.title}</h2>
						<Badge variant="outline" class="text-xs">{text.language}</Badge>
					</div>
					<span class="text-sm tabular-nums text-muted-foreground text-right shrink-0">{text.period}</span>
				</div>
				<p class="text-sm text-muted-foreground leading-relaxed">{text.author} &middot; {text.genre}</p>
			</GridCard>
		{/each}
	</CardGrid>
</LegalText>
