<script lang="ts">
	import LegalText from '$lib/components/LegalText.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<PageMeta title="Typesetting Templates" description="Generate academic typesetting templates in TeX and Typst for linguistics." />
<PlainDocumentHeader>Generate typesetting templates</PlainDocumentHeader>

<LegalText>
	<Paragraph>
		Generate ready-to-use document templates tailored to your institution. Choose a content type,
		typesetting application, and citation style, then optionally upload your logo and brand color.
	</Paragraph>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
		<div class="card bg-base-300 shadow">
			<div class="card-body">
				<h3 class="card-title text-lg">Document types</h3>
				<ul class="list list-disc list-inside text-sm space-y-1">
					<li>Papers</li>
					<li>Syllabi</li>
					<li>Slideshows</li>
				</ul>
			</div>
		</div>
		<div class="card bg-base-300 shadow">
			<div class="card-body">
				<h3 class="card-title text-lg">Applications</h3>
				<ul class="list list-disc list-inside text-sm space-y-1">
					<li>TeX</li>
					<li>Typst</li>
				</ul>
			</div>
		</div>
		<div class="card bg-base-300 shadow">
			<div class="card-body">
				<h3 class="card-title text-lg">Citation styles</h3>
				<ul class="list list-disc list-inside text-sm space-y-1">
					<li>Unified Stylesheet</li>
					<li>APA</li>
					<li>MLA</li>
				</ul>
			</div>
		</div>
	</div>

	<SectionHeader>Customisation</SectionHeader>
	<Paragraph>
		Optionally upload your institution's logo and provide a brand color to be used on cover pages
		and headings. Both <code class="font-mono">.svg</code> and
		<code class="font-mono">.png</code> logos are supported.
	</Paragraph>

	<div class="mt-6">
		<a href="/tools/typesetting/generator" class="btn btn-primary">Generate now</a>
	</div>
</LegalText>
