<script>
	import LegalText from "$lib/components/LegalText.svelte";
	import Link from "$lib/components/Link.svelte";
	import PageMeta from "$lib/components/PageMeta.svelte";
	import Paragraph from "$lib/components/Paragraph.svelte";
	import PlainDocumentHeader from "$lib/components/PlainDocumentHeader.svelte";
</script>

<PageMeta title="Contact" description="Get in touch with the Glottica team." />
<PlainDocumentHeader>Contact</PlainDocumentHeader>

<LegalText>
	<Paragraph>
		You can reach us for any inquiries at <Link href="mailto:admin@glottica.org">admin@glottica.org</Link>.
	</Paragraph>
</LegalText>
