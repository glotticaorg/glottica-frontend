<script>
	import LegalText from "$lib/components/LegalText.svelte";
	import List from "$lib/components/List.svelte";
	import PlainDocumentHeader from "$lib/components/PlainDocumentHeader.svelte";
	import SectionHeader from "$lib/components/SectionHeader.svelte";
</script>

<PlainDocumentHeader>Calendar</PlainDocumentHeader>

<LegalText>
	<SectionHeader>2025</SectionHeader>

	<List>
		<li class="list-row">
			<div class="text-4xl font-thin opacity-60 tabular-nums my-auto">06 JUN</div>
			<div class="my-auto">
				<div>Waves Across the Atlantic: Reevaluating the Genetic Position of Faroese</div>
				<div class="text-xs uppercase font-semibold opacity-60">Simon den Hertog</div>
			</div>
			<div class="my-auto">Seminar</div>
			<div class="my-auto">Leiden University</div>
		</li>
		<li class="list-row">
			<div class="text-4xl font-thin opacity-60 tabular-nums my-auto">25 APR</div>
			<div class="my-auto">
				<div>Tussen Taal en Dialect</div>
				<div class="text-xs uppercase font-semibold opacity-60">Yoïn van Spijk</div>
			</div>
			<div class="my-auto">Seminar</div>
			<div class="my-auto">Leiden University</div>
		</li>
	</List>
</LegalText>
