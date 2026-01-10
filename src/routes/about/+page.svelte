<script>
	import Alert from "$lib/components/Alert.svelte";
	import LegalText from "$lib/components/LegalText.svelte";
	import Link from "$lib/components/Link.svelte";
	import Paragraph from "$lib/components/Paragraph.svelte";
	import PlainDocumentHeader from "$lib/components/PlainDocumentHeader.svelte";
	import SectionHeader from "$lib/components/SectionHeader.svelte";
</script>

<PlainDocumentHeader>About us</PlainDocumentHeader>

<LegalText>
	<SectionHeader>Our details</SectionHeader>
	<Paragraph>
		This website is maintained by Glottica.org, a non-profit foundation registered
		and located in the Netherlands.
	</Paragraph>
	<SectionHeader>I want to help!</SectionHeader>
	<Paragraph>
		That's amazing! We're always looking for volunteers to join our effort. If you have relevant technical skills (e.g., web development or operations), please reach out to us here. If you are a designer and want to contribute to a sleeker look the website, please reach out to us here. If you would like to contribute to the learning materials that we host, please reach out to us here. If you have any ideas on how we could make our platform better, please let us know via the <a href="/feedback" class="link">feedback form</a>! If you instead want to contribute via a <a href="/donate" class="link">small donation</a> (despite our best efforts, servers aren't free!), that is also possible.
	</Paragraph>
	<SectionHeader>Technology</SectionHeader>
	<Alert title="Disclaimer">
		We are not and do not claim to be in an endorsement, sponsorship, or any other kind of special relationship with any of the technologies we use to create and maintain this platform or any of their respective owners.
	</Alert>
	<Paragraph>
		This website is powered by <Link href="https://svelte.dev/">Svelte</Link> and makes use of <Link href="https://daisyui.com/">DaisyUI</Link> with <Link href="https://tailwindcss.com/">Tailwind CSS</Link> for styling the webpages. We use the <Link href="https://fonts.google.com/noto">Google Noto font</Link> to ensure maximum glyph coverage. The icons are provided by <Link href="https://heroicons.com/">Heroicons</Link>.
	</Paragraph>
	<Paragraph>
		For our templates we rely on an open-source implementation of the Unified stylesheet for linguistics by XYZ and contributions from our institutional partners. The keybinds we distribute are bundles with <Link href="https://www.autohotkey.com/">AutoHotKey software</Link> for Windows and XYZ for Mac.
	</Paragraph>
</LegalText>
