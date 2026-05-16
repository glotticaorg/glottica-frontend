<script>
const { children } = $props();
</script>

<div class="flex flex-col lg:flex-row items-center gap-8 p-6">
  {@render children?.()}
</div>
