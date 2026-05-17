<script lang="ts">
import { ShieldCheck } from '@lucide/svelte';
import LegalDocumentPage from '$lib/components/LegalDocumentPage.svelte';
import Link from '$lib/components/Link.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';
import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<LegalDocumentPage
	title="Responsible Disclosure"
	description="Glottica's procedure for reporting cybersecurity concerns."
	icon={ShieldCheck}
>
	<SectionHeader>Reporting</SectionHeader>
	<Paragraph>
		You can report cybersecurity concerns to us using our <Link href="/feedback/">feedback form</Link>.
		Please do not forget to submit your email address when reporting any such issues.
		We will assess reported concerns, be in contact with the reporter, and resolve them within
		three weeks of receival if we believe they consitute a risk to the security of our platform.
	</Paragraph>
</LegalDocumentPage>
