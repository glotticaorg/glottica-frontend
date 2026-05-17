<script lang="ts">
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import Select from '$lib/components/Select.svelte';
import { Badge } from '$lib/components/ui/badge';
import { events, formatEventDate } from '$lib/data/events';

const formats = [...new Set(events.map((e) => e.format))].sort();

const sorted = events.slice().sort((a, b) => a.date.localeCompare(b.date));

let selectedFormat = $state('All');

const filtered = $derived(
	selectedFormat === 'All'
		? sorted
		: sorted.filter((e) => e.format === selectedFormat)
);
</script>

<PageMeta title="Calendar" description="Upcoming events in ancient languages, classical studies, and historical linguistics." />
<PlainDocumentHeader>Calendar</PlainDocumentHeader>

<LegalText>
	<div class="mb-8 max-w-xs">
		<Select name="format" label="Filter by format" bind:value={selectedFormat}>
			<option value="All">All formats</option>
			{#each formats as format}
				<option value={format}>{format}</option>
			{/each}
		</Select>
	</div>

	<ol class="flex flex-col divide-y divide-border">
		{#each filtered as event (event.slug)}
			<li>
				<a
					href="/calendar/{event.slug}"
					class="flex flex-col sm:flex-row gap-2 sm:gap-8 py-5 hover:bg-muted/40 transition-colors rounded-lg px-3 -mx-3 group"
				>
					<time
						datetime={event.date}
						class="text-sm tabular-nums text-muted-foreground shrink-0 sm:w-36 pt-0.5"
					>
						{formatEventDate(event.date)}
					</time>
					<div class="flex flex-col gap-1.5 min-w-0 flex-1">
						<div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
							<span class="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
								{event.title}
							</span>
							<Badge variant="outline" class="text-xs font-normal">{event.format}</Badge>
						</div>
						<p class="text-sm text-muted-foreground truncate">{event.location}</p>
						<div class="flex flex-wrap gap-1">
							{#each event.tags as tag}
								<Badge variant="secondary" class="text-xs font-normal">{tag}</Badge>
							{/each}
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ol>
</LegalText>
