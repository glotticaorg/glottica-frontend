<script lang="ts">
import { CalendarDays, Clock, MapPin, Tag, Users } from '@lucide/svelte';
import GridCard from '$lib/components/GridCard.svelte';
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
		<GridCard>
			<div class="flex flex-col sm:flex-row gap-6">
				<dl class="flex flex-col gap-3 flex-1">
					<div class="flex flex-col gap-0.5">
						<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
							<CalendarDays class="size-3" />
							Date
						</dt>
						<dd class="text-sm font-medium">
							<time datetime={event.date}>{formatEventDate(event.date)}</time>
						</dd>
					</div>
					<div class="flex flex-col gap-0.5">
						<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
							<Clock class="size-3" />
							Time
						</dt>
						<dd class="text-sm font-medium">{event.time}</dd>
					</div>
				</dl>
				<div class="hidden sm:block w-px bg-border shrink-0"></div>
				<dl class="flex flex-col gap-3 flex-1">
					<div class="flex flex-col gap-0.5">
						<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
							<MapPin class="size-3" />
							Location
						</dt>
						<dd class="text-sm font-medium">{event.location}</dd>
					</div>
					{#if event.organizer}
						<div class="flex flex-col gap-0.5">
							<dt class="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
								<Users class="size-3" />
								Organiser
							</dt>
							<dd class="text-sm font-medium">{event.organizer}</dd>
						</div>
					{/if}
				</dl>
			</div>
		</GridCard>
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
