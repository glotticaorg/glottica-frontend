<script lang="ts">
import { ScrollText } from '@lucide/svelte';
import LegalDocumentPage from '$lib/components/LegalDocumentPage.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';
import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<LegalDocumentPage
	title="Terms of Service"
	description="Glottica's terms of service."
	icon={ScrollText}
>
	<SectionHeader>Our terms of service</SectionHeader>
	<Paragraph>
		Please do not scrape our database or DDoS our service, that would be really uncool.
		If we detect any such behavior, we reserve the right to inform your network administrator and block traffic to and from your IP address.
	</Paragraph>
</LegalDocumentPage>
