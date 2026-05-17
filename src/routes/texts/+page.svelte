<script lang="ts">
import FilteredList from '$lib/components/FilteredList.svelte';
import FilteredListItem from '$lib/components/FilteredListItem.svelte';
import PageContent from '$lib/components/PageContent.svelte';
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

<PageContent>
	<div class="mb-8 max-w-xs">
		<Select name="language" label="Filter by language" bind:value={selectedLanguage}>
			<option value="All">All languages</option>
			{#each languages as language}
				<option value={language}>{language}</option>
			{/each}
		</Select>
	</div>

	<FilteredList>
		{#each filtered as text (text.slug)}
			<FilteredListItem href="/texts/{text.slug}">
				{#snippet left()}{text.period}{/snippet}
				<div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
					<span class="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">{text.title}</span>
					<Badge variant="outline" class="text-xs font-normal">{text.language}</Badge>
				</div>
				<p class="text-sm text-muted-foreground">{text.author} &middot; {text.genre} &middot; {text.region}</p>
				<div class="flex flex-wrap gap-1">
					{#each text.tags as tag}
						<Badge variant="secondary" class="text-xs font-normal">{tag}</Badge>
					{/each}
				</div>
			</FilteredListItem>
		{/each}
	</FilteredList>
</PageContent>
