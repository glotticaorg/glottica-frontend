<script lang="ts">
import { CalendarDays, Clock, MapPin, Tag, Users } from '@lucide/svelte';
import DetailItem from '$lib/components/DetailItem.svelte';
import DetailsCard from '$lib/components/DetailsCard.svelte';
import LegalText from '$lib/components/LegalText.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import { Badge } from '$lib/components/ui/badge';
import { formatEventDate } from '$lib/data/events';

let { data } = $props();
const { event } = $derived(data);
</script>

<PageMeta
	title={event.title}
	description="{event.title} — {event.format} on {formatEventDate(event.date)} at {event.location}."
/>
<PlainDocumentHeader>{event.title}</PlainDocumentHeader>
<div class="text-center px-4 pb-4">
	<Badge variant="secondary" class="text-sm font-normal">{event.format}</Badge>
</div>

<LegalText>
	<!-- Details card -->
	<section class="mb-10">
		<DetailsCard>
			{#snippet left()}
				<DetailItem icon={CalendarDays} label="Date">
					<time datetime={event.date}>{formatEventDate(event.date)}</time>
				</DetailItem>
				<DetailItem icon={Clock} label="Time">{event.time}</DetailItem>
			{/snippet}
			{#snippet right()}
				<DetailItem icon={MapPin} label="Location">{event.location}</DetailItem>
				{#if event.organizer}
					<DetailItem icon={Users} label="Organiser">{event.organizer}</DetailItem>
				{/if}
			{/snippet}
		</DetailsCard>
	</section>

	<!-- Abstract -->
	<section class="mb-10">
		<h2 class="mb-4 text-base font-semibold text-muted-foreground">About this event</h2>
		<p class="text-sm leading-relaxed">{event.abstract}</p>
	</section>

	<!-- Tags -->
	<section class="mb-10">
		<h2 class="mb-3 flex items-center gap-2 text-base font-semibold text-muted-foreground">
			<Tag class="size-4" />
			Topics
		</h2>
		<div class="flex flex-wrap gap-2">
			{#each event.tags as tag}
				<Badge variant="outline" class="text-sm font-normal">{tag}</Badge>
			{/each}
		</div>
	</section>
</LegalText>
