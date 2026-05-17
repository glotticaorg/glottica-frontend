<script lang="ts">
import { Archive, BookMarked, BookOpen, CalendarDays, CaseLower, Earth, Languages, PenLine, UserRound } from '@lucide/svelte';
import DetailItem from '$lib/components/DetailItem.svelte';
import DetailsCard from '$lib/components/DetailsCard.svelte';
import GridCard from '$lib/components/GridCard.svelte';
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import { Badge } from '$lib/components/ui/badge';

let { data } = $props();
const { text, language, relatedScripts } = $derived(data);
</script>

<PageMeta
	title={text.title}
	description="{text.title} by {text.author} — {text.genre} in {text.language}, {text.period}."
/>
<PlainDocumentHeader>{text.title}</PlainDocumentHeader>
<div class="text-center px-4 pb-4">
	<Badge variant="secondary" class="text-sm font-normal">{text.genre}</Badge>
</div>

<LegalText>
	<!-- Details card -->
	<section class="mb-10">
		<DetailsCard>
			{#snippet left()}
				<DetailItem icon={UserRound} label="Author">{text.author}</DetailItem>
				<DetailItem icon={CalendarDays} label="Period">{text.period}</DetailItem>
				<DetailItem icon={BookOpen} label="Genre">{text.genre}</DetailItem>
				<DetailItem icon={Archive} label="Preservation">{text.preservation}</DetailItem>
			{/snippet}
			{#snippet right()}
				{#if language}
					<DetailItem icon={Languages} label="Language">
						<a href="/learn/languages/{language.slug}" class="hover:text-primary transition-colors">{language.name}</a>
					</DetailItem>
				{/if}
				{#if relatedScripts.length > 0}
					<DetailItem icon={CaseLower} label={relatedScripts.length === 1 ? 'Script' : 'Scripts'}>
						<span class="flex flex-col gap-0.5">
							{#each relatedScripts as script}
								<a href="/learn/scripts/{script.slug}" class="hover:text-primary transition-colors">{script.name}</a>
							{/each}
						</span>
					</DetailItem>
				{/if}
				<DetailItem icon={Earth} label="Region">{text.region}</DetailItem>
				{#if text.annotator}
					<DetailItem icon={PenLine} label="Annotated by">{text.annotator}</DetailItem>
				{/if}
			{/snippet}
		</DetailsCard>
	</section>

	<!-- Reading -->
	<section class="mb-10">
		<h2 class="mb-4 text-base font-semibold flex items-center gap-2 text-muted-foreground">
			<BookMarked class="size-4" />
			Read the text
			<Badge variant="secondary" class="text-xs font-normal">Coming soon</Badge>
		</h2>
		<GridCard>
			<p class="text-sm text-muted-foreground">
				An annotated reading of {text.title} is in development. Check back soon.
			</p>
		</GridCard>
	</section>
</LegalText>
