<script>
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';

const languages = [
	{
		name: 'Attic Greek',
		branch: 'Hellenic',
		sample: 'λόγος',
		romanized: 'lógos',
		description:
			'The classical language of Athens, Homer, and the New Testament. Foundation of Western philosophy and science.'
	},
	{
		name: 'Latin',
		branch: 'Italic',
		sample: 'lingua',
		romanized: 'lingua',
		description:
			'The prestige language of Rome, ancestor of the Romance languages and the Catholic liturgical tradition.'
	},
	{
		name: 'Sanskrit',
		branch: 'Indo-Aryan',
		sample: 'भाषा',
		romanized: 'bhāṣā',
		description:
			'The sacred language of the Vedas and classical Indian literature, preserving archaic Indo-European features.'
	},
	{
		name: 'Old Norse',
		branch: 'Germanic',
		sample: 'rúnar',
		romanized: 'rúnar',
		description:
			'Language of the Vikings and the Eddas, ancestor of the modern Scandinavian languages.'
	},
	{
		name: 'Old English',
		branch: 'Germanic',
		sample: 'worold',
		romanized: 'worold',
		description:
			'The language of Beowulf and Alfred the Great, spoken in England from the 5th to 11th centuries.'
	},
	{
		name: 'Gothic',
		branch: 'Germanic',
		sample: '𐌲𐌿𐌸',
		romanized: 'guþ',
		description:
			"The earliest attested Germanic language, preserved in Wulfila's 4th-century Bible translation."
	},
	{
		name: 'Hittite',
		branch: 'Anatolian',
		sample: '𒅴𒂷',
		romanized: 'gišTUKUL',
		description:
			'The oldest recorded Indo-European language, written in cuneiform in the ancient Near East.'
	},
	{
		name: 'Old Church Slavonic',
		branch: 'Slavic',
		sample: 'слово',
		romanized: 'slovo',
		description:
			'The first literary Slavic language, created by Saints Cyril and Methodius in the 9th century.'
	},
	{
		name: 'Avestan',
		branch: 'Iranian',
		sample: '𐬀𐬵𐬎𐬥𐬀',
		romanized: 'ahuna',
		description:
			'The liturgical language of Zoroastrianism, closely related to Vedic Sanskrit.'
	},
	{
		name: 'Old Persian',
		branch: 'Iranian',
		sample: '𐎧𐏁𐎠𐎹𐎰𐎡𐎹',
		romanized: 'xšāyaθiya',
		description:
			'The language of Darius and Xerxes, inscribed in cuneiform at Persepolis and Behistun.'
	},
	{
		name: 'Tocharian B',
		branch: 'Tocharian',
		sample: 'śaumo',
		romanized: 'śaumo',
		description:
			'An extinct branch of Indo-European discovered in manuscripts from the Tarim Basin of Central Asia.'
	},
	{
		name: 'Proto-Indo-European',
		branch: 'Reconstructed',
		sample: '*wódr̥',
		romanized: '*wódr̥',
		description:
			'The reconstructed ancestral language from which all Indo-European languages descend.'
	}
];
</script>

<PageMeta title="Languages" description="Browse all languages available on Glottica for vocabulary and exercises." />
<PlainDocumentHeader>Languages</PlainDocumentHeader>

<LegalText>
	<p class="mb-6 text-base-content/70">
		Here you can find the languages for which we currently offer vocabulary decks and exercises.
	</p>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
	{#each languages as lang}
		<div class="card bg-base-200 shadow hover:shadow-md transition-shadow duration-200">
			<div class="card-body gap-2">
				<div class="flex items-start justify-between gap-2">
					<div>
						<h2 class="card-title text-lg">{lang.name}</h2>
						<span class="badge badge-outline badge-sm">{lang.branch}</span>
					</div>
					<span class="text-3xl font-serif leading-none text-primary opacity-80 select-none" title={lang.romanized}>
						{lang.sample}
					</span>
				</div>
				<p class="text-sm text-base-content/70 leading-relaxed">{lang.description}</p>
			</div>
		</div>
	{/each}
	</div>
</LegalText>
