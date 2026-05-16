<script>
import DocumentHeader from '$lib/components/DocumentHeader.svelte';
import InfoAlert from '$lib/components/InfoAlert.svelte';
import LegalText from '$lib/components/LegalText.svelte';
import Link from '$lib/components/Link.svelte';
import PageMeta from '$lib/components/PageMeta.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';
import SectionHeader from '$lib/components/SectionHeader.svelte';
import { Accessibility } from '@lucide/svelte';
</script>

<PageMeta title="Accessibility" description="Glottica's accessibility aims and measures for an inclusive experience." />
<DocumentHeader
	header="Accessibility"
	description="Our goals and measures"
>
	<Accessibility class="size-64" />
</DocumentHeader>

<LegalText>
	<InfoAlert title="Help us improve">
		If you find any part of the site where you think accessibility could be improved, please let us know! You can reach out to us using the <Link href="/feedback">feedback form</Link>.
	</InfoAlert>
	<SectionHeader>Accessibility aim</SectionHeader>
	<Paragraph>
		We are committed to provide an accessible experience to all learners. In order to do this we try to meet the requirements of the EU <Link href="https://eur-lex.europa.eu/eli/dir/2019/882/oj">EAA</Link> guideline and its implementation in Dutch law.
		We aim to support serving at least 95% of browsers usage-wise with our platform.
	</Paragraph>
	<SectionHeader>Accessibility measures</SectionHeader>
	<Paragraph>
		To ensure an accessible experience we have provided ARIA-tags for screenreaders where other text content and context was lacking.
		To ensure accessibility for visually impaired users we make sure that our color palette conforms to WCAG AAA normal text standards for contrastiveness.
		Colorblindness was also taken into account during the design of our web experience. For this, people with colorblindness were consulted during the design.
	</Paragraph>
</LegalText>
