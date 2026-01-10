<script>
  let { children } = $props()
</script>

<div class="card shadow bg-base-300 min-w-64 md:min-w-128">
  {@render children?.()}
</div>
