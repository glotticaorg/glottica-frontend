<script>
  let { children } = $props()
</script>

<div class="hero-content flex-col lg:flex-row">
  {@render children?.()}
</div>
