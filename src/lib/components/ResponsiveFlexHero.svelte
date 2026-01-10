<script>
	import FlexHero from "./FlexHero.svelte";
	import ResponsiveFlexHeroContent from "./ResponsiveFlexHeroContent.svelte";

  let { children } = $props()
</script>

<FlexHero>
	<ResponsiveFlexHeroContent>
    {@render children?.()}
  </ResponsiveFlexHeroContent>
</FlexHero>
