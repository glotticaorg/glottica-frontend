<script lang="ts">
import LegalText from '$lib/components/LegalText.svelte';
import List from '$lib/components/List.svelte';
import ListElement from '$lib/components/ListElement.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import Select from '$lib/components/Select.svelte';

const texts = [
	{
		title: 'Iliad',
		author: 'Homer',
		period: '~750 BCE',
		genre: 'Epic',
		language: 'Attic Greek'
	},
	{
		title: 'Odyssey',
		author: 'Homer',
		period: '~725 BCE',
		genre: 'Epic',
		language: 'Attic Greek'
	},
	{
		title: 'Republic',
		author: 'Plato',
		period: '~375 BCE',
		genre: 'Philosophy',
		language: 'Attic Greek'
	},
	{
		title: 'Oedipus Rex',
		author: 'Sophocles',
		period: '~429 BCE',
		genre: 'Tragedy',
		language: 'Attic Greek'
	},
	{
		title: 'Aeneid',
		author: 'Virgil',
		period: '~19 BCE',
		genre: 'Epic',
		language: 'Latin'
	},
	{
		title: 'De Bello Gallico',
		author: 'Julius Caesar',
		period: '~50 BCE',
		genre: 'History',
		language: 'Latin'
	},
	{
		title: 'De Rerum Natura',
		author: 'Lucretius',
		period: '~55 BCE',
		genre: 'Philosophy',
		language: 'Latin'
	},
	{
		title: 'Rigveda',
		author: 'Various',
		period: '~1500 BCE',
		genre: 'Religious',
		language: 'Sanskrit'
	},
	{
		title: 'Mahabharata',
		author: 'Vyasa',
		period: '~400 BCE',
		genre: 'Epic',
		language: 'Sanskrit'
	},
	{
		title: 'Völuspá',
		author: 'Unknown',
		period: '~1000 CE',
		genre: 'Eddic Poetry',
		language: 'Old Norse'
	},
	{
		title: 'Hávamál',
		author: 'Unknown',
		period: '~1200 CE',
		genre: 'Eddic Poetry',
		language: 'Old Norse'
	},
	{
		title: 'Prose Edda',
		author: 'Snorri Sturluson',
		period: '~1220 CE',
		genre: 'Mythology',
		language: 'Old Norse'
	},
	{
		title: 'Beowulf',
		author: 'Unknown',
		period: '~700 CE',
		genre: 'Epic',
		language: 'Old English'
	},
	{
		title: 'The Wanderer',
		author: 'Unknown',
		period: '~975 CE',
		genre: 'Elegy',
		language: 'Old English'
	},
	{
		title: 'Anglo-Saxon Chronicle',
		author: 'Various',
		period: '~890 CE',
		genre: 'History',
		language: 'Old English'
	},
	{
		title: 'Codex Argenteus',
		author: 'Wulfila',
		period: '~350 CE',
		genre: 'Scripture',
		language: 'Gothic'
	},
	{
		title: 'Telepinu Myth',
		author: 'Unknown',
		period: '~1500 BCE',
		genre: 'Mythology',
		language: 'Hittite'
	},
	{
		title: 'Hittite Laws',
		author: 'Unknown',
		period: '~1650 BCE',
		genre: 'Legal',
		language: 'Hittite'
	},
	{
		title: 'Codex Suprasliensis',
		author: 'Unknown',
		period: '~1000 CE',
		genre: 'Hagiography',
		language: 'Old Church Slavonic'
	},
	{
		title: 'Ostromir Gospels',
		author: 'Deacon Gregory',
		period: '1056 CE',
		genre: 'Scripture',
		language: 'Old Church Slavonic'
	},
	{
		title: 'Gathas',
		author: 'Zarathustra',
		period: '~1000 BCE',
		genre: 'Religious',
		language: 'Avestan'
	},
	{
		title: 'Vendidad',
		author: 'Unknown',
		period: '~500 BCE',
		genre: 'Religious',
		language: 'Avestan'
	},
	{
		title: 'Behistun Inscription',
		author: 'Darius I',
		period: '~520 BCE',
		genre: 'Royal Inscription',
		language: 'Old Persian'
	},
	{
		title: 'Persepolis Fortification Tablets',
		author: 'Various',
		period: '~500 BCE',
		genre: 'Administrative',
		language: 'Old Persian'
	}
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
	<div class="mb-6">
		<Select name="language" label="Language" bind:value={selectedLanguage}>
			<option value="All">All languages</option>
			{#each languages as language}
				<option value={language}>{language}</option>
			{/each}
		</Select>
	</div>

	<List>
		{#each filtered as text (text.title)}
			<ListElement>
				<div class="text-sm font-thin opacity-60 tabular-nums my-auto w-20 shrink-0">{text.period}</div>
				<div class="my-auto flex-1">
					<div>{text.title}</div>
					<div class="text-xs uppercase font-semibold opacity-60">{text.author}</div>
				</div>
				<div class="my-auto">
					<span class="badge badge-outline badge-sm">{text.language}</span>
				</div>
			</ListElement>
		{/each}
	</List>
</LegalText>
