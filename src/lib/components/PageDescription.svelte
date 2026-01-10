<script>
  let { children } = $props()
</script>

<section class="py-6 px-8 lg:px-0 lg:max-w-96">
  <p>
    {@render children?.()}
  </p>
</section>
