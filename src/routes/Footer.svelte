<script lang="ts">
	import Logo from './Logo.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer sm:footer-horizontal bg-base-100 text-base-content p-10 flex-none">
	<aside>
		<a href="/about/" aria-label="About us">
			<Logo />
		</a>
		<p>&copy; 2025&ndash;{currentYear}</p>
	</aside>
	<nav>
		<h2 class="footer-title">Learn</h2>
		<a class="link link-hover" href="/learn/languages/">Languages</a>
		<a class="link link-hover" href="/learn/scripts/">Scripts</a>
		<a class="link link-hover" href="/donate/">Donate</a>
	</nav>
	<nav>
		<h2 class="footer-title">Tooling</h2>
		<a class="link link-hover" href="/tools/hotkeys/">Keyboard layouts</a>
		<a class="link link-hover" href="/tools/typesetting/">Typesetting</a>
		<a class="link link-hover" href="/feedback/">Feedback</a>
	</nav>
	<nav>
		<h2 class="footer-title">Legal</h2>
		<a class="link link-hover" href="/legal/tos/">Terms of service</a>
		<a class="link link-hover" href="/legal/privacy/">Privacy statement</a>
		<a class="link link-hover" href="/legal/cookies/">Cookie policy</a>
	</nav>
</footer>
