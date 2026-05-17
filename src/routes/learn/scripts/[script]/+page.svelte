<script lang="ts">
import { BookMarked, Download, GraduationCap, Keyboard, Languages } from '@lucide/svelte';
import CalloutBox from '$lib/components/CalloutBox.svelte';
import GridCard from '$lib/components/GridCard.svelte';
import PageContent from '$lib/components/PageContent.svelte';
import LinguisticCard from '$lib/components/LinguisticCard.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import { Badge } from '$lib/components/ui/badge';
import { Button } from '$lib/components/ui/button';

let { data } = $props();
const { script, relatedLanguages, relatedHotkeys } = $derived(data);

let selectedLanguageIndex = $state(0);
const selectedLanguage = $derived(relatedLanguages[selectedLanguageIndex]);
</script>

<PageMeta
	title={script.name}
	description="Resources for the {script.name} script: languages, hotkeys, and learning materials."
/>
<PlainDocumentHeader>{script.name}</PlainDocumentHeader>
<div class="text-center px-4 pb-4">
	<Badge variant="secondary" class="text-sm font-normal">{script.type}</Badge>
</div>

<PageContent>
	<p class="mb-10 text-muted-foreground">{script.description}</p>

	<!-- Learning track -->
	<section class="mb-10">
		<h2 class="mb-4 text-base font-semibold flex items-center gap-2 text-muted-foreground">
			<GraduationCap class="size-4" />
			Learning track
			<Badge variant="secondary" class="text-xs font-normal">Coming soon</Badge>
		</h2>
		<GridCard>
			<p class="text-sm text-muted-foreground">
				A structured learning track for {script.name} is in development. Check back soon.
			</p>
		</GridCard>
	</section>

	<!-- Languages + Hotkeys side by side -->
	{#if relatedLanguages.length > 0 || relatedHotkeys.length > 0}
		<div class="grid gap-6 mb-10" class:sm:grid-cols-2={relatedLanguages.length > 0 && relatedHotkeys.length > 0}>
			{#if relatedLanguages.length > 0}
				<section class="flex flex-col">
					<h2 class="mb-4 text-base font-semibold flex items-center gap-2">
						<Languages class="size-4 text-muted-foreground" />
						Languages
					</h2>
					{#if selectedLanguage}
						{#if relatedLanguages.length > 1}
							<GridCard href="/learn/languages/{selectedLanguage.slug}" class="flex-1">
								<div class="flex items-start justify-between gap-2">
									<div>
										<h2 class="text-lg font-semibold">{selectedLanguage.name}</h2>
										<Badge variant="outline" class="text-xs mt-1">{selectedLanguage.branch}</Badge>
									</div>
									<span class="text-3xl font-serif leading-none text-primary opacity-80 select-none">
										{selectedLanguage.sample}
									</span>
								</div>
								<p class="text-sm text-muted-foreground leading-relaxed">{selectedLanguage.description}</p>
								<div class="flex gap-1.5 flex-wrap mt-1">
									{#each relatedLanguages as lang, i}
										<button
											onclick={(e) => { e.preventDefault(); e.stopPropagation(); selectedLanguageIndex = i; }}
											class="text-xs font-medium px-2.5 py-0.5 rounded-full border transition-colors cursor-pointer
												{selectedLanguageIndex === i
													? 'bg-primary text-primary-foreground border-primary'
													: 'border-border bg-secondary text-secondary-foreground hover:bg-muted hover:text-muted-foreground'}"
										>
											{lang.name}
										</button>
									{/each}
								</div>
							</GridCard>
						{:else}
							<LinguisticCard
								class="flex-1"
								name={selectedLanguage.name}
								badge={selectedLanguage.branch}
								sample={selectedLanguage.sample}
								description={selectedLanguage.description}
								href="/learn/languages/{selectedLanguage.slug}"
							/>
						{/if}
					{/if}
				</section>
			{/if}

			{#if relatedHotkeys.length > 0}
				<section class="flex flex-col">
					<h2 class="mb-4 text-base font-semibold flex items-center gap-2">
						<Keyboard class="size-4 text-muted-foreground" />
						Hotkeys
					</h2>
					<div class="flex flex-col gap-4 flex-1">
						{#each relatedHotkeys as hotkey}
							<CalloutBox
								class="flex-1"
								title="{hotkey.name} keyboard configuration"
								description="Download a keyboard layout optimised for typing {hotkey.name} characters and diacritics."
							>
								{#snippet icon()}<Download class="size-5 text-muted-foreground shrink-0 mt-0.5" />{/snippet}
								<div class="mt-3">
									<Button href="/tools/hotkeys">
										<Download class="size-4" />
										Download configuration
									</Button>
								</div>
							</CalloutBox>
						{/each}
					</div>
				</section>
			{/if}
		</div>
	{/if}

	<!-- Selected literature -->
	<section class="mb-10">
		<h2 class="mb-4 text-base font-semibold flex items-center gap-2 text-muted-foreground">
			<BookMarked class="size-4" />
			Selected literature
			<Badge variant="secondary" class="text-xs font-normal">Coming soon</Badge>
		</h2>
		<GridCard>
			<p class="text-sm text-muted-foreground">
				Curated grammars and reference materials for {script.name} are coming soon.
			</p>
		</GridCard>
	</section>
</PageContent>
