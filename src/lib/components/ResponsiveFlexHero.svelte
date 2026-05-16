<script>
import FlexHero from './FlexHero.svelte';
import ResponsiveFlexHeroContent from './ResponsiveFlexHeroContent.svelte';

const { children } = $props();
</script>

<FlexHero>
	<ResponsiveFlexHeroContent>
    {@render children?.()}
  </ResponsiveFlexHeroContent>
</FlexHero>
