<script>
const { children } = $props();
</script>

<div class="flex flex-wrap gap-2 mt-3 min-w-80 px-4">
  {@render children?.()}
</div>
