<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
	import HeroLander from './HeroLander.svelte';
</script>

<section>
	<HeroLander />
	<span class="welcome">
		<picture>
			<source srcset={welcome} type="image/webp" />
			<img src={welcomeFallback} alt="Welcome" />
		</picture>
	</span>
</section>
