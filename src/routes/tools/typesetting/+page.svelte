<script lang="ts">
import { BookOpen, Code2, FileText, Palette } from '@lucide/svelte';
import CalloutBox from '$lib/components/CalloutBox.svelte';
import CardGrid from '$lib/components/CardGrid.svelte';
import GridCard from '$lib/components/GridCard.svelte';
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import { Badge } from '$lib/components/ui/badge';
import { Button } from '$lib/components/ui/button';
</script>

<PageMeta title="Typesetting Templates" description="Generate academic typesetting templates in TeX and Typst for linguistics." />
<PlainDocumentHeader>Typesetting templates</PlainDocumentHeader>

<LegalText>
	<p class="mb-6 text-muted-foreground">
		Generate document templates for your institution in seconds. Choose a content type,
		typesetting application, and citation style — then optionally add your logo and brand colour.
	</p>

	<CardGrid>
		<GridCard>
			<FileText class="size-5 text-muted-foreground mb-1" />
			<h3 class="text-lg font-semibold">Document types</h3>
			<ul class="text-sm text-muted-foreground space-y-1 mt-1">
				<li>Papers</li>
				<li>Syllabi</li>
				<li>Slideshows</li>
			</ul>
		</GridCard>
		<GridCard>
			<Code2 class="size-5 text-muted-foreground mb-1" />
			<h3 class="text-lg font-semibold">Applications</h3>
			<ul class="text-sm text-muted-foreground space-y-1 mt-1">
				<li>TeX</li>
				<li>Typst</li>
			</ul>
		</GridCard>
		<GridCard>
			<BookOpen class="size-5 text-muted-foreground mb-1" />
			<h3 class="text-lg font-semibold">Citation styles</h3>
			<ul class="text-sm text-muted-foreground space-y-1 mt-1">
				<li>Unified Stylesheet</li>
				<li>APA</li>
				<li>MLA</li>
			</ul>
		</GridCard>
	</CardGrid>

	<div class="mt-8">
		<CalloutBox
			title="Branding"
			description="Upload your institution's logo and provide a brand colour to personalise cover pages and headings. Supports .svg and .png logos."
		>
			{#snippet icon()}<Palette class="size-5 text-muted-foreground shrink-0 mt-0.5" />{/snippet}
			{#snippet headerAction()}<Badge variant="secondary">Optional</Badge>{/snippet}
		</CalloutBox>
	</div>

	<div class="mt-8">
		<Button href="/tools/typesetting/generator" size="lg">Generate your template</Button>
	</div>
</LegalText>
