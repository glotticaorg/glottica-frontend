<script lang="ts">
import CardGrid from '$lib/components/CardGrid.svelte';
import GridCard from '$lib/components/GridCard.svelte';
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import Select from '$lib/components/Select.svelte';
import { Badge } from '$lib/components/ui/badge';

const texts = [
	{ title: 'Iliad', author: 'Homer', period: '~750 BCE', genre: 'Epic', language: 'Attic Greek' },
	{ title: 'Odyssey', author: 'Homer', period: '~725 BCE', genre: 'Epic', language: 'Attic Greek' },
	{ title: 'Republic', author: 'Plato', period: '~375 BCE', genre: 'Philosophy', language: 'Attic Greek' },
	{ title: 'Oedipus Rex', author: 'Sophocles', period: '~429 BCE', genre: 'Tragedy', language: 'Attic Greek' },
	{ title: 'Aeneid', author: 'Virgil', period: '~19 BCE', genre: 'Epic', language: 'Latin' },
	{ title: 'De Bello Gallico', author: 'Julius Caesar', period: '~50 BCE', genre: 'History', language: 'Latin' },
	{ title: 'De Rerum Natura', author: 'Lucretius', period: '~55 BCE', genre: 'Philosophy', language: 'Latin' },
	{ title: 'Rigveda', author: 'Various', period: '~1500 BCE', genre: 'Religious', language: 'Sanskrit' },
	{ title: 'Mahabharata', author: 'Vyasa', period: '~400 BCE', genre: 'Epic', language: 'Sanskrit' },
	{ title: 'Völuspá', author: 'Unknown', period: '~1000 CE', genre: 'Eddic Poetry', language: 'Old Norse' },
	{ title: 'Hávamál', author: 'Unknown', period: '~1200 CE', genre: 'Eddic Poetry', language: 'Old Norse' },
	{ title: 'Prose Edda', author: 'Snorri Sturluson', period: '~1220 CE', genre: 'Mythology', language: 'Old Norse' },
	{ title: 'Beowulf', author: 'Unknown', period: '~700 CE', genre: 'Epic', language: 'Old English' },
	{ title: 'The Wanderer', author: 'Unknown', period: '~975 CE', genre: 'Elegy', language: 'Old English' },
	{ title: 'Anglo-Saxon Chronicle', author: 'Various', period: '~890 CE', genre: 'History', language: 'Old English' },
	{ title: 'Codex Argenteus', author: 'Wulfila', period: '~350 CE', genre: 'Scripture', language: 'Gothic' },
	{ title: 'Telepinu Myth', author: 'Unknown', period: '~1500 BCE', genre: 'Mythology', language: 'Hittite' },
	{ title: 'Hittite Laws', author: 'Unknown', period: '~1650 BCE', genre: 'Legal', language: 'Hittite' },
	{ title: 'Codex Suprasliensis', author: 'Unknown', period: '~1000 CE', genre: 'Hagiography', language: 'Old Church Slavonic' },
	{ title: 'Ostromir Gospels', author: 'Deacon Gregory', period: '1056 CE', genre: 'Scripture', language: 'Old Church Slavonic' },
	{ title: 'Gathas', author: 'Zarathustra', period: '~1000 BCE', genre: 'Religious', language: 'Avestan' },
	{ title: 'Vendidad', author: 'Unknown', period: '~500 BCE', genre: 'Religious', language: 'Avestan' },
	{ title: 'Behistun Inscription', author: 'Darius I', period: '~520 BCE', genre: 'Royal Inscription', language: 'Old Persian' },
	{ title: 'Persepolis Fortification Tablets', author: 'Various', period: '~500 BCE', genre: 'Administrative', language: 'Old Persian' },
];

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
		{#each filtered as text (text.title)}
			<GridCard>
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
