<script>
	import CenteredHeroContent from "./CenteredHeroContent.svelte";
  import FlexHero from "./FlexHero.svelte";

  let { children } = $props()
</script>

<FlexHero>
	<CenteredHeroContent>
    {@render children?.()}
  </CenteredHeroContent>
</FlexHero>
