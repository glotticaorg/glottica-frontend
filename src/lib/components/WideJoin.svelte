<script>
const { children } = $props();
</script>

<div class="flex flex-row w-full [&>*:not(:first-child)]:-ml-px [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child):not(:last-child)]:rounded-none">
  {@render children?.()}
</div>
