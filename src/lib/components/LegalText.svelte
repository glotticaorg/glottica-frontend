<script>
  let { children } = $props()
</script>

<article class="pb-6 px-8 lg:px-0 mx-auto w-full md:max-w-200">
  {@render children?.()}
</article>
