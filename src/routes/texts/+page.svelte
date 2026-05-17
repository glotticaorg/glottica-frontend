<script lang="ts">
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
	<div class="mb-8 max-w-xs">
		<Select name="language" label="Filter by language" bind:value={selectedLanguage}>
			<option value="All">All languages</option>
			{#each languages as language}
				<option value={language}>{language}</option>
			{/each}
		</Select>
	</div>

	<ol class="flex flex-col divide-y divide-border">
		{#each filtered as text (text.slug)}
			<li>
				<a
					href="/texts/{text.slug}"
					class="flex flex-col sm:flex-row gap-2 sm:gap-8 py-5 hover:bg-muted/40 transition-colors rounded-lg px-3 -mx-3 group"
				>
					<span class="text-sm tabular-nums text-muted-foreground shrink-0 sm:w-36 pt-0.5">
						{text.period}
					</span>
					<div class="flex flex-col gap-1.5 min-w-0 flex-1">
						<div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
							<span class="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
								{text.title}
							</span>
							<Badge variant="outline" class="text-xs font-normal">{text.language}</Badge>
						</div>
						<p class="text-sm text-muted-foreground">
							{text.author} &middot; {text.genre} &middot; {text.region}
						</p>
						<div class="flex flex-wrap gap-1">
							{#each text.tags as tag}
								<Badge variant="secondary" class="text-xs font-normal">{tag}</Badge>
							{/each}
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ol>
</LegalText>
