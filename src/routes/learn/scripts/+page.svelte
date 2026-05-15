<script>
	import LegalText from "$lib/components/LegalText.svelte";
	import PageMeta from "$lib/components/PageMeta.svelte";
	import PlainDocumentHeader from "$lib/components/PlainDocumentHeader.svelte";

	const scripts = [
		{
			name: "Brahmi",
			type: "Abugida",
			sample: "𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻",
			language: "Tocharian B",
			description: "An ancient Indian script used to write the Tocharian B manuscripts from the Tarim Basin.",
		},
		{
			name: "Cyrillic",
			type: "Alphabet",
			sample: "Слово",
			language: "Old Church Slavonic",
			description: "Derived from Greek uncial script, used in the earliest Old Church Slavonic liturgical texts.",
		},
		{
			name: "Glagolitic",
			type: "Alphabet",
			sample: "ⰔⰎⰂⰅⰀ",
			language: "Old Church Slavonic",
			description: "The oldest known Slavic alphabet, created by Saint Cyril in the 9th century for Bible translation.",
		},
		{
			name: "Ogham",
			type: "Alphabet",
			sample: "᚛ᚑᚌᚐᚋ᚜",
			language: "Old Irish",
			description: "An early medieval alphabet used to write the early Irish language, carved on standing stones.",
		},
		{
			name: "Greek",
			type: "Alphabet",
			sample: "Ἑλληνικά",
			language: "Ancient Greek",
			description: "The writing system of ancient and modern Greek, ancestor of Latin, Cyrillic, and Coptic scripts.",
		},
		{
			name: "Cuneiform",
			type: "Logosyllabic",
			sample: "𒀭𒂗𒍪",
			language: "Hittite",
			description: "One of the earliest writing systems, pressed into clay tablets and used across the ancient Near East.",
		},
		{
			name: "Gothic",
			type: "Alphabet",
			sample: "𐌲𐌿𐌸𐌹𐍃𐌺",
			language: "Gothic",
			description: "Created by Bishop Wulfila in the 4th century to translate the Bible into the Gothic language.",
		},
	];
</script>

<PageMeta title="Scripts" description="Practice reading historical scripts including Brahmi, Glagolitic, Ogham, and Cuneiform." />
<PlainDocumentHeader>Scripts</PlainDocumentHeader>

<LegalText>
	<p class="mb-6 text-base-content/70">
		Here you can find the scripts for which we have practice sets available.
	</p>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
	{#each scripts as script}
		<div class="card bg-base-200 shadow hover:shadow-md transition-shadow duration-200">
			<div class="card-body gap-2">
				<div class="flex items-start justify-between gap-2">
					<div>
						<h2 class="card-title text-lg">{script.name}</h2>
						<span class="badge badge-outline badge-sm">{script.type}</span>
					</div>
					<span class="text-3xl font-serif leading-none text-primary opacity-80 select-none" title={script.language}>
						{script.sample}
					</span>
				</div>
				<p class="text-sm text-base-content/70 leading-relaxed">{script.description}</p>
			</div>
		</div>
	{/each}
	</div>
</LegalText>
