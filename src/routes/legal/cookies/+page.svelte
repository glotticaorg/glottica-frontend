<script lang="ts">
import { Cookie } from '@lucide/svelte';
import Bold from '$lib/components/Bold.svelte';
import LegalDocumentPage from '$lib/components/LegalDocumentPage.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';
import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<LegalDocumentPage
	title="Cookie Policy"
	description="Glottica does not use tracking cookies — only secure session cookies while you are logged in."
	icon={Cookie}
>
	<SectionHeader>Our cookie policy</SectionHeader>
	<Paragraph>
		We are committed to <Bold>never</Bold> use tracking cookies. The only cookies we use are called session cookies, which store a cryptographically secure token to make sure our server can recognize you while you are logged in to our website. This ensures that during a visit you do not need to log in more than once. These cookies are removed from your device by your browser after your session expires, which is usually the moment you close your browser. Please do note that this behavior depends on your browser and it might behave differently.
	</Paragraph>
</LegalDocumentPage>
