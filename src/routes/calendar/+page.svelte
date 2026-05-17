<script>
import { MapPin } from '@lucide/svelte';
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import SectionHeader from '$lib/components/SectionHeader.svelte';
import { Badge } from '$lib/components/ui/badge';

const events = [
	{
		date: '06 Jun',
		title: 'Waves Across the Atlantic: Reevaluating the Genetic Position of Faroese',
		speaker: 'Simon den Hertog',
		type: 'Seminar',
		location: 'Leiden University'
	},
	{
		date: '25 Apr',
		title: 'Tussen Taal en Dialect',
		speaker: 'Yoïn van Spijk',
		type: 'Seminar',
		location: 'Leiden University'
	}
];
</script>

<PageMeta title="Calendar" description="Upcoming seminars and events for Indo-Europeanists." />
<PlainDocumentHeader>Calendar</PlainDocumentHeader>

<LegalText>
	<p class="mb-6 text-muted-foreground">Upcoming seminars and events for Indo-Europeanists.</p>

	<SectionHeader>2025</SectionHeader>

	<div class="flex flex-col divide-y divide-border rounded-xl border border-border bg-card shadow-sm overflow-hidden">
		{#each events as event}
			<div class="flex items-center gap-5 px-5 py-4">
				<div class="shrink-0 w-12 text-center">
					<p class="text-xl font-semibold tabular-nums leading-none">{event.date.split(' ')[0]}</p>
					<p class="text-xs text-muted-foreground uppercase tracking-wide mt-0.5">{event.date.split(' ')[1]}</p>
				</div>
				<div class="flex-1 min-w-0">
					<p class="font-medium leading-snug">{event.title}</p>
					<p class="text-sm text-muted-foreground mt-0.5">{event.speaker}</p>
				</div>
				<Badge variant="secondary" class="shrink-0">{event.type}</Badge>
				<span class="text-sm text-muted-foreground shrink-0 hidden md:flex items-center gap-1.5">
					<MapPin class="size-3.5" />{event.location}
				</span>
			</div>
		{/each}
	</div>
</LegalText>
