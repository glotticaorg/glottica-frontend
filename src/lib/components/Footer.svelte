<script lang="ts">
	import FooterTitle from './FooterTitle.svelte';
	import HoverLink from './HoverLink.svelte';
	import Logo from './Logo.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer
	class="footer shadow md:footer-horizontal bg-base-100 text-base-content p-10 flex-none"
>
	<aside>
		<a href="/" aria-label="Home">
			<Logo />
		</a>
		<p>&copy; 2025&ndash;{currentYear}</p>
	</aside>
	<nav>
		<FooterTitle>About us</FooterTitle>
		<HoverLink href="/about/">About us</HoverLink>
		<HoverLink href="/about/contact/">Contact</HoverLink>
		<HoverLink href="/donate/">Donate</HoverLink>
		<HoverLink href="/feedback/">Feedback</HoverLink>
		<HoverLink href="/about/partnerships/">Partnerships</HoverLink>
	</nav>
	<nav>
		<FooterTitle>Resources</FooterTitle>
		<HoverLink href="/learn/languages/">Languages</HoverLink>
		<HoverLink href="/learn/scripts/">Scripts</HoverLink>
		<HoverLink href="/texts/">Texts</HoverLink>
		<HoverLink href="/tools/hotkeys/">Keyboard layouts</HoverLink>
		<HoverLink href="/tools/typesetting/">Typesetting</HoverLink>
		<HoverLink href="/calendar/">Calendar</HoverLink>
	</nav>
	<nav>
		<FooterTitle>Legal</FooterTitle>
		<HoverLink href="/legal/cookies/">Cookie policy</HoverLink>
		<HoverLink href="/legal/disclosures/">Disclosures</HoverLink>
		<HoverLink href="/legal/privacy/">Privacy statement</HoverLink>
		<HoverLink href="/legal/tos/">Terms of service</HoverLink>
		<HoverLink href="/legal/accessibility/">Accessibility</HoverLink>
		<HoverLink href="/legal/responsible-disclosure/">Responsible disclosure</HoverLink>
	</nav>
</footer>
