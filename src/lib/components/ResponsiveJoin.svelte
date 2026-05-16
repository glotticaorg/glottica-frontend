<script>
const { children } = $props();
</script>

<div class="flex flex-col md:flex-row [&>*:not(:first-child)]:-mt-px md:[&>*:not(:first-child)]:mt-0 md:[&>*:not(:first-child)]:-ml-px [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-b-none md:[&>*:first-child]:rounded-b-md md:[&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-t-none md:[&>*:last-child]:rounded-t-md md:[&>*:last-child]:rounded-l-none">
  {@render children?.()}
</div>
