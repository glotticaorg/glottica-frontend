<script lang="ts">
import FilteredList from '$lib/components/FilteredList.svelte';
import FilteredListItem from '$lib/components/FilteredListItem.svelte';
import PageContent from '$lib/components/PageContent.svelte';
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

<PageContent>
	<div class="mb-8 max-w-xs">
		<Select name="format" label="Filter by format" bind:value={selectedFormat}>
			<option value="All">All formats</option>
			{#each formats as format}
				<option value={format}>{format}</option>
			{/each}
		</Select>
	</div>

	<FilteredList>
		{#each filtered as event (event.slug)}
			<FilteredListItem href="/calendar/{event.slug}">
				{#snippet left()}
					<time datetime={event.date}>{formatEventDate(event.date)}</time>
				{/snippet}
				<div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
					<span class="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">{event.title}</span>
					<Badge variant="outline" class="text-xs font-normal">{event.format}</Badge>
				</div>
				<p class="text-sm text-muted-foreground truncate">{event.location}</p>
				<div class="flex flex-wrap gap-1">
					{#each event.tags as tag}
						<Badge variant="secondary" class="text-xs font-normal">{tag}</Badge>
					{/each}
				</div>
			</FilteredListItem>
		{/each}
	</FilteredList>
</PageContent>
