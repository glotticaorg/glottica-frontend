<script lang="ts">
import { Archive, BookMarked, BookOpen, CalendarDays, CaseLower, Earth, Languages, PenLine, UserRound } from '@lucide/svelte';
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
		<GridCard>
			<div class="flex flex-col sm:flex-row gap-6">
				<dl class="flex flex-col gap-3 flex-1">
					<div class="flex flex-col gap-0.5">
						<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
							<UserRound class="size-3" />
							Author
						</dt>
						<dd class="text-sm font-medium">{text.author}</dd>
					</div>
					<div class="flex flex-col gap-0.5">
						<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
							<CalendarDays class="size-3" />
							Period
						</dt>
						<dd class="text-sm font-medium">{text.period}</dd>
					</div>
					<div class="flex flex-col gap-0.5">
						<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
							<BookOpen class="size-3" />
							Genre
						</dt>
						<dd class="text-sm font-medium">{text.genre}</dd>
					</div>
					<div class="flex flex-col gap-0.5">
						<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
							<Archive class="size-3" />
							Preservation
						</dt>
						<dd class="text-sm font-medium">{text.preservation}</dd>
					</div>
				</dl>
				<div class="hidden sm:block w-px bg-border shrink-0"></div>
				<dl class="flex flex-col gap-3 flex-1">
					{#if language}
						<div class="flex flex-col gap-0.5">
							<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
								<Languages class="size-3" />
								Language
							</dt>
							<dd class="text-sm font-medium">
								<a href="/learn/languages/{language.slug}" class="hover:text-primary transition-colors">{language.name}</a>
							</dd>
						</div>
					{/if}
					{#if relatedScripts.length > 0}
						<div class="flex flex-col gap-0.5">
							<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
								<CaseLower class="size-3" />
								{relatedScripts.length === 1 ? 'Script' : 'Scripts'}
							</dt>
							<dd class="flex flex-col gap-0.5">
								{#each relatedScripts as script}
									<a href="/learn/scripts/{script.slug}" class="text-sm font-medium hover:text-primary transition-colors">{script.name}</a>
								{/each}
							</dd>
						</div>
					{/if}
					<div class="flex flex-col gap-0.5">
						<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
							<Earth class="size-3" />
							Region
						</dt>
						<dd class="text-sm font-medium">{text.region}</dd>
					</div>
					{#if text.annotator}
						<div class="flex flex-col gap-0.5">
							<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
								<PenLine class="size-3" />
								Annotated by
							</dt>
							<dd class="text-sm font-medium">{text.annotator}</dd>
						</div>
					{/if}
				</dl>
			</div>
		</GridCard>
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
