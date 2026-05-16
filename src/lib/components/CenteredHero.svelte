<script>
import CenteredHeroContent from './CenteredHeroContent.svelte';
import FlexHero from './FlexHero.svelte';

const { children } = $props();
</script>

<FlexHero>
	<CenteredHeroContent>
    {@render children?.()}
  </CenteredHeroContent>
</FlexHero>
