<script>
	import LegalText from '$lib/components/LegalText.svelte';
	import DocumentHeader from '$lib/components/DocumentHeader.svelte';
	import Link from '$lib/components/Link.svelte';
	import SecurityIcon from '$lib/components/icons/SecurityIcon.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<DocumentHeader
	header="Responsible disclosure"
	description="Our procedure"
>
	<SecurityIcon />
</DocumentHeader>

<LegalText>
	<SectionHeader>Reporting</SectionHeader>
	<Paragraph>
		You can report cybersecurity concerns to us using our <Link href="/feedback/">feedback form</Link>.
		Please do not forget to submit your email address when reporting any such issues.
		We will assess reported concerns, be in contact with the reporter, and resolve them within
		three weeks of receival if we believe they consitute a risk to the security of our platform.
	</Paragraph>
</LegalText>
