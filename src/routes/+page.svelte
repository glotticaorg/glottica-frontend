<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
	import HeroLander from './HeroLander.svelte';
</script>

<svelte:head>
	<title>Glottica.org</title>
	<meta name="description" content="Learning platform and tools for Indo-Europeanists." />
</svelte:head>

<section>
	<HeroLander />
	<span class="welcome">
		<picture>
			<source srcset={welcome} type="image/webp" />
			<img src={welcomeFallback} alt="Welcome" />
		</picture>
	</span>
</section>
