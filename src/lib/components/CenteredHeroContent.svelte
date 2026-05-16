<script>
const { children } = $props();
</script>

<div class="flex flex-col items-center text-center gap-6 p-6">
  {@render children?.()}
</div>
