<script>
	import DisclosuresIcon from '$lib/components/icons/DisclosuresIcon.svelte';
	import LegalText from '$lib/components/LegalText.svelte';
	import DocumentHeader from '$lib/components/DocumentHeader.svelte';
	import CollapseList from '$lib/components/CollapseList.svelte';
	import ListDocument from '$lib/components/ListDocument.svelte';
	import Link from '$lib/components/Link.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
</script>

<DocumentHeader
	header="Disclosures"
	description="As a non-profit foundation we must disclose certain documents on the financials and management of our organisation, these can all be found here."
>
	<DisclosuresIcon />
</DocumentHeader>

<LegalText>
	<SectionHeader>
		Our disclosure statements
	</SectionHeader>
	<Paragraph>
		We provide our statements both in Dutch and English to ensure full transparancy and clarity.
		In the case of any disagreement, the Dutch document takes precedence over the English version.
		If you notice any such disagreement between the Dutch and English documents or if you see
		anything that is unclear, please <Link href="/about/contact">reach out to us</Link>.
	</Paragraph>
	<CollapseList title="2025 (NL)" open>
		<ListDocument href="#">Contactgegevens 2025</ListDocument>
		<ListDocument href="#">Bestuurders en functies 2025</ListDocument>
		<ListDocument href="#">Statuten 2025</ListDocument>
		<ListDocument href="#">Doelstelling en beleidsplan 2025</ListDocument>
		<ListDocument href="#">Beloningsbeleid 2025</ListDocument>
		<ListDocument href="#">Activiteitenverslag 2025</ListDocument>
		<ListDocument href="#">Financiële verantwoording 2025</ListDocument>
		<ListDocument href="#">Standaardformulier 2025</ListDocument>
	</CollapseList>
	<CollapseList title="2025 (EN)">
		<ListDocument href="#">Contact details 2025</ListDocument>
		<ListDocument href="#">Composition board 2025</ListDocument>
		<ListDocument href="#">Bylaws 2025</ListDocument>
		<ListDocument href="#">Goals and policy 2025</ListDocument>
		<ListDocument href="#">Rewards and remuneration 2025</ListDocument>
		<ListDocument href="#">Activity report 2025</ListDocument>
		<ListDocument href="#">Financial report 2025</ListDocument>
	</CollapseList>
</LegalText>
