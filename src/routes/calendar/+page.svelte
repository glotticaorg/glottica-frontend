<script>
import LegalText from '$lib/components/LegalText.svelte';
import List from '$lib/components/List.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import PlainDocumentHeader from '$lib/components/PlainDocumentHeader.svelte';
import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<PageMeta title="Calendar" description="Upcoming seminars and events for Indo-Europeanists." />
<PlainDocumentHeader>Calendar</PlainDocumentHeader>

<LegalText>
	<SectionHeader>2025</SectionHeader>

	<List>
		<li class="flex items-center gap-6 py-4 border-t-4 border-border">
			<div class="text-4xl font-thin opacity-60 tabular-nums shrink-0 w-28 whitespace-nowrap">06 JUN</div>
			<div class="flex-1 min-w-0">
				<div>Waves Across the Atlantic: Reevaluating the Genetic Position of Faroese</div>
				<div class="text-xs uppercase font-semibold opacity-60">Simon den Hertog</div>
			</div>
			<div class="shrink-0 text-sm text-muted-foreground w-24">Seminar</div>
			<div class="shrink-0 text-sm text-muted-foreground w-36">Leiden University</div>
		</li>
		<li class="flex items-center gap-6 py-4 border-t-4 border-border">
			<div class="text-4xl font-thin opacity-60 tabular-nums shrink-0 w-28 whitespace-nowrap">25 APR</div>
			<div class="flex-1 min-w-0">
				<div>Tussen Taal en Dialect</div>
				<div class="text-xs uppercase font-semibold opacity-60">Yoïn van Spijk</div>
			</div>
			<div class="shrink-0 text-sm text-muted-foreground w-24">Seminar</div>
			<div class="shrink-0 text-sm text-muted-foreground w-36">Leiden University</div>
		</li>
	</List>
</LegalText>
