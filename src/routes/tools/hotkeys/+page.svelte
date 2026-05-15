<script lang="ts">
	import LegalText from '$lib/components/LegalText.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	const languages = [
		'Lithuanian',
		'Proto-Indo-European',
		'Old Church Slavic',
		'Polish',
		'Serbo-Croatian',
		'Avestan',
		'Sanskrit',
		'Greek',
		'Gothic',
		'Hittite',
		'Latin'
	];
</script>

<PageMeta title="Hotkeys" description="Download keyboard hotkey configurations for Indo-European languages and scripts." />
<PlainDocumentHeader>Hotkeys for Indo-Europeanists</PlainDocumentHeader>

<LegalText>
	<Paragraph>
		We distribute configurations supporting the following languages and orthographies.
		Additionally, a bundle containing all hotkeys is provided. This is set up using
		so-called language "modes", which allow writing many different charactersets
		without any hassle.
	</Paragraph>

	<SectionHeader>Supported languages</SectionHeader>
	<div class="flex flex-wrap gap-2 mb-6">
		{#each languages as lang}
			<span class="badge badge-outline badge-lg">{lang}</span>
		{/each}
	</div>

	<SectionHeader>Downloads</SectionHeader>
	<Paragraph>
		Download a configuration for a single language or the full bundle for all supported modes.
	</Paragraph>
	<div class="flex flex-col sm:flex-row gap-3 mt-2">
		<a href="/tools/hotkeys" class="btn btn-outline">Download by language</a>
		<a href="/tools/hotkeys" class="btn btn-primary">Download full bundle</a>
	</div>
</LegalText>
