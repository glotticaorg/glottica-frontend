<script>
const { children } = $props();
</script>

<div class="flex flex-col items-center text-center p-6 gap-4">
  {@render children?.()}
</div>
