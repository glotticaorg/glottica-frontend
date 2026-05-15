<script lang="ts">
import Footer from '$lib/components/Footer.svelte';
import Header from '$lib/components/Header.svelte';
import '../app.css';
const { children } = $props();
</script>

<div class="bg-base-200 min-h-lvh flex flex-col">
	<Header />
	<main class="flex-1 flex flex-col">
		{@render children()}
	</main>
	<Footer />
</div>
