<script>
	import DocumentHeader from '$lib/components/DocumentHeader.svelte';
	import TosIcon from '$lib/components/icons/TosIcon.svelte';
	import LegalText from '$lib/components/LegalText.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<DocumentHeader
	header="Terms of service"
	description="What we expect from you"
>
	<TosIcon />
</DocumentHeader>

<LegalText>
	<SectionHeader>Our terms of service</SectionHeader>
	<Paragraph>
		Please do not scrape our database or DDoS our service, that would be really uncool.
		If we detect any such behavior, we reserve the right to inform your network administrator and block traffic to and from your IP address.
	</Paragraph>
</LegalText>
