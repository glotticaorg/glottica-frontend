<script lang="ts">
import { BookMarked, BookOpen, CaseLower, Download, GraduationCap, Keyboard } from '@lucide/svelte';
import CalloutBox from '$lib/components/CalloutBox.svelte';
import GridCard from '$lib/components/GridCard.svelte';
import LegalText from '$lib/components/LegalText.svelte';
import LinguisticCard from '$lib/components/LinguisticCard.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import { Badge } from '$lib/components/ui/badge';
import { Button } from '$lib/components/ui/button';

let { data } = $props();
const { language, relatedTexts, relatedScripts, hotkey } = $derived(data);
</script>

<PageMeta
	title={language.name}
	description="Resources for {language.name}: scripts, hotkeys, texts, and lessons."
/>
<PlainDocumentHeader>
	{language.name}
	<Badge variant="secondary" class="ml-3 align-middle text-sm font-normal">{language.branch}</Badge>
</PlainDocumentHeader>

<LegalText>
	<p class="mb-10 text-muted-foreground">{language.description}</p>

	<!-- Scripts + Hotkeys side by side -->
	{#if relatedScripts.length > 0 || hotkey}
		<div class="grid gap-6 mb-10" class:grid-cols-2={relatedScripts.length > 0 && hotkey}>
			{#if relatedScripts.length > 0}
				<section class="flex flex-col">
					<h2 class="mb-4 text-base font-semibold flex items-center gap-2">
						<CaseLower class="size-4 text-muted-foreground" />
						Script
					</h2>
					{#each relatedScripts as script}
						<LinguisticCard
							class="flex-1"
							name={script.name}
							badge={script.type}
							sample={script.sample}
							description={script.description}
							href="/learn/scripts"
						/>
					{/each}
				</section>
			{/if}

			{#if hotkey}
				<section class="flex flex-col">
					<h2 class="mb-4 text-base font-semibold flex items-center gap-2">
						<Keyboard class="size-4 text-muted-foreground" />
						Hotkeys
					</h2>
					<CalloutBox
						class="flex-1"
						title="{hotkey.name} keyboard configuration"
						description="Download a keyboard layout optimised for typing {language.name} characters and diacritics."
					>
						{#snippet icon()}<Download class="size-5 text-muted-foreground shrink-0 mt-0.5" />{/snippet}
						<div class="mt-3">
							<Button href="/tools/hotkeys">
								<Download class="size-4" />
								Download configuration
							</Button>
						</div>
					</CalloutBox>
				</section>
			{/if}
		</div>
	{/if}

	<!-- Texts -->
	<section class="mb-10">
		<h2 class="mb-4 text-base font-semibold flex items-center gap-2">
			<BookOpen class="size-4 text-muted-foreground" />
			Texts
		</h2>
		{#if relatedTexts.length > 0}
			<div class="flex flex-col divide-y divide-border rounded-xl border border-border bg-card shadow-sm overflow-hidden">
				{#each relatedTexts as text}
					<div class="flex items-center justify-between gap-4 px-5 py-3">
						<div>
							<span class="font-medium">{text.title}</span>
							<span class="ml-2 text-sm text-muted-foreground">{text.author} &middot; {text.genre}</span>
						</div>
						<span class="text-sm tabular-nums text-muted-foreground shrink-0">{text.period}</span>
					</div>
				{/each}
			</div>
			<div class="mt-3">
				<Button variant="outline" href="/texts">Browse all texts</Button>
			</div>
		{:else}
			<p class="text-sm text-muted-foreground">No texts available for this language yet.</p>
		{/if}
	</section>

	<!-- Selected literature -->
	<section class="mb-10">
		<h2 class="mb-4 text-base font-semibold flex items-center gap-2 text-muted-foreground">
			<BookMarked class="size-4" />
			Selected literature
			<Badge variant="secondary" class="text-xs font-normal">Coming soon</Badge>
		</h2>
		<GridCard>
			<p class="text-sm text-muted-foreground">
				Curated reference books and grammars for {language.name} are coming soon.
			</p>
		</GridCard>
	</section>

	<!-- Lessons -->
	<section class="mb-10">
		<h2 class="mb-4 text-base font-semibold flex items-center gap-2 text-muted-foreground">
			<GraduationCap class="size-4" />
			Lessons
			<Badge variant="secondary" class="text-xs font-normal">Coming soon</Badge>
		</h2>
		<GridCard>
			<p class="text-sm text-muted-foreground">
				Structured lessons for {language.name} are in development. Check back soon.
			</p>
		</GridCard>
	</section>
</LegalText>
