<script lang="ts">
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import '../app.css';

let { children } = $props();
</script>

<svelte:head>
	<title>Glottica.org</title>
	<meta name="description" content="Learning platform and tools for Indo-Europeanists." />
</svelte:head>

<div class="app bg-base-200 min-h-lvh flex flex-col">
	<Header />
	<main class="flex-1 flex flex-col">
		{@render children()}
	</main>
	<Footer />
</div>
