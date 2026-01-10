<script>
	import Bold from '$lib/components/Bold.svelte';
import DocumentHeader from '$lib/components/DocumentHeader.svelte';
	import CookiesIcon from '$lib/components/icons/CookiesIcon.svelte';
	import LegalText from '$lib/components/LegalText.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<DocumentHeader
	header="Cookie policy"
	description="No cookies were harmed in creating this website, we do not use cookies to track you"
>
	<CookiesIcon />
</DocumentHeader>

<LegalText>
	<SectionHeader>Our cookie policy</SectionHeader>
	<Paragraph>
		We are committed to <Bold>never</Bold> use tracking cookies. The only cookies we use are called session cookies, which store a cryptographically secure token to make sure our server can recognize you while you are logged in to our website. This ensures that during a visit you do not need to log in more than once. These cookies are removed from your device by your browser after your session expires, which is usually the moment you close your browser. Please do note that this behavior depends on your browser and it might behave differently.
	</Paragraph>
</LegalText>
