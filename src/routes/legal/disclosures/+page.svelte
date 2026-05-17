<script lang="ts">
import { FolderBookmark } from '@lucide/svelte';
import GroupedList from '$lib/components/GroupedList.svelte';
import LegalDocumentPage from '$lib/components/LegalDocumentPage.svelte';
import Link from '$lib/components/Link.svelte';
import ListDocument from '$lib/components/ListDocument.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';
import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<LegalDocumentPage
	title="Disclosures"
	description="Financial and governance disclosure documents for Glottica Foundation."
	icon={FolderBookmark}
>
	<SectionHeader>Our disclosure statements</SectionHeader>
	<Paragraph>
		We provide our statements both in Dutch and English to ensure full transparancy and clarity.
		In the case of any disagreement, the Dutch document takes precedence over the English version.
		If you notice any such disagreement between the Dutch and English documents or if you see
		anything that is unclear, please <Link href="/about-us/contact">reach out to us</Link>.
	</Paragraph>
	<GroupedList title="2025 (NL)">
		<ListDocument href="#">Contactgegevens 2025</ListDocument>
		<ListDocument href="#">Bestuurders en functies 2025</ListDocument>
		<ListDocument href="#">Statuten 2025</ListDocument>
		<ListDocument href="#">Doelstelling en beleidsplan 2025</ListDocument>
		<ListDocument href="#">Beloningsbeleid 2025</ListDocument>
		<ListDocument href="#">Activiteitenverslag 2025</ListDocument>
		<ListDocument href="#">Financiële verantwoording 2025</ListDocument>
		<ListDocument href="#">Standaardformulier 2025</ListDocument>
	</GroupedList>
	<GroupedList title="2025 (EN)">
		<ListDocument href="#">Contact details 2025</ListDocument>
		<ListDocument href="#">Composition board 2025</ListDocument>
		<ListDocument href="#">Bylaws 2025</ListDocument>
		<ListDocument href="#">Goals and policy 2025</ListDocument>
		<ListDocument href="#">Rewards and remuneration 2025</ListDocument>
		<ListDocument href="#">Activity report 2025</ListDocument>
		<ListDocument href="#">Financial report 2025</ListDocument>
	</GroupedList>
</LegalDocumentPage>
