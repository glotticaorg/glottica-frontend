<script lang="ts">
	import Logo from './Logo.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer sm:footer-horizontal bg-base-100 text-base-content p-10 flex-none">
	<aside>
		<Logo />
		<!-- TODO ADD FAVICON -->
		<p>&copy; 2025&ndash;{currentYear}</p>
	</aside>
	<nav>
		<h6 class="footer-title">Learn</h6>
		<a class="link link-hover" href="/learn/languages/">Languages</a>
		<a class="link link-hover" href="/learn/scripts/">Scripts</a>
		<a class="link link-hover" href="/donate/">Donate</a>
	</nav>
	<nav>
		<h6 class="footer-title">Tooling</h6>
		<a class="link link-hover" href="/tools/hotkeys/">Keyboard layouts</a>
		<a class="link link-hover" href="/tools/typesetting/">Typesetting</a>
		<a class="link link-hover" href="/feedback/">Feedback</a>
	</nav>
	<nav>
		<h6 class="footer-title">Legal</h6>
		<a class="link link-hover" href="/legal/tos/">Terms of use</a>
		<a class="link link-hover" href="/legal/privacy/">Privacy policy</a>
		<a class="link link-hover" href="/legal/cookies/">Cookie policy</a>
	</nav>
</footer>
