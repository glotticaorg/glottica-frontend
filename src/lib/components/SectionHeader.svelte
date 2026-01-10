<script>
  let { children } = $props()
</script>

<h2 class="text-2xl font-semibold mb-4 mt-4">
  {@render children?.()}
</h2>
