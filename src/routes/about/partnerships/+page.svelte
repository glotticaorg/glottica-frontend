<script>
	import LegalText from "$lib/components/LegalText.svelte";
	import List from "$lib/components/List.svelte";
	import ListElement from "$lib/components/ListElement.svelte";
	import PlainDocumentHeader from "$lib/components/PlainDocumentHeader.svelte";
	import SectionHeader from "$lib/components/SectionHeader.svelte";
</script>

<PlainDocumentHeader>Partnerships</PlainDocumentHeader>

<LegalText>
	<SectionHeader>Universities</SectionHeader>
	<List>
		<ListElement>
			<div>
				University of A
			</div>
		</ListElement>
		<ListElement>
			<div>
				University of B
			</div>
		</ListElement>
		<ListElement>
			<div>
				University of C
			</div>
		</ListElement>
		<ListElement>
			<div>
				University of D
			</div>
		</ListElement>
	</List>
	<SectionHeader>Publishers</SectionHeader>
	<List>
		<ListElement>
			<div>
				A
			</div>
		</ListElement>
		<ListElement>
			<div>
				B
			</div>
		</ListElement>
	</List>
</LegalText>
