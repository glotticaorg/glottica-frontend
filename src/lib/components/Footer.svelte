<script lang="ts">
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
		<h2 class="footer-title opacity-80">About us</h2>
		<a class="link link-hover" href="/about/">About us</a>
		<a class="link link-hover" href="/about/contact/">Contact</a>
		<a class="link link-hover" href="/donate/">Donate</a>
		<a class="link link-hover" href="/feedback/">Feedback</a>
	</nav>
	<nav>
		<h2 class="footer-title opacity-80">Resources</h2>
		<a class="link link-hover" href="/learn/languages/">Languages</a>
		<a class="link link-hover" href="/learn/scripts/">Scripts</a>
		<a class="link link-hover" href="/tools/hotkeys/">Keyboard layouts</a>
		<a class="link link-hover" href="/tools/typesetting/">Typesetting</a>
	</nav>
	<nav>
		<h2 class="footer-title opacity-80">Legal</h2>
		<a class="link link-hover" href="/legal/tos/">Terms of service</a>
		<a class="link link-hover" href="/legal/privacy/">Privacy statement</a>
		<a class="link link-hover" href="/legal/cookies/">Cookie policy</a>
		<a class="link link-hover" href="/legal/disclosures/">Disclosures</a>
	</nav>
</footer>
