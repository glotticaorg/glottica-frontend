<script>
  let { children } = $props()
</script>

<div class="card-actions mt-3 min-w-80 px-4">
  {@render children?.()}
</div>
